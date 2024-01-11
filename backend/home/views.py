from django.shortcuts import render, HttpResponse

# Create your views here.
def home(request):
    # return HttpResponse("this is sample")
   return render(request, 'home.html')

def contact(request):
    return HttpResponse("this is contact")

def about(request):
    return HttpResponse("this is about")



