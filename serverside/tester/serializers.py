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
    userr = serializers.SerializerMethodField()
    class Meta:
        model = Review
        fields = ['lawyerr', 'rating', 'comment','userr']
    def get_userr(self, obj):
        userr = obj.userr
        return {
            'id': userr.id,
            'name': userr.name,
            'email': userr.email,
            # Include other fields as needed
        }

class ReviewSerializer2(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['lawyerr', 'rating', 'comment']
class ReviewSerializer3(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = [ 'rating', 'comment']
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
        fields = [ 'email', 'name']  # Include other fields as needed
        
class GoogleUserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    name = serializers.CharField()

    def validate(self, data):
        # You can perform additional validation logic if required
        return data
    
class CalenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calender
        fields = [ 'time', 'occupied','waiting','empty','inavailable','law','date_created','google_user']


class CalenderSerializer2(serializers.ModelSerializer):
    class Meta:
        model = Calender
        fields = ['id', 'empty_waiting','date_created','time','law','google_user','occupied_inavailable']

class CalenderSerializer3(serializers.ModelSerializer):
    class Meta:
        model = Calender
        fields = ['id', 'empty_waiting','date_created','time','law','google_user','occupied_inavailable']

class AppSerializer(serializers.ModelSerializer):
    google_user_name = serializers.SerializerMethodField()

    class Meta:
        model = Appointment
        fields = ['id', 'sent', 'accepted', 'time', 'law', 'google_user', 'date_created', 'google_user_name']

    def get_google_user_name(self, obj):
        google_user = obj.google_user
        return google_user.name if google_user else None

class NoitfSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['id', 'userr','text','time','date_created']

