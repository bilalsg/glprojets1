from .serializers import *
from .models import *
import os
import django
filepath = 'C:\\Users\\LENOVO\\Desktop\\gl\\serverside\\exper\\settings.py'
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "exper.settings")  # Adjust the path accordingly
django.setup()
from django.shortcuts import render

# Create your views here.

def test(request):

    # Calender.objects.all().delete()
    # from datetime import datetime, timedelta
    # from django.utils import timezone

    # # Function to generate instances for the next 30 days
    # def generate_calendar_instances():
    #     worktimes = [
    #         ('7:00  - 8:00 ', '7:00  - 8:00'),
    #         ('8:00  - 9:00 ', '8:00  - 9:00'),
    #         ('9:00  - 10:00 ', '9:00  - 10:00'),
    #         ('10:00 - 11:00 ', '10:00 - 11:00'),
    #         ('11:00 - 12:00 ', '11:00 - 12:00'),
    #         ('12:00 - 13:00 ', '12:00 - 13:00'),
    #         ('13:00 - 14:00 ', '13:00 - 14:00'),
    #         ('14:00 - 15:00 ', '14:00 - 15:00'),
    #         ('15:00 - 16:00 ', '15:00 - 16:00'),
    #         ('16:00 - 17:00 ', '16:00 - 17:00'),
    #         ('17:00 - 18:00 ', '17:00 - 18:00'),
    #     ]

    #     # Get the current date
    #     today = timezone.now().date()

    #     # Generate instances for the next 30 days
    #     for day_offset in range(30):
    #         date_to_create = today + timedelta(days=day_offset)

    #         # Create instances for each worktime
    #         for time_start, time_end in worktimes:
    #             # Construct the time string and create Calendar instance
    #             time_range = time_start
    #             lawyerid = 528
    #             lawyere = Lawyer.objects.get(id=lawyerid)
    #             Calender.objects.create(date_created=date_to_create, time=time_range,law=lawyere)

    # #Call the function to generate instances
    # generate_calendar_instances()
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

# class ReviewViewSet(viewsets.ModelViewSet):
#     queryset = Review.objects.all()
#     serializer_class = ReviewSerializer

from django.contrib.auth.hashers import make_password
class LawyerRegistrationView(generics.CreateAPIView):
    serializer_class = LawyerRegistrationSerializer

    def post(self, request, *args, **kwargs):
        # Assuming raw_password is obtained from request.data
        raw_password = request.data.get('password')

        # Hash the password using make_password
        hashed_password = make_password(raw_password)

        # Create a mutable copy of request.data
        mutable_data = request.data.copy()

        # Replace the 'password' field in the mutable copy with the hashed password
        mutable_data['password'] = hashed_password
        serializer = self.get_serializer(data=mutable_data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        print(user)
        return Response(LawyerSerializer(user).data, status=status.HTTP_201_CREATED)

class LawyerAuthenticationView(generics.GenericAPIView):
    serializer_class = LawyerAuthenticationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data['username']
        password = serializer.validated_data['password']

        user = authenticate(username=username, password=password)

        if user:
            token, created = Token.objects.get_or_create(user=user)

            # Fetch additional information about the lawyer
            try:
                lawyer = Lawyer.objects.get(username=username)
                lawyer_data = {
                    'id': lawyer.id,
                    'name': lawyer.name,
                    'email': lawyer.email,    
                        'phone' : lawyer.phone,
                        'adress' : lawyer.adress,
                        
                        'website' :lawyer.website,
                        'facebook' :lawyer.facebook,
                        'twitter' :lawyer.twitter,
                        'linkedin' :lawyer.linkedin,
                        'category':lawyer.category,
                        'description':lawyer.description,
                        'cv':lawyer.cv,
                        'date_of_birth':lawyer.date_of_birth,
                        'profile_picture':lawyer.profile_picture
                    # Include other fields as needed
                }
            except Lawyer.DoesNotExist:
                lawyer_data = None

            # Include lawyer information in the response
            response_data = {
                'token': token.key,
                'lawyer': lawyer_data,
            }

            return Response(response_data)
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
    serializer_class = ReviewSerializer3
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        # Extract data from the request
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Get user_id from the 'X-User-ID' header
            user_id = request.headers.get('X-User-ID', None)
            lawyer_id = request.headers.get('LawyerID', None)
            # user_id=6
            # lawyer_id=578

            # Check if user_id is provided
            if not user_id:
                return Response("User ID not provided in the header", status=status.HTTP_400_BAD_REQUEST)

            try:
                # Retrieve the user instance based on the user ID
                user = GoogleUser.objects.get(id=user_id)

                # Extract data for creating the Review instance
                
                rating = serializer.validated_data.get('rating')
                comment = serializer.validated_data.get('comment')

                # Retrieve the lawyer instance based on the lawyer ID
                lawyer = Lawyer.objects.get(id=lawyer_id)

                # Create the Review instance
                review = Review.objects.create(
                    userr=user,
                    lawyerr=lawyer,
                    rating=rating,
                    comment=comment
                )

                return Response("Review created successfully", status=status.HTTP_201_CREATED)

            except GoogleUser.DoesNotExist:
                return Response("Invalid user ID", status=status.HTTP_400_BAD_REQUEST)
            except Lawyer.DoesNotExist:
                return Response("Invalid lawyer ID", status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class LawyerReviewsView(generics.ListAPIView):
#     serializer_class = ReviewSerializer
#     permission_classes = [permissions.AllowAny]

#     def get_queryset(self, *args, **kwargs):
#         # Get the lawyer_id from the request query parameters
#         lawyer_id = self.request.query_params.get('lawyer_id')
#         laywer_id=528
#         # Check if lawyer_id is provided
#         if lawyer_id is not None:
#             # Filter reviews based on the provided lawyer_id
#             lawyerrr = Lawyer.objects.filter(id=lawyer_id)
#             queryset = Review.objects.filter(lawyerr=lawyerrr)
#             return queryset

#         # If lawyer_id is not provided, return an empty queryset or all reviews
#         return Review.objects.none() 
    
class LawyerReviewsView2(generics.ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        # Get the lawyer_id from the URL parameters
        lawyer_id = self.kwargs['lawyer_id']

        # Filter reviews based on the provided lawyer_id
        queryset = Review.objects.filter(lawyerr_id=lawyer_id)

        return queryset






class DeleteLawyerView(generics.GenericAPIView):
    permission_classes = [permissions.IsAdminUser]  # Ensure the user is authenticated

    def delete(self, request, lawyer_id):
        try:
            lawyer = Lawyer.objects.get(id=lawyer_id)
        except Lawyer.DoesNotExist:
            return Response({'error': 'Lawyer not found'}, status=status.HTTP_404_NOT_FOUND)

        lawyer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

class LawyerAppointmentsAPIView(generics.ListAPIView):
    serializer_class = CalenderSerializer

    def get_queryset(self):
        print("test")
        # Get the lawyer_id from the URL parameters
        lawyer_id = self.kwargs['lawyer_id']
        print(lawyer_id)
        # Filter reviews based on the provided lawyer_id
        queryset = Calender.objects.filter(law=lawyer_id)

        return queryset
import json
class CalenderUserView(generics.UpdateAPIView):
    queryset = Calender.objects.all()
    serializer_class = CalenderSerializer2

    def update(self, request, *args, **kwargs):
        # Assuming 'google_user', 'law', 'time', and 'date_created' are present in the request data
        google_user_id = request.data.get('google_user', None)
        lawyer_id = request.data.get('law', None)
        time = request.data.get('time', None)
        date_created = request.data.get('date_created', None)
        empt = request.data.get('empty', None)
        waiti = request.data.get('waiting', None)
        # Additional validation or checks based on your requirements
        print(request.data)
        # Extract the instance based on google_user, law, time, and date_created
        try:
            instance = Calender.objects.get(
                
                law_id=lawyer_id,
                time=time,
                date_created=date_created
            )
        except Calender.DoesNotExist:
            return Response({'detail': 'Calender not found'}, status=status.HTTP_404_NOT_FOUND)
        
        # Update the fields
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        instance.empty = empt
        instance.waiting = waiti
        instance.google_user = serializer.validated_data['google_user']
        instance.save()

        return Response(serializer.data)

class CalenderLawyerView(generics.UpdateAPIView):
    queryset = Calender.objects.all()
    serializer_class = CalenderSerializer3

    def update(self, request, *args, **kwargs):
        # Assuming 'google_user', 'law', 'time', and 'date_created' are present in the request data
        google_user_idd = request.data.get('google_user', None)
        lawyer_id = request.data.get('law', None)
        time = request.data.get('time', None)
        date_created = request.data.get('date_created', None)
        occu = request.data.get('occupied', None)
        waiti = request.data.get('waiting', None)
        inav = request.data.get('inavailable', None)
        # Additional validation or checks based on your requirements
        print(request.data)
        # Extract the instance based on google_user, law, time, and date_created
        try:
            instance = Calender.objects.get(
                google_user_id=google_user_idd,
                law_id=lawyer_id,
                time=time,
                date_created=date_created
            )
        except Calender.DoesNotExist:
            return Response({'detail': 'Calender not found'}, status=status.HTTP_404_NOT_FOUND)
        
        # Update the fields
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        instance.occupied = occu
        instance.waiting = waiti
        instance.inavailable = inav
        
        instance.save()

        return Response(serializer.data)
    
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

class LawyerLogoutView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        # Delete the user's token to perform a logout
        request.auth.delete()

        # You can perform any additional cleanup or logout logic here

        return Response({'detail': 'Successfully logged out'}, status=status.HTTP_200_OK)