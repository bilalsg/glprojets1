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
    profile_picture = models.URLField(max_length=200, null=True, blank=True)

    def __str__(self):
        return str(self.id)
    


class GoogleUser(AbstractUser):
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField()
    def __str__(self):
        return str(self.id)


class Calender(models.Model):
    law = models.ForeignKey(Lawyer, on_delete=models.CASCADE, related_name='cal')
    google_user = models.ForeignKey(GoogleUser, on_delete=models.SET_NULL, null=True, blank=True, related_name='calendars')
    date_created = models.DateField()
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
    empty_waiting = models.BooleanField(default=True)
    occupied_inavailable = models.BooleanField(default=False)
    def __str__(self):
        return str(self.time)
    

class Review(models.Model):
    lawyerr = models.ForeignKey(Lawyer, on_delete=models.CASCADE, related_name='reviews',blank=True, null=True)
    userr = models.ForeignKey(GoogleUser, on_delete=models.CASCADE, related_name='rev')
    rating = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

Lawyer._meta.get_field('groups').remote_field.related_name = 'customuser_groups'
Lawyer._meta.get_field('user_permissions').remote_field.related_name = 'customuser_user_permissions'

