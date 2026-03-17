from django.urls import path
from . import views


urlpatterns = [

    path('', views.home, name='home'),

    path('about/', views.about, name='about'),

    path('Project/', views.project, name='projects'),

    path('Contact/', views.contact, name='contact'),
    path('Skills/', views.skills, name='skills'),

]