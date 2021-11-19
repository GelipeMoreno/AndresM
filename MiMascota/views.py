from django.http import HttpResponse
from django.shortcuts import render

def index(request):
        return HttpResponse(render(request = request,template_name='Index.html',context={}))

def index2(request, query):
        return HttpResponse(render(request = request,template_name='Index.html',context={"query" : query}))


    #return HttpResponse(render(request = requets,template_name='Index.html',context={"query" : query}))