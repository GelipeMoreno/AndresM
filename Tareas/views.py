from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return HttpResponse(render (request=request, template_name='to-do.html', context={}))
