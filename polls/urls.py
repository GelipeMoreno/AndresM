from django.urls import path
from django.urls.resolvers import URLPattern
from . import views

urlpatterns = [
    path('', views.index),
    path('', views.index, name='Index'),
    path('login/', views.login, name='Login'),
]

