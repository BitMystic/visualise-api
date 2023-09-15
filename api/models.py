from django.db import models

class FileTestModel(models.Model):
    id_req = models.CharField(max_length=200)
    sampleData = models.BooleanField()
    randomData = models.BooleanField()
    file = models.FileField(upload_to="uploads/", blank=True)
    plotBar = models.BooleanField()
    plotDist = models.BooleanField()
    plotScatter = models.BooleanField()
    plotLine = models.BooleanField()
    xaxis = models.CharField(max_length=200)
    yaxis = models.CharField(max_length=200)

    def __str__(self):
        return (self.id_req)

class ResultsModel(models.Model):
    id_req = models.CharField(max_length=200, unique=True)
    plot = models.CharField(max_length=200)
    xaxis_name = models.CharField(max_length=200)
    yaxis_name = models.CharField(max_length=200)
    data = models.JSONField()

    def __str__(self):
        return (self.id_req)
