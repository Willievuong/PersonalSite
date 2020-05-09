from django.db import models

# Create your models here.
class Difficulty(models.Model):
    difficulty_id = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=200)

class Blog(models.Model):

    id = models.AutoField(primary_key=True, unique=True)
    title = models.TextField(verbose_name = 'Blog Title')
    published = models.BooleanField(default=False)
    publish_date = models.DateField(auto_now=True)
    difficulty = models.ForeignKey(Difficulty, on_delete=models.CASCADE)
    # thumbnail = models.ImageField(upload_to='images/thumbnails')
    medium_url = models.URLField()
  
