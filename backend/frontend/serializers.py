from rest_framework import serializers
from .models import Round, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class RoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Round
        fields = '__all__'
