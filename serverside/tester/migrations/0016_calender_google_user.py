# Generated by Django 4.1.2 on 2024-01-27 01:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tester', '0015_calender_law'),
    ]

    operations = [
        migrations.AddField(
            model_name='calender',
            name='google_user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='calendars', to='tester.googleuser'),
        ),
    ]
