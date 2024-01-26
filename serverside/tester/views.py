import os
import django
filepath = 'C:\\Users\\LENOVO\\Desktop\\gl\\serverside\\exper\\settings.py'
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "exper.settings")  # Adjust the path accordingly
django.setup()
from django.shortcuts import render

# Create your views here.

def test(request):
    GoogleUser.objects.all().delete()
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
    #     from django.contrib.auth.hashers import make_password
    #     hashed_password = make_password(random_password)
    #     list_of_rpswd.append({'email':random_email,"pass":random_password})
    #     print(formatted_string)
    #     print(list_of_rpswd)
    #     instance = Lawyer(
    #         name=row['full_name'],
    #         email=row['email'],
    #         adress=row['address'],
    #         category = row['categories'],
    #         username = formatted_string,
    #         password = hashed_password
    #         # Add other fields as needed
    #     )
    #     instance.save()
    #     # instance.set_password(random_password)
    #     # instance.username = formatted_string
    return render(request,'main.html')

# from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets,status,generics,views
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model ,authenticate
from .serializers import *
from .models import *

# class UserViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = User.objects.all().order_by('-date_joined')
#     serializer_class = UserSerializer
#     permission_classes = [permissions.IsAuthenticated]

# class GroupViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows groups to be viewed or edited.
#     """
#     queryset = Group.objects.all()
#     serializer_class = GroupSerializer
#     permission_classes = [permissions.IsAuthenticated]

class LawyerViewSet(viewsets.ModelViewSet):
    queryset = Lawyer.objects.all()
    serializer_class = LawyerSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

from django.contrib.auth.hashers import make_password
class LawyerRegistrationView(generics.CreateAPIView):
    serializer_class = LawyerRegistrationSerializer

    def post(self, request, *args, **kwargs):
        raw_password = request.data.get('password')

        # Hash the password using make_password
        hashed_password = make_password(raw_password)

        # Replace the 'password' field in request.data with the hashed password
        request.data['password'] = hashed_password
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        print(user)
        return Response(LawyerSerializer(user).data, status=status.HTTP_201_CREATED)

class LawyerAuthenticationView(generics.GenericAPIView):
    serializer_class = LawyerAuthenticationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        usernamee=serializer.validated_data['username']
        passwordd=serializer.validated_data['password']
        print(usernamee)
        print(passwordd)
        user = authenticate(
            username=serializer.validated_data['username'],
            password=serializer.validated_data['password']
        )
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        else:
            return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class GoogleUserRegistrationView(generics.GenericAPIView):
    serializer_class = GoogleUserRegistrationSerializer
    

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Extract user information from the validated data
        email = serializer.validated_data.get('email')
        name = serializer.validated_data.get('name')
        print(name)
        print(email)
        from faker import Faker
        fake = Faker()
        username = fake.user_name()
        print(username)
        # Check if a user with the given email already exists
        google_user, created = GoogleUser.objects.get_or_create(
            email=email,
            defaults={
                'name': name,
                'username':username
                
            }
        )

        return Response(GoogleUserRegistrationSerializer(google_user).data, status=status.HTTP_201_CREATED)

class GoogleUserLoginView(generics.GenericAPIView):
    serializer_class = GoogleUserLoginSerializer

    def get_or_create_user_token(user):
        if isinstance(user, Lawyer):
            # Handle the token creation logic for Lawyer instances
            token, created = Token.objects.get_or_create(user=user)
        elif isinstance(user, GoogleUser):
            # Handle the token creation logic for CustomUser instances
            # You might need to adjust this based on how CustomUser is set up in your project
            token, created = Token.objects.get_or_create(user=user)
        else:
            # Handle other user types if necessary
            token, created = None, False

        return token, created
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Extract user information from the validated data
        email = serializer.validated_data.get('email')
        username = serializer.validated_data.get('name')


        # Check if a user with the given email already exists
        google_user = GoogleUser.objects.get(email=email, name=username)
        google_user_id = google_user.id

        # Generate or get an existing token for the user
        

        return Response({'token': google_user_id}, status=status.HTTP_200_OK)


from .permissions import IsVerifiedUser
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Review
from .serializers import ReviewSerializer
from .models import GoogleUser, Lawyer

class ReviewCreateView(generics.GenericAPIView):
    serializer_class = ReviewSerializer  # Add this line
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        # Extract data from the request
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Assuming the user ID is provided in the 'X-User-ID' header
            user_id = request.headers.get('X-User-ID')

            try:
                # Retrieve the user instance based on the user ID
                user = GoogleUser.objects.get(id=user_id)

                # Extract data for creating the Review instance
                serializer.validated_data['userr'] = user

                # Assuming the lawyer ID is provided in the request data
                lawyer_id = serializer.validated_data.get('lawyer_id')
                lawyer = Lawyer.objects.get(id=lawyer_id)
                serializer.validated_data['lawyer'] = lawyer

                # Create the Review instance
                review = Review.objects.create(**serializer.validated_data)

                return Response("Review created successfully", status=status.HTTP_201_CREATED)

            except GoogleUser.DoesNotExist:
                return Response("Invalid user ID", status=status.HTTP_400_BAD_REQUEST)
            except Lawyer.DoesNotExist:
                return Response("Invalid lawyer ID", status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)