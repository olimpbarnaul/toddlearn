from django.contrib.auth.models import User
from .models import UserData
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'username', 'email', 'first_name']


class UserDataSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserData
    fields = ['detail', 'slug']

  def create(self, validated_data):
    user_data = UserData.objects.update_or_create(
      user_id=validated_data.get('user_id', None),
      slug=validated_data.get('slug', None),
      defaults={'detail': validated_data.get('detail')}
    )
    return user_data
