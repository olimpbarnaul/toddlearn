from django.urls import include, path
from .views import *

app_name = 'api'
urlpatterns = [
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
    path('play', play),
    path('user_data/<slug:slug>/', user_data),
]
