from django.contrib.auth.backends import ModelBackend
from .models import Lawyer

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