from django.urls import include, path
from .views import *

app_name = 'api'
urlpatterns = [
    # path('user', views.UserData.as_view()),
    # path('', include('rest_framework.urls', namespace='rest_framework')),
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
    path('dictionary', dictionary, name='dictionary'),
    path('play', play, name='play'),
]
