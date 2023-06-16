from django.urls import path, re_path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    
       
	path('register/', views.register, name='register'),
	path('edit/', views.edit, name='edit'),
	
	path('dashboard/', views.dashboard, name='dashboard'),
	
]
	
	
