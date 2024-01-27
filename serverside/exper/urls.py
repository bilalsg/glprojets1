"""exper URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from tester import views
from rest_framework import routers

router = routers.DefaultRouter()

router.register(r'Lawyer', views.LawyerViewSet)
# router.register(r'Review', views.ReviewViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('tester.urls')),
 path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('register/', views.LawyerRegistrationView.as_view(), name='lawyer-registration'),
    path('login/', views.LawyerAuthenticationView.as_view(), name='lawyer-login'),
     path('register/google/', views.GoogleUserRegistrationView.as_view(), name='google_user_register'),
    path('login/google/', views.GoogleUserLoginView.as_view(), name='google_user_login'),
    path('usereview', views.ReviewCreateView.as_view(), name='usereview'),
    path('<int:lawyer_id>/reviews/', views.LawyerReviewsView2.as_view(), name='reviewr'),
    path('delete/<int:lawyer_id>/', views.DeleteLawyerView.as_view(), name='delete_lawyer'),
    path('cal/<int:lawyer_id>/', views.LawyerAppointmentsAPIView.as_view(), name='lawyer-appointments-api'),
    path('calender/update', views.CalenderUserView.as_view(), name='calender-update'),
    path('calender/update2', views.CalenderLawyerView.as_view(), name='calender-update2'),
    path('logout/', views.LawyerLogoutView.as_view(), name='lawyer-logout'),

]

urlpatterns += router.urls