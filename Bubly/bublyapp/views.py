from django.shortcuts import render , HttpResponse

def cake(request):
    return render(request,'cake.html')

def diary(request):
    return render(request,'diary.html')

def index(request):
    return render(request,'index.html')

def landing(request):
    return render(request,'landing.html')

def login(request):
    if request.method == 'POST':
        username = request.POST.get('unm')
        password = request.POST.get('pwd')
        if username == "Asifa" and password == "143":
            return render(request,'diary.html')  
    
    return render(request,'login.html')