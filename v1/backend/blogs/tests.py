from django.test import TestCase
from .models import *
from rest_framework.test import APIClient
from rest_framework import status 
from django.urls import reverse

OUT_OF_BOUND_ID = 10

class BlogViewTestCase(TestCase):
    def setUp(self): 
        self.client = APIClient()
        self.blog = {}
        
    def test_api_blog(self):
        self.response = self.client.post(
            reverse('blog'), 
            self.blog, 
            format="json"
            )
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)
        
        blog = Blog.objects.get() 
        response = self.client.get(
            reverse('blog_details',
            kwargs={'pk': blog.id}), format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        blog = Blog.objects.get() 
        response = self.client.get(
            reverse('blog_details',
            kwargs={'pk': OUT_OF_BOUND_ID}), format="json")
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

        blog = Blog.objects.get() 
        change_blog = {'title': 'Another Title'}
        res = self.client.put(
            reverse('blog_details', kwargs={'pk': blog.id}),
            change_blog, format='json'
        )
        self.assertEqual(res.status_code, status.HTTP_200_OK)

        blog = Blog.objects.get() 
        response = self.client.delete(
            reverse('blog_details', kwargs={'pk': blog.id}),
            format='json', follow=True
        )
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)    
