from django.db import models


# Skills Model
class Skills(models.Model):

    name = models.CharField(max_length=100)
    percentage = models.IntegerField()
    # icon = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name



# Project Model
class Project(models.Model):

    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    github_link = models.URLField()
    # live_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title



# Contact Model
class Contact(models.Model):

    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
# about stat
class AutoStat(models.Model):
    number=models.CharField(max_length=100)
    label=models.TextField(default="")

    def __str__(self):
        return self.number
    