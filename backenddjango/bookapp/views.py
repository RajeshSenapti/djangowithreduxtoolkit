from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from bookapp.models import Books,Users
from bookapp.serializers import BookSerializer,UserSerializer

# Create your views here.

@csrf_exempt
def bookApi(request,id=0):
    if request.method == 'GET':
        books = Books.objects.all()
        book_serializer = BookSerializer(books,many=True)
        return JsonResponse(book_serializer.data,safe=False)
    elif request.method == 'POST':
        book_data =JSONParser().parse(request)
        book_serializer = BookSerializer(data=book_data)
        if book_serializer.is_valid():
            book_serializer.save()
            return JsonResponse("Added Sucessfully",safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method =='PUT':
        book_data = JSONParser().parse(request)
        book = Books.objects.get(BookId=book_data['BookId'])
        book_serializer =BookSerializer(book,data=book_data)
        if book_serializer.is_valid():
            book_serializer.save()
            return JsonResponse('Updated Sucessfully', safe=False)
        return JsonResponse('Update Failed',safe=False)
    elif request.method == 'DELETE':
        book = Books.objects.get(BookId=id)
        book.delete()
        return JsonResponse('Delete Sucessfully',safe=False)


@csrf_exempt
def userApi(request,id=0):
    if request.method == 'GET':
        users = Users.objects.all()
        user_serializer = UserSerializer(users,many=True)
        return JsonResponse(user_serializer.data,safe=False)
    elif request.method == 'POST':
        user_data =JSONParser().parse(request)
        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Added Sucessfully",safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method =='PUT':
        user_data = JSONParser().parse(request)
        user = Users.objects.get(UserId=user_data['BookId'])
        user_serializer =UserSerializer(user,data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse('Updated Sucessfully', safe=False)
        return JsonResponse('Update Failed',safe=False)
    elif request.method == 'DELETE':
        user = Users.objects.get(UserId=id)
        user.delete()
        return JsonResponse('Delete Sucessfully',safe=False)
