# Generated by Django 4.1.2 on 2024-01-26 23:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tester', '0013_alter_lawyer_profile_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='calender',
            name='date_created',
            field=models.DateField(),
        ),
    ]