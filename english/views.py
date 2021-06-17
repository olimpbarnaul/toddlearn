"""Main views file of application English"""
import os
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import redirect
from django.utils.text import slugify
from gtts import gTTS
from .services import get_dictionary


@login_required
def dictionary(request):
    return HttpResponse(get_dictionary(request.user), content_type='application/json')

@login_required
def play(request):
    phrase = request.GET.get('phrase')
    lang = request.GET.get('lang', default = 'en')
    fname = os.path.join(settings.BASE_DIR, settings.MEDIA_ROOT, lang, slugify(phrase, allow_unicode=True) + '.mp3')
    if not os.path.isfile(fname):
        tts = gTTS(phrase, lang = lang)
        tts.save(fname)
    f = open(fname, "rb")
    response = HttpResponse(f.read())
    response['Content-Type'] = 'audio/mp3'
    response['Content-Length'] = os.path.getsize(fname)
    return response;
