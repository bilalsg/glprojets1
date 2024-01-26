from rest_framework import permissions
from .models import *

class IsVerifiedUser(permissions.BasePermission):
    def has_permission(self, request, view):
        # Retrieve the 'X-User-ID' header from the request
        user_id = request.headers.get('X-User-ID')

        # Check if the user ID is valid (add your verification logic here)
        return is_valid_user_id(user_id)

def is_valid_user_id(user_id):
    # Implement your logic to validate the user ID
    # For example, check if the user with this ID exists in your database
    try:
        user = GoogleUser.objects.get(id=user_id)
        return True
    except GoogleUser.DoesNotExist:
        return False