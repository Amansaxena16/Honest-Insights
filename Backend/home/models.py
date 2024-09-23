from django.db import models

class SpaceData(models.Model):
    name = models.CharField(max_length=30)
    logo = models.ImageField(upload_to="static/image/")
    title = models.CharField(max_length=50)
    message = models.TextField(max_length=200)
    quest1 = models.CharField(max_length=80)
    quest2 = models.CharField(max_length=80)
    quest3 = models.CharField(max_length=80)
    starRating = models.BooleanField(default=True)
    
    def __str__(self):
        return self.name