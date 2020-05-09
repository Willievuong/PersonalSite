from rest_framework import serializers 
import json 
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog 
        fields = ('id', 'title', 'published', 'published_date', 'difficulty', 'thumbnail', 'medium_url')
        read_only_fields = ['id']