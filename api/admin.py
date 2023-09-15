from django.contrib import admin
from .models import FileTestModel, ResultsModel
# Register your models here.

admin.site.register(FileTestModel)
admin.site.register(ResultsModel)
