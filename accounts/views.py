from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions


class UserData(APIView):
  permission_classes = [permissions.IsAuthenticated]

  def get(self, request):
    serializer = UserSerializer(request.user, context={'request': request})
    return Response(serializer.data)
