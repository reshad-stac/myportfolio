from django.db import models

class Banner(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200)
    background_image = models.URLField()

class Skill(models.Model):
    name = models.CharField(max_length=100)
    level = models.IntegerField()

class About(models.Model):
    content = models.TextField()
    image = models.URLField()

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.URLField()
    github_link = models.URLField()
    live_link = models.URLField()