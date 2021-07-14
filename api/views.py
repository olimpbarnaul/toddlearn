import os
from django.conf import settings
from django.utils.text import slugify
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from gtts import gTTS
from .serializers import UserDataSerializer


def play(request):
    phrase = request.GET.get('phrase')
    lang = request.GET.get('lang', default='en')
    fname = os.path.join(
        settings.BASE_DIR,
        settings.MEDIA_ROOT,
        lang,
        slugify(phrase, allow_unicode=True) + '.mp3'
    )
    if not os.path.isfile(fname):
        tts = gTTS(phrase, lang=lang)
        tts.save(fname)
    file_mp3 = open(fname, "rb")
    response = HttpResponse(file_mp3.read())
    response['Content-Type'] = 'audio/mp3'
    response['Content-Length'] = os.path.getsize(fname)
    return response


@api_view(['GET', 'POST'])
def user_data(request, slug):
    if request.method == 'POST':
        serializer = UserDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user_id=request.user.id)
        return Response(status=status.HTTP_200_OK)
    else:
        data = request.user.data.get(slug=slug)
        serializer = UserDataSerializer(data)
        return Response(serializer.data)
