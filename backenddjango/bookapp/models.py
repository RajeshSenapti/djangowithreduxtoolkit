from django.db import models

# Create your models here.

class Books(models.Model):
    BookId=models.AutoField(primary_key=True)
    BookName = models.CharField(max_length=30)

class Users(models.Model):
    UserId=models.AutoField(primary_key=True)
    Name = models.CharField(max_length=30)
    Email = models.EmailField()
    Password = models.CharField(max_length=30)
    
    