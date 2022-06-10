from django.urls import path
from bookapp import views



urlpatterns =[
    path('book/',views.bookApi),
    path('book/<int:id>/', views.bookApi),

     path('user/',views.userApi),
    path('user/<int:id>/', views.userApi)
]