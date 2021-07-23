from django.db import models
from datetime import datetime

class User(models.Model):
    id = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    homecourse = models.CharField(max_length=30)
    hcp = models.DecimalField(max_digits=3, decimal_places=1)

    def __str__(self):
        return self.firstname + " " + self.surname

class Course(models.Model):
    id = models.AutoField(primary_key=True)
    course_name = models.CharField(max_length=30)
    par = models.IntegerField()
    slopevalue = models.IntegerField()
    coursevalue = models.DecimalField(max_digits=3, decimal_places=1)
    
    def __str__(self):
        return self.course_name

class Round(models.Model):
    id = models.AutoField(primary_key=True)
    score = models.IntegerField()
    date = models.DateTimeField(default=datetime.now)
    player = models.ForeignKey('User', on_delete=models.CASCADE)
    course = models.ForeignKey('Course', on_delete=models.CASCADE)
