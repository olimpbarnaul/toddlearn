from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='english'),
    path('training/<str:training_type>', training, name='training')
]
