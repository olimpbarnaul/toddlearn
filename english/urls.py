from django.urls import path
from .views import *

app_name = 'english'
urlpatterns = [
    path('dictionary', dictionary, name='dictionary'),
]
