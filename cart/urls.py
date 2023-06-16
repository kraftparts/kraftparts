from django.urls import path, re_path
from . import views


urlpatterns = [
	path('', views.cart_detail, name='cart_detail'),
    path('add/<product_id>/', views.cart_add, name='cart_add'),
    path('remove/<product_id>', views.cart_remove, name='cart_remove'),
    #path('prod/rak/<category_slug>/', views.eshop_start, name='eshop_start_by_category'),
	#path('worksheet/', views.worksheet, name='worksheet'),
	#path('finansinvest/', views.finansinvest, name='finansinvest'),
	#path('finansobrot/', views.finansobrot, name='finansobrot'),
	#path('finansleasing/', views.finansleasing, name='finansleasing'),
	#path('finansfundusz/', views.finansfundusz, name='finansfundusz'),
	#path('finansdotacje/', views.finansdotacje, name='finansdotacje'),
	#path('restrukturyzacje/', views.restrukturyzacje, name='restrukturyzacje'),
	#path('startupsite/', views.startupsite, name='startupsite'),
	#path('growupsite/', views.growupsite, name='growupsite'),
	#path('hungupsite/', views.hungupsite, name='hungupsite'),
	#path('programy/', views.programy, name='programy'),
	#path('kontakt/', views.kontakt, name='kontakt'),
	#path('about/', views.about, name='about'),
	#path('pksite/', views.pksite, name='pksite'),
	#path('parametry/', views.parametry, name='parametry'),

	#path('persona/', views.persona_list, name='persona_list'),
	
]
