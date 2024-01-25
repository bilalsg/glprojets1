from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import *


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class LawyerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lawyer
        fields = ['id', 'password','username', 'email', 'date_of_birth', 'profile_picture','name','phone','adress','email','website','facebook'
                  ,'twitter','linkedin','category','description','cv']

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['lawyer', 'rating', 'comment', 'created_at']

from django.contrib.auth import get_user_model

class LawyerRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['id', 'password', 'username', 'email', 'date_of_birth', 'profile_picture', 'name', 'phone', 'adress', 'website',
                  'facebook', 'twitter', 'linkedin', 'category', 'description', 'cv']
        extra_kwargs = {'password': {'write_only': True}}

class LawyerAuthenticationSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

class GoogleUserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = GoogleUser
        fields = ['username', 'email', 'test']  # Include other fields as needed
        
class GoogleUserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    username = serializers.CharField()

    def validate(self, data):
        # You can perform additional validation logic if required
        return data