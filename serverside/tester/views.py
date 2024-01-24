import os
import django
filepath = 'C:\\Users\\LENOVO\\Desktop\\gl\\serverside\\exper\\settings.py'
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "exper.settings")  # Adjust the path accordingly
django.setup()
from django.shortcuts import render

# Create your views here.

def test(request):
    # print("hellos")
    # from .models import Lawyer
    # import string
    # import random
    # import csv
    # import sys
    # import json
    # import re
    # file_path = 'C:\\Users\\LENOVO\\Desktop\\gl\\serverside\\tester\\test.csv'
    # filepath2 = 'C:\\Users\\LENOVO\\Desktop\\gl\\serverside\\tester\\data.json'


    # data_list = []  # List to store dictionaries



    # try:
    #     with open(file_path, 'r', encoding='utf-8') as csv_file:
    #         # Use DictReader to read the CSV file with headers
    #         csv_reader = csv.DictReader(csv_file)

    #         # Iterate over each row as a dictionary
    #         for row in csv_reader:
    #             data_dict = dict(row)  # Convert each row to a dictionary
    #             data_list.append(data_dict)  # Add the dictionary to the list

    # except FileNotFoundError:
    #     print(f"Error: File '{file_path}' not found.")
    # except Exception as e:
    #     print(f"Error: {e}")

    # # Print each dictionary as a JSON string using sys.stdout
    # json_list=[]
    # for data_dict in data_list:
    #     json_string = json.dumps(data_dict, ensure_ascii=False)
    #     json_list.append(json_string.encode(sys.stdout.encoding, 'replace'))

    # from faker import Faker

    # def generate_random_email():
    #     fake = Faker()
    #     return fake.email()
    # with open(filepath2, 'r', encoding='utf-8') as json_file:
    #     data = json.load(json_file)
    # print('aaaaaaaaaa')
    # for i in data:
    #     print(i["full_name"])
     
    # # Example usage
    # random_email = generate_random_email()
    # print(random_email)
    # def generate_random_password(length=12):
    #     # Characters for password generation (you can customize this)
    #     characters = string.ascii_letters + string.digits + string.punctuation
        
    #     # Generate a random password with the specified length
    #     password = ''.join(random.choice(characters) for _ in range(length))
        
    #     return password

    # # Example usage
    # random_password = generate_random_password()
    # list_of_rpswd = []
    # list_of_rpswd.append({'email':random_email,"pass":random_password})
    # print(random_password)
    # print(list_of_rpswd)
    # print(json_list[0])
    # for row in data:
    #     formatted_string = re.sub(r'[^a-zA-Z ]', '', row['full_name']).lower().replace(" ", "_")
    #     random_password = generate_random_password()
    #     list_of_rpswd.append({'email':random_email,"pass":random_password})
    #     instance = Lawyer(
    #         name=row['full_name'],
    #         email=row['email'],
    #         adress=row['address'],
    #         category = row['categories'],
    #         username = formatted_string,
    #         password = random_password
    #         # Add other fields as needed
    #     )
    #     instance.save()
    #     # instance.set_password(random_password)
    #     # instance.username = formatted_string
    return render(request,'main.html')

from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets

from .serializers import *
from .models import *

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class LawyerViewSet(viewsets.ModelViewSet):
    queryset = Lawyer.objects.all()
    serializer_class = LawyerSerializer
    permission_classes = [permissions.IsAuthenticated]

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer



