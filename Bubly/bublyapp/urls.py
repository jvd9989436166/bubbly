from django.urls import path
from . import views

urlpatterns = [
    path('',views.landing,name='landing'),
    path('index/',views.index,name='index'),
    path('cake/',views.cake,name='cake'),
    path('diary/',views.diary,name='diary'),
    path('login/',views.login,name='login'),
]