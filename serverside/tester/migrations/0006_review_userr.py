# Generated by Django 4.1.2 on 2024-01-26 00:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tester', '0005_rename_test_googleuser_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='userr',
            field=models.ForeignKey(default=3, on_delete=django.db.models.deletion.CASCADE, related_name='rev', to='tester.googleuser'),
            preserve_default=False,
        ),
    ]