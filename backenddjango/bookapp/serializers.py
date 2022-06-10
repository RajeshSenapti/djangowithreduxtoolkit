from rest_framework import serializers
from bookapp.models import Books,Users

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Books
        fields = '__all__'
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'