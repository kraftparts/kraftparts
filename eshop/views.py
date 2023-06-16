from django.shortcuts import render, get_object_or_404
from .models import Category, Product, Firma, Technikalia
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from cart.forms import CartAddProductForm




def eshop_start(request, category_slug=None):
	category = None
	categories = Category.objects.all()
	products = Product.objects.filter(available=True)
	if category_slug:
		category = get_object_or_404(Category, slug=category_slug)
		products = products.filter(category=category)

		
	return render(request, 'eshop/subsite/eshop_start.html', {'category': category, 'categories': categories, 'products': products})
	
	
	
def product(request, id, slug):
	product = get_object_or_404(Product, id=id, slug=slug, available=True)
	tech = get_object_or_404(Technikalia, produkt=product)
	cart_product_form = CartAddProductForm()
	
	
		
	return render(request, 'eshop/subsite/detail.html', {'product': product, 'cart_product_form': cart_product_form, 'tech': tech})
    
    
    
    
def eshop_maszyny(request, category_slug=None):
	category = None
	categories = Category.objects.all()
	products = Product.objects.filter(available=True)
	if category_slug:
		category = get_object_or_404(Category, slug=category_slug)
		products = products.filter(category=category)

		
	return render(request, 'eshop/subsite/eshop_maszyny.html', {'category': category, 'categories': categories, 'products': products})
	
	
	
	
#def product_detail(request, id, slug):
	#product = get_object_or_404(Product, id, slug=slug, available=True)
	#cart_product_form = CartAddProductForm()
	#return render(request, 'eshop/subsite/detail.html', {'product': product, 'cart_product_form': cart_product_form})
	
	