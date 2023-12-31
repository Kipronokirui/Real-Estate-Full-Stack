from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/v1/auth/", include("djoser.urls")),
    path("api/v1/auth/", include("djoser.urls.jwt")),
    path("api/v1/profile/", include("profiles.urls")),
    path("api/v1/properties/", include("properties.urls")),
    path("api/v1/ratings/", include("ratings.urls")),
    path("api/v1/enquiries/", include("enquiries.urls")),
]

admin.site.site_header = "Real Estate Admin"
admin.site.site_title = "Real Estate Admin Portal"
admin.site.index_title = "Welcome to the Real Estate admin"
