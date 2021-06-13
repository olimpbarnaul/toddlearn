"""Main views file of application English"""
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from .services import get_dictionary


@login_required
def dictionary(request):
    return HttpResponse(get_dictionary(request.user), content_type='application/json')
