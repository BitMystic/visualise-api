# basic URL Configurations
from django.urls import include, path
from django.conf.urls import url
# import routers
from rest_framework import routers

# import everything from views
from .views import FileTestList, GetFileTestList, GetFileTest, GetResults


# define the router
router = routers.DefaultRouter()

# specify URL Path for rest_framework
urlpatterns = [
	path('', include(router.urls)),
	path('api-auth/', include('rest_framework.urls')),
    path("files/", FileTestList),
    path("files/all/", GetFileTestList),
    path("files/<str:pk>/", GetFileTest),
    path("results/<str:pk>/", GetResults),
]
