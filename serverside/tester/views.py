from .serializers import *
from .models import *
import os
import django
filepath = 'C:\\Users\\LENOVO\\Desktop\\gl\\serverside\\exper\\settings.py'
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "exper.settings")  # Adjust the path accordingly
django.setup()
from django.shortcuts import render
import random
from rest_framework import permissions, viewsets,status,generics,views
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model ,authenticate
from django.contrib.auth.hashers import make_password
from .permissions import IsVerifiedUser
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Review
from .serializers import ReviewSerializer
from .models import GoogleUser, Lawyer
from rest_framework.authentication import TokenAuthentication
import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

# Create your views here.

def test(request):

    return render(request,'main.html')

class LawyerViewSet(viewsets.ModelViewSet): ##This view handles retrieving every Lawyer instance in the database 
    queryset = Lawyer.objects.all()
    serializer_class = LawyerSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class LawyerRegistrationView(generics.CreateAPIView):  ##This view handles the Lawyer registration process
    serializer_class = LawyerRegistrationSerializer
    def post(self, request, *args, **kwargs):
        #raw_password is obtained from request.data
        raw_password = request.data.get('password')

        #Hash the password using make_password
        hashed_password = make_password(raw_password)

        #Create a mutable copy of request.data
        mutable_data = request.data.copy()

        #Replace the 'password' field in the mutable copy with the hashed password
        mutable_data['password'] = hashed_password
        serializer = self.get_serializer(data=mutable_data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        print(user)
        return Response(LawyerSerializer(user).data, status=status.HTTP_201_CREATED)

class LawyerAuthenticationView(generics.GenericAPIView): ##This view handles the lawyer Authentication process
    serializer_class = LawyerAuthenticationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data['username']
        password = serializer.validated_data['password']

        user = authenticate(username=username, password=password)

        if user:
            token, created = Token.objects.get_or_create(user=user)

            #Fetch additional information about the lawyer
            try:
                lawyer = Lawyer.objects.get(username=username)
                lawyer_data = {
                    'id': lawyer.id,
                    'name': lawyer.name,
                    'email': lawyer.email,    
                        'phone' : lawyer.phone,
                        'adress' : lawyer.adress,
                        'is_staff': lawyer.is_staff,
                        'website' :lawyer.website,
                        'facebook' :lawyer.facebook,
                        'twitter' :lawyer.twitter,
                        'linkedin' :lawyer.linkedin,
                        'category':lawyer.category,
                        'description':lawyer.description,
                        'cv':lawyer.cv,
                        'date_of_birth':lawyer.date_of_birth,
                        'profile_picture':lawyer.profile_picture
                    #Include other fields as needed
                }
            except Lawyer.DoesNotExist:
                lawyer_data = None

            #Include lawyer information in the response
            response_data = {
                'token': token.key,
                'lawyer': lawyer_data,
            }

            return Response(response_data)
        else:
            return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class GoogleUserRegistrationView(generics.GenericAPIView): ##This view handles the GoogleUser Registration Process
    serializer_class = GoogleUserRegistrationSerializer
    

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        #Extract user information from the validated data
        email = serializer.validated_data.get('email')
        name = serializer.validated_data.get('name')
        print(name)
        print(email)
        from faker import Faker
        fake = Faker()
        username = fake.user_name()
        print(username)
        #Check if a user with the given email already exists,if not create one
        google_user, created = GoogleUser.objects.get_or_create(
            email=email,
            defaults={
                'name': name,
                'username':username
                
            }
        )

        return Response(GoogleUserRegistrationSerializer(google_user).data, status=status.HTTP_201_CREATED)

class GoogleUserLoginView(generics.GenericAPIView): ##This view handles the GoogleUser Authentication process
    serializer_class = GoogleUserLoginSerializer

    def get_or_create_user_token(user):
        #Handle the token creation logic for Lawyer instances
        if isinstance(user, Lawyer):
            token, created = Token.objects.get_or_create(user=user)
        elif isinstance(user, GoogleUser):

            token, created = Token.objects.get_or_create(user=user)
        else:
            token, created = None, False

        return token, created
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        #Extract user information from the validated data
        email = serializer.validated_data.get('email')
        username = serializer.validated_data.get('name')


        #Check if a user with the given email already exists
        google_user = GoogleUser.objects.get(email=email, name=username)
        google_user_id = google_user.id

        
        

        return Response({'token': google_user_id}, status=status.HTTP_200_OK)

class ReviewCreateView(generics.GenericAPIView): ## This view handles the Review crea
    serializer_class = ReviewSerializer3
    permission_classes = [IsVerifiedUser]

    def post(self, request, *args, **kwargs):
        #Extract data from the request
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            #Get user_id from the 'X-User-ID' header and 'LawyerID' header
            user_id = request.headers.get('X-User-ID', None)
            lawyer_id = request.headers.get('LawyerID', None)


            #Check if user_id is provided
            if not user_id:
                return Response("User ID not provided in the header", status=status.HTTP_400_BAD_REQUEST)

            try:
                #Retrieve the user instance based on the user ID
                user = GoogleUser.objects.get(id=user_id)

                #Extract data for creating the Review instance
                
                rating = serializer.validated_data.get('rating')
                comment = serializer.validated_data.get('comment')

                #Retrieve the lawyer instance based on the lawyer ID
                lawyer = Lawyer.objects.get(id=lawyer_id)

                #Create the Review instance
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

class LawyerReviewsView2(generics.ListAPIView): ##This view provides the reviews list for each lawyer page
    serializer_class = ReviewSerializer

    def get_queryset(self):
        #Retrieve lawyer_id
        lawyer_id = self.kwargs['lawyer_id']
        #Retrieve every Review instance containing that lawyer_id
        queryset = Review.objects.filter(lawyerr_id=lawyer_id).select_related('userr')
        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

class DeleteLawyerView(generics.GenericAPIView): ##handles the admin access to deleting Lawyer instances
    permission_classes = [permissions.IsAdminUser]  #Ensure the authenticated user is an admin

    def delete(self, request, lawyer_id):
        try:
            #Retrieve lawyer instance
            lawyer = Lawyer.objects.get(id=lawyer_id)
        except Lawyer.DoesNotExist:
            return Response({'error': 'Lawyer not found'}, status=status.HTTP_404_NOT_FOUND)
        #Delete Lawyer instance
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

class CalenderUserView(generics.UpdateAPIView): ##This view is obsolete now
    queryset = Calender.objects.all()
    serializer_class = CalenderSerializer2
    permission_classes = [IsVerifiedUser]

    def update(self, request, *args, **kwargs):
        # Assuming 'google_user', 'law', 'time', and 'date_created' are present in the request data
        google_user_id = request.data.get('google_user', None)
        lawyer_id = request.data.get('law', None)
        time = request.data.get('time', None)
        date_created = request.data.get('date_created', None)
        emptw = request.data.get('empty_waiting', None)
        occin = request.data.get('occupied_inavailable', None)
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
        instance.empty_waiting = emptw
        instance.occupied_inavailable = occin
        instance.google_user = serializer.validated_data['google_user']
        instance.save()

        return Response(serializer.data)

class CalenderLawyerView(generics.UpdateAPIView): ##This view is obsolete now
    queryset = Calender.objects.all()
    serializer_class = CalenderSerializer3
    permission_classes = [permissions.IsAuthenticated]

    def update(self, request, *args, **kwargs):
        # Assuming 'google_user', 'law', 'time', and 'date_created' are present in the request data
        google_user_idd = request.data.get('google_user', None)
        lawyer_id = request.data.get('law', None)
        time = request.data.get('time', None)
        date_created = request.data.get('date_created', None)
        emptw = request.data.get('empty_waiting', None)
        occin = request.data.get('occupied_inavailable', None)
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
        instance.occupied_inavailable = occin
        instance.empty_waiting = emptw
        
        
        instance.save()

        return Response(serializer.data)
    
class LawyerLogoutView(APIView):  ##This view handles the Lawyer Logout process
    #Verify if it Lawyer is authenticated
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        #Delete the user's token to perform a logout
        request.auth.delete()

        #You can perform any additional cleanup or logout logic here

        return Response({'detail': 'Successfully logged out'}, status=status.HTTP_200_OK)

class LawyerRequestCalenderView(generics.ListAPIView): ##This view is obsolete now
    serializer_class = CalenderSerializer2
    authentication_classes = [TokenAuthentication]  # Add Token Authentication
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        # Get the authenticated lawyer from the request
        lawyer = self.request.user

        # Filter instances based on the authenticated lawyer and conditions
        queryset = Calender.objects.filter(
            law=lawyer.id,
            empty_waiting=False,
            occupied_inavailable=False
        )
        return queryset
    
class AppFormView(generics.CreateAPIView): ##This view handles the creation of a new Appointment request from the GoogleUser to the Lawyer
    #Verify if GoogleUser is authenticated
    serializer_class = AppSerializer
    permission_classes = [IsVerifiedUser]

    def create(self, request, *args, **kwargs):
        #Retrieve the Appointment data
        google_user_idd = request.data.get('google_user', None)
        lawyer_id = request.data.get('law', None)
        time = request.data.get('time', None)
        date_created = request.data.get('date_created', None)

        #Create the Appointment instance
        
        instance = Appointment.objects.create(
                google_user_id=google_user_idd,
                law_id=lawyer_id,
                time=time,
                date_created=date_created,
                sent=False,
                accepted=False
            )

        

        

        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class LawyerAppsAPIView(generics.ListAPIView): ##This view is responsible for listing the Appointment requests that a Lawyer instance receives
    serializer_class = AppSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [TokenAuthentication]


    def get_queryset(self):
        #Get the lawyer_id from the URL parameters
        lawyer_id = self.kwargs['lawyer_id']
        
        #Filter appointments based on the provided lawyer_id
        queryset = Appointment.objects.filter(law=lawyer_id, sent=False)

        #Include the google_user name in each instance
        queryset = queryset.select_related('google_user')

        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        
        
        serializer = self.get_serializer(queryset, many=True)

        #Extract google_user.name and include it in the response
        data = []
        for item in serializer.data:
            google_user = item.get('google_user', None)

            if isinstance(google_user, dict):
                google_user_name = google_user.get('name')
            elif isinstance(google_user, int):
                try:
                    google_user_instance = GoogleUser.objects.get(pk=google_user)
                    google_user_name = google_user_instance.name
                except GoogleUser.DoesNotExist:
                    google_user_name = None
            else:
                google_user_name = None

            item['google_user_name'] = google_user_name
            data.append(item)

        return Response(data)

class AppAcceptView(generics.UpdateAPIView): ##This view handles a Lawyer accepting an Appointment request
    queryset = Appointment.objects.all()
    serializer_class = AppSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def update(self, request, *args, **kwargs):
        google_user_id = request.data.get('google_user', None)
        lawyer_id = request.data.get('law', None)
        time = request.data.get('time', None)
        date_created = request.data.get('date_created', None)
        #Additional validation or checks based on your requirements
        print(request.data)
        print(google_user_id)
        print(lawyer_id)
        print(time)
        print(date_created)
        #Extract the instance based on google_user, law, time, and date_created
        try:
            instance = Appointment.objects.get(
                google_user_id=google_user_id,
                law_id=lawyer_id,
                time=time,
                date_created=date_created
            )
        except Appointment.DoesNotExist:
            return Response({'detail': 'App not found'}, status=status.HTTP_404_NOT_FOUND)
        
        #Update the fields
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        instance.accepted = True
        instance.sent = True
        instance.google_user = serializer.validated_data['google_user']
        instance.save()

        notification = Notification.objects.create(
            userr=instance.google_user,
            date_created=instance.date_created,
            time=instance.time,
            text='Your appointment has been accepted!'
        )

        response_data = {
            'message': 'Appointment accepted successfully!',
            'data': serializer.data
        }

        return Response(response_data, status=status.HTTP_200_OK)

class AppRefuseView(generics.UpdateAPIView): ##This view handles a Lawyer refusing an Appointment request
    queryset = Appointment.objects.all()
    serializer_class = AppSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def update(self, request, *args, **kwargs):
        google_user_id = request.data.get('google_user', None)
        lawyer_id = request.data.get('law', None)
        time = request.data.get('time', None)
        date_created = request.data.get('date_created', None)
        #Additional validation or checks based on your requirements
        print(request.data)
        #Extract the instance based on google_user, law, time, and date_created
        try:
            instance = Appointment.objects.get(
                google_user_id=google_user_id,
                law_id=lawyer_id,
                time=time,
                date_created=date_created
            )
        except Appointment.DoesNotExist:
            return Response({'detail': 'App not found'}, status=status.HTTP_404_NOT_FOUND)
        
        #Update the fields
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        instance.accepted = False
        instance.sent = True
        instance.google_user = serializer.validated_data['google_user']
        instance.save()

        notification = Notification.objects.create(
            userr=instance.google_user,
            date_created=instance.date_created,
            time=instance.time,
            text='Your appointment has been refused!'
        )

        response_data = {
            'message': 'Appointment refused unfortunately!',
            'data': serializer.data
        }

        return Response(response_data, status=status.HTTP_200_OK)



class NotifView2(generics.ListAPIView): ##this view lists every Notification instance relater to the authenticated GoogleUser
    serializer_class = NoitfSerializer
    permission_classes = [IsVerifiedUser]

    def get_queryset(self):
        print("test")
        # Get the lawyer_id from the URL parameters
        user_idd = self.kwargs['user_id']
        
        # Filter reviews based on the provided lawyer_id
        queryset = Notification.objects.filter(userr=user_idd)

        return queryset