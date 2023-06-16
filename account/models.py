from django.db import models
from django.utils import timezone
from django.conf import settings
from django.utils.text import slugify

class Profile(models.Model):
	STATUS_CHOICES = (('nieaktywny', 'nieaktywny'), ('aktywny', 'aktywny'))
	user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
	status = models.CharField(max_length=30, choices=STATUS_CHOICES, default='aktywny')
	photo = models.ImageField('Fotografia', upload_to='users/%Y/%m/%d', blank=True)
	date_of_birth = models.DateField('Data urodzenia', blank=True, null=True)