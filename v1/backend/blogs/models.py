from django.db import models

# Create your models here.
class Difficulty(models.Model):
    difficulty_id = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=200)

class Blog(models.Model):

    id = models.AutoField(primary_key=True, unique=True)
    title = models.TextField(verbose_name = 'Blog Title', null=True)
    published = models.BooleanField(default=False, null=True)
    publish_date = models.DateField(auto_now=True, null=True)
    difficulty = models.ForeignKey(Difficulty, on_delete=models.CASCADE, null=True)
    medium_url = models.URLField(null=True)
  
