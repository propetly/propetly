from django.contrib import admin
from django.urls import (
    include,
    path,
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/agencies", include("apps.agencies.api.urls")),
    path("api/employees", include("apps.employees.api.v1.urls")),
    path("api/properties", include("apps.properties.api.v1.urls")),
]
