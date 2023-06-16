from django.contrib import admin
from .models import Miejscowosc, Wojewodztwo, Persona, Category, Product, Powiat, Gmina, Kategoria, Image, Technikalia, Firma



	
	

class MiejscowoscAdmin(admin.ModelAdmin):
	list_display = ['nazwa', 'slug']
	prepopulated_fields = {'slug': ('nazwa',)}
	
admin.site.register(Miejscowosc, MiejscowoscAdmin)





class PowiatAdmin(admin.ModelAdmin):
	list_display = ['nazwa', 'slug', 'wojewodztwo']
	prepopulated_fields = {'slug': ('nazwa',)}
	
admin.site.register(Powiat, PowiatAdmin)




class GminaAdmin(admin.ModelAdmin):
	list_display = ['nazwa', 'slug']
	prepopulated_fields = {'slug': ('nazwa',)}
	
admin.site.register(Gmina, GminaAdmin)




class WojewodztwoAdmin(admin.ModelAdmin):
	list_display = ['nazwa', 'slug']
	prepopulated_fields = {'slug': ('nazwa',)}
	
admin.site.register(Wojewodztwo, WojewodztwoAdmin)
	
	



class PersonaAdmin(admin.ModelAdmin):
	list_display = ['id', 'imie', 'nazwisko', 'stanowisko', 'kom', 'email']
		
admin.site.register(Persona, PersonaAdmin)




class KategoriaAdmin(admin.ModelAdmin):
	list_display = ['id', 'kategoria', 'slug', 'created']
	prepopulated_fields = {'slug': ('kategoria',)}
	
	
admin.site.register(Kategoria, KategoriaAdmin)




class FirmaAdmin(admin.ModelAdmin):
	list_display = ['id', 'nazwa', 'slug', 'firma', 'miejscowosc']
	list_filter = ['miejscowosc']
	prepopulated_fields = {'slug': ('nazwa',)}
	
	
admin.site.register(Firma, FirmaAdmin)





class ImageAdmin(admin.ModelAdmin):
	list_display = ['product', 'title', 'slug', 'image', 'opis', 'kategoria', 'created', 'updated']
	list_filter = ['created']
	prepopulated_fields = {'slug': ('title',)}
	
	
admin.site.register(Image, ImageAdmin)




class CategoryAdmin(admin.ModelAdmin):
	list_display = ['id', 'nazwa', 'slug', 'created', 'updated']
	list_filter = ['created']
	prepopulated_fields = {'slug': ('nazwa',)}
	#inlines = [ImageInline]
	
	
admin.site.register(Category, CategoryAdmin)




class ProductAdmin(admin.ModelAdmin):
	list_display = ['id', 'nazwa', 'slug', 'nazwa_prod', 'category', 'nazwa_english', 'cena', 'vendor_code', 'created', 'updated']
	list_filter = ['created']
	prepopulated_fields = {'slug': ('nazwa',)}
	
	
admin.site.register(Product, ProductAdmin)





class TechnikaliaAdmin(admin.ModelAdmin):
	list_display = ['id', 'produkt', 'zamiennik', 'zastosowanie']
	list_filter = ['produkt']
		
	
admin.site.register(Technikalia, TechnikaliaAdmin)