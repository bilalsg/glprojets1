# Generated by Django 4.1.2 on 2024-01-27 19:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tester', '0016_calender_google_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='calender',
            old_name='empty',
            new_name='empty_waiting',
        ),
        migrations.RenameField(
            model_name='calender',
            old_name='inavailable',
            new_name='occupied_inavailable',
        ),
        migrations.RemoveField(
            model_name='calender',
            name='occupied',
        ),
        migrations.RemoveField(
            model_name='calender',
            name='waiting',
        ),
    ]
