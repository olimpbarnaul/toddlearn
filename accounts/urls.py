from django.urls import include, path
# from . import views

urlpatterns = [
    # path('user', views.UserData.as_view()),
    # path('', include('rest_framework.urls', namespace='rest_framework')),
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
]
