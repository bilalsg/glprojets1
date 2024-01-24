from django.db import models
from django.contrib.auth.models import AbstractUser,Group,Permission
# Create your models here.
class Lawyer(AbstractUser):
    # Add your additional fields
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length = 10,default = "0000000000")
    adress = models.CharField(max_length=100)
    email = models.EmailField(blank=True, null=True)
    website = models.URLField(blank=True, null=True )
    facebook = models.URLField(blank=True, null=True,default="www.facebook.com")
    twitter = models.URLField(blank=True, null=True,default="www.twitter.com")
    linkedin = models.URLField(blank=True, null=True,default = "www.linkedin.com")
    category = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    cv = models.TextField(blank=True,default = "lawyer")
    date_of_birth = models.DateField(null=True, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', null=True, blank=True)

    def __str__(self):
        return self.username
    

class Review(models.Model):
    lawyer = models.ForeignKey(Lawyer, on_delete=models.CASCADE, related_name='reviews')
    rating = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Calender(models.Model):
    date_created = models.DateField(auto_now_add=True)
    worktimes = [
        ('7:00  - 8:00 ', '7:00  - 8:00'),
        ('8:00  - 9:00 ', '8:00  - 9:00'),
        ('9:00  - 10:00 ', '9:00  - 10:00'),
        ('10:00 - 11:00 ', '10:00 - 11:00'),
        ('11:00 - 12:00 ', '11:00 - 12:00'),
        ('12:00 - 13:00 ', '12:00 - 13:00'),
        ('13:00 - 14:00 ', '13:00 - 14:00'),
        ('14:00 - 15:00 ', '14:00 - 15:00'),
        ('15:00 - 16:00 ', '15:00 - 16:00'),
        ('16:00 - 17:00 ', '16:00 - 17:00'),
        ('17:00 - 18:00 ', '17:00 - 18:00'),
    ]
    time = models.CharField(max_length=50, choices=worktimes)
    occupied = models.BooleanField(default=False)
    waiting = models.BooleanField(default=False)
    empty = models.BooleanField(default=True)
    inavailable = models.BooleanField(default=False)

Lawyer._meta.get_field('groups').remote_field.related_name = 'customuser_groups'
Lawyer._meta.get_field('user_permissions').remote_field.related_name = 'customuser_user_permissions'

