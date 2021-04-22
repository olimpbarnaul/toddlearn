from django.urls import path
from .views import *

app_name = 'english'
urlpatterns = [
    # path('', index, name='english'),
    path('training/<str:training_type>', training, name='training')
]
