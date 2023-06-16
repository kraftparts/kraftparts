from django.urls import path, re_path
from . import views


urlpatterns = [
	path('', views.eshop_start, name='eshop_start'),
    path('<category_slug>/', views.eshop_start, name='eshop_start_by_category'),
    path('prod/<int:id>/<slug>/', views.product, name='product'),
    path('maszyny', views.eshop_maszyny, name='eshop_maszyny'),
	
]
