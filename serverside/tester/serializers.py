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