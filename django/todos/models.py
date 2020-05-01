from django.db import models


class Todo(models.Model):
    """ Todo Model definition """

    title = models.CharField(max_length=250)
    body = models.TextField()

    def __str__(self):
        return self.title
