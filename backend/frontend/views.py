from django.shortcuts import render
from .models import User, Round
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer, RoundSerializer

def index(request):
    return render(request, 'build/index.html')

class UserView(APIView):

    def get(self, request, format=None):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    # def post(self, request, format=None):
    #     serializer = AnimalSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RoundView(APIView):
    def get(self, request, format=None):
        scores = Round.objects.all()
        serializer = RoundSerializer(scores, many=True)
        return Response(serializer.data)