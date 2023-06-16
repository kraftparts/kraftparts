from django.shortcuts import render, redirect, get_object_or_404
from .models import OrderItem
from cart.cart import Cart
from .forms import OrderCreateForm









def order_create(request):
	cart = Cart(request)
	if request.method == 'POST':
		form = OrderCreateForm(request.POST)
		if form.is_valid():
			order = form.save()
			for item in cart:
				OrderItem.objects.create(order=order, product=item['product'], cena=item['cena'], quantity=item['quantity'])
			cart.clear()
			return render(request, 'orders/order/created.html', {'order': order})
	else:
		form = OrderCreateForm()
	return render(request, 'orders/order/create.html', {'cart': cart, 'form': form})
	
	
 
	
	
 
  