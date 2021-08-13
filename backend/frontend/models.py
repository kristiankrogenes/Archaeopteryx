from django.db import models
from datetime import datetime


class User(models.Model):
    id = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    homecourse = models.CharField(max_length=30)
    hcp = models.DecimalField(max_digits=3, decimal_places=1)
    calculated_hcp = models.BooleanField(blank=True,null=True)

    def __str__(self):
        return self.firstname + " " + self.surname
    
    def save(self,*args,**kwargs):
        super(User,self).save(*args,**kwargs)
        round_query = Round.objects.filter(player__pk=self.id)
        if len(round_query) >= 20 and not self.calculated_hcp:
            hcp_score_list = []
            for round in round_query:
                hcp_score_list.append(round.score_hcp)
            hcp_score_list = hcp_score_list[len(hcp_score_list)-20:]
            # hcp_score_sum = sum(hcp_score_list)
            # sorted_scores = sorted(hcp_score_list)
            best_scores_hcp = sorted(hcp_score_list)[:8]
            self.hcp = sum(best_scores_hcp)/8
            self.calculated_hcp = True
            self.save()
            


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
    score_hcp = models.DecimalField(max_digits=3, decimal_places=1,blank=True,null=True)

    def save(self, *args, **kwargs):
        super(Round,self).save(*args,**kwargs)
        if not self.score_hcp:
            round = Round.objects.get(id=self.id)
            self.score_hcp = (113/float(round.course.slopevalue))*(float(round.score)-float(round.course.coursevalue))
            round.score_hcp = self.score_hcp
            round.save()
            player = User.objects.get(id=self.player.id)
            player.calculated_hcp=False
            player.save()
