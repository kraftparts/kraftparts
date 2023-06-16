from django.db import models
from django.utils import timezone
from django.conf import settings
from django.utils.text import slugify
from django.urls import reverse
from django.contrib.auth.models import User
from eshop.models import Product



class Order(models.Model):
	first_name = models.CharField(max_length=80)
	last_name = models.CharField(max_length=80)
	email = models.EmailField()
	adres = models.CharField(max_length=150)
	kod_pocztowy = models.CharField(max_length=20)
	miasto = models.CharField(max_length=100)
	telefon = models.CharField(max_length=20, blank=True)
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
	paid = models.BooleanField(default=False)
	
		
		
	class Meta:
		ordering = ('-created',)
		
		
	def __str__(self):
			return 'Order {}'.format(self.id)
			
	
	def get_total_cost(self):
		return sum(item.get_cost() for item in self.items.all())





class OrderItem(models.Model):
	order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
	product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='order_items')
	cena = models.DecimalField(max_digits=12, decimal_places=2)
	quantity = models.PositiveIntegerField(default=1)
	
	
	def __str__(self):
			return '{}'.format(self.id)
			
	def get_cost(self):
		return self.cena * self.quantity