from django import template
from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
# Create your views here.
def index(request):
    return HttpResponse(render(request,'Index.html',{}))

def login(request):
    return HttpResponse("Login")
