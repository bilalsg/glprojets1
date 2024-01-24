from django.db import models
from django.contrib.auth.models import AbstractUser,Group,Permission
# Create your models here.
class Lawyer(AbstractUser):
    # Add your additional fields
    name = models.CharField(max_length=100)
    phone = models.IntegerField()
    adress = models.CharField(max_length=100)
    email = models.EmailField(blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    facebook = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)
    category = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    cv = models.TextField(blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', null=True, blank=True)

    def __str__(self):
        return self.username
    

class Review(models.Model):
    lawyer = models.ForeignKey(Lawyer, on_delete=models.CASCADE, related_name='reviews')
    rating = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
Lawyer._meta.get_field('groups').remote_field.related_name = 'customuser_groups'
Lawyer._meta.get_field('user_permissions').remote_field.related_name = 'customuser_user_permissions'