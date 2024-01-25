from django.contrib.auth.backends import ModelBackend
from .models import *

class LawyerBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            # Assuming your Lawyer model uses the 'username' field for authentication
            print(password)
            print(username)
            user = Lawyer.objects.get(username=username)
        except Lawyer.DoesNotExist:
            return None
        print(user)
        if user.check_password(password):
            return user
        return None

class GoogleUserBackend(ModelBackend):
    def authenticate(self, request, email=None, username=None, **kwargs):
        try:
            google_user = GoogleUser.objects.get(email=email, username=username)
            return google_user
        except GoogleUser.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return GoogleUser.objects.get(pk=user_id)
        except GoogleUser.DoesNotExist:
            return None