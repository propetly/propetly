from django.db import models

from apps.agencies.models import Agency


class Employee(models.Model):
    login = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255)
    full_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    agency = models.ForeignKey(
        Agency, on_delete=models.CASCADE, related_name="employees"
    )

    def __str__(self):
        return self.full_name

    class Meta:
        db_table = "employees"
