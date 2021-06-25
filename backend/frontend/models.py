from django.db import models
from datetime import datetime

class Player(models.Model):
    pid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    hcp = models.DecimalField(max_digits=3, decimal_places=1)

    def __str__(self):
        return self.name

class Course(models.Model):
    cid = models.AutoField(primary_key=True)
    course_name = models.CharField(max_length=30)
    par = models.IntegerField()
    slopevalue = models.IntegerField()
    coursevalue = models.DecimalField(max_digits=3, decimal_places=1)
    
    def __str__(self):
        return self.course_name

class Round(models.Model):
    rid = models.AutoField(primary_key=True)
    score = models.IntegerField()
    date = models.DateTimeField(default=datetime.now)
    player = models.ForeignKey('Player', on_delete=models.CASCADE)
    course = models.ForeignKey('Course', on_delete=models.CASCADE)
