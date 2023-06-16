from django.db import models
from django.utils import timezone
from django.conf import settings
from django.utils.text import slugify
from django.urls import reverse
from django.contrib.auth.models import User



class Wojewodztwo(models.Model):					
	nazwa = models.CharField(max_length=150)
	slug = models.SlugField(max_length=150, blank=True)
	wojewoda = models.CharField(max_length=50, blank=True)
						
	class Meta:
		ordering = ('nazwa',)
	
	def __str__(self):
			return self.nazwa
			
	def save(self, *args, **kwargs):
		self.slug = ''
		if not self.slug:
			self.slug = slugify(self.nazwa)
			super(Wojewodztwo, self).save(*args, **kwargs)
			
			
class Powiat(models.Model):					
	nazwa = models.CharField(max_length=150)
	slug = models.SlugField(max_length=150, blank=True)
	starosta = models.CharField(max_length=50, blank=True)
	wojewodztwo = models.ForeignKey(Wojewodztwo, on_delete=models.CASCADE, related_name='powiatos')
						
	class Meta:
		ordering = ('nazwa',)
	
	def __str__(self):
			return self.nazwa
			
			
	def save(self, *args, **kwargs):
		self.slug = ''
		if not self.slug:
			self.slug = slugify(self.nazwa)
			super(Powiat, self).save(*args, **kwargs)


class Gmina(models.Model):					
	nazwa = models.CharField(max_length=150)
	slug = models.SlugField(max_length=150, blank=True)
	wojt = models.CharField(max_length=50, blank=True)
	powiat = models.ForeignKey(Powiat, on_delete=models.CASCADE, related_name='gminas')
						
	class Meta:
		ordering = ('nazwa',)
	
	def __str__(self):
			return self.nazwa

	def save(self, *args, **kwargs):
		self.slug = ''
		if not self.slug:
			self.slug = slugify(self.nazwa)
			super(Gmina, self).save(*args, **kwargs)
			
class Miejscowosc(models.Model):
	MIASTO_CHOICES = (('miasto', 'Miasto'), ('wieś', 'Wieś'))
	nazwa = models.CharField(max_length=150)
	slug = models.SlugField(max_length=150, blank=True)
	profil = models.CharField(max_length=30, choices=MIASTO_CHOICES, default='miasto')
	gmina = models.ForeignKey(Gmina, on_delete=models.CASCADE, related_name='miejscowosci')
	
	class Meta:
		ordering = ('nazwa',)
	
	def __str__(self):
			return self.nazwa
			
	def save(self, *args, **kwargs):
		self.slug = ''
		if not self.slug:
			self.slug = slugify(self.nazwa)
			super(Miejscowosc, self).save(*args, **kwargs)
			
			
class Dzielnica(models.Model):
	nazwa = models.CharField(max_length=150)
	miejscowosc = models.ForeignKey(Miejscowosc, on_delete=models.CASCADE, related_name='dzielnicas')
	
	class Meta:
		ordering = ('nazwa',)
	
	def __str__(self):
			return self.nazwa
			
			
			

 


class Category(models.Model):
	nazwa = models.CharField(max_length=250)
	slug = models.SlugField(max_length=250, blank=True)
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
		
	class Meta:
		ordering = ('nazwa',)
		verbose_name = 'Kategoria'
		verbose_name_plural = 'Kategorie'
	def __str__(self):
			return self.nazwa 
			
	def get_absolute_url(self):
		return reverse('eshop_start_by_category',
							args=[self.slug])
			
						
 
			
			
			
class Product(models.Model):
	KATEGORIA_CHOICES = (('traktory', 'traktory'),
						('kombajny', 'kombajny'),
						('siewniki mechaniczne', 'siewniki mechaniczne'),
						('siewniki pneumatyczne', 'siewniki pneumatyczne'),
						('aparat koszący zboże', 'aparat koszący zboże'),
						('aparat koszący kukurydzy', 'aparat koszący kukurydzy'),
						('ładowarki teleskopowe', 'ładowarki teleskopowe'),
						('kombajn do paszy', 'kombajn do paszy'),
						('spryskiwacze', 'spryskiwacze'),
						('prasy', 'prasy'),
						('kultywatory', 'kultywatory'),
						('brony talerzowe', 'brony talerzowe'),
						('pługi', 'pługi'),
						('rolnicze', 'rolnicze'),
						('budowlane', 'budowlane'))
	STATUS_CHOICES = (('aktywny', 'aktywny'), ('ban', 'ban'))
	category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
	nazwa = models.CharField(max_length=250)
	slug = models.SlugField(max_length=250, blank=True)
	nazwa_prod = models.CharField(max_length=250, blank=True)
	nazwa_english = models.CharField(max_length=250, blank=True)
	opis = models.TextField(blank=True)
	cena = models.DecimalField(max_digits=12, decimal_places=2, blank=True)
	cena_brutto = models.DecimalField(max_digits=12, decimal_places=2, blank=True)
	stock = models.PositiveIntegerField(default=0, blank=True)
	image = models.ImageField(upload_to='products/%y/%m/%d', blank=True)
	width = models.PositiveIntegerField(blank=True)
	long = models.PositiveIntegerField(blank=True)
	weight = models.PositiveIntegerField(blank=True)
	vendor_code = models.CharField(max_length=40, blank=True)
	article_at = models.CharField(max_length=40, blank=True)
	kod_cn = models.CharField(max_length=40, blank=True)
	pkwiu = models.CharField(max_length=40, blank=True)
	eps = models.CharField(max_length=240, blank=True)
	cena_prod = models.DecimalField(max_digits=12, decimal_places=2, blank=True)
	cena_our = models.DecimalField(max_digits=12, decimal_places=2, blank=True)
	origin_code = models.CharField(max_length=40, blank=True)
	cecha1 = models.CharField(max_length=40, blank=True)
	cecha2 = models.CharField(max_length=40, blank=True)
	cecha3 = models.CharField(max_length=40, blank=True)
	kategoria = models.CharField(max_length=30, choices=KATEGORIA_CHOICES, default='traktory')
	available = models.BooleanField(default=True)
	status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='aktywny')
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
	
		
		
	class Meta:
		ordering = ('created',)
		index_together = (('id', 'slug'),)
		
	def __str__(self):
			return self.nazwa
			
			
	def get_absolute_url(self):
		return reverse('product',
							args=[self.id, self.slug])
							
							




class Technikalia(models.Model):
	produkt = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='technikalias')
	zamiennik = models.TextField(blank=True)
	zastosowanie = models.TextField(blank=True)
						
							


class Kategoria(models.Model):
	kategoria = models.CharField(max_length=50, blank=True)
	slug = models.SlugField(max_length=55, blank=True)
	created = models.DateTimeField(auto_now_add=True)
	
	
	def __str__(self):
			return self.kategoria
			
	def save(self, *args, **kwargs):
		self.slug = ''
		if not self.slug:
			self.slug = slugify(self.kategoria)
			super(Kategoria, self).save(*args, **kwargs)
							
							
							



class Image(models.Model):
	product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
	title = models.CharField(max_length=200, blank=True)
	slug = models.SlugField(max_length=210, blank=True)
	image = models.ImageField(upload_to='products/%y/%m/%d', blank=True)
	opis = models.TextField(blank=True)
	kategoria = models.ForeignKey(Kategoria, on_delete=models.CASCADE, related_name='imagesy')
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
	
	def __str__(self):
			return self.title
			
	def save(self, *args, **kwargs):
		self.slug = ''
		if not self.slug:
			self.slug = slugify(self.title)
			super(Image, self).save(*args, **kwargs)
	
	
	
			
			
class Persona(models.Model):
	STANOWISKO_CHOICES = (('prezes zarządu', 'prezes zarządu'), 
							('członek zarządu', 'członek zarządu'),
							('prokurent', 'prokurent'),
							('właściciel', 'właściciel'),
							('udziałowiec', 'udziałowiec'),
							('akcjonariusz', 'akcjonariusz'),
							('dyrektor', 'dyrektor'),
							('handlowiec', 'handlowiec'),
							('przedstawiciel handlowy', 'przedstawiciel handlowy'),
							('dyrektor handlowy', 'dyrektor handlowy'),
							('dyrektor finansowy', 'dyrektor finansowy'),
							('dyrektor produkcji', 'dyrektor produkcji'),
							('dyrektor marketingu', 'dyrektor marketingu'),
							('główny księgowy', 'główny księgowy'),
							('pracownik', 'pracownik'),
							('brak', 'brak'))
	imie = models.CharField(max_length=30, blank=True)
	nazwisko = models.CharField(max_length=50, blank=True)
	miejscowosc = models.ForeignKey(Miejscowosc, related_name='personas', on_delete=models.CASCADE, blank=True)
	adres = models.CharField(max_length=60, blank=True)
	kodpocztowy = models.CharField(max_length=6, blank=True)
	stanowisko = models.CharField(max_length=60, choices=STANOWISKO_CHOICES, default='dyrektor')
	kom = models.CharField("telefon komórkowy", max_length=18, blank=True)
	email = models.EmailField("e-mail", blank=True)
	instagram = models.URLField(blank=True)
	shortopis = models.CharField("krótki opis", max_length=200, blank=True)
	opis = models.TextField(blank=True)
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)	
	
	class Meta:
		ordering = ('nazwisko',)
		verbose_name = 'osoba'
		verbose_name_plural = 'osoby'

	def __str__(self):
		return self.nazwisko

	def get_absolute_url(self):
		return reverse('persona_detail', 
						args=[self.id])
						
						
			
			
class Firma(models.Model):
	STATUSPRAWNY_CHOICES = (('działalność', 'Jednoosobowa działalność gospodarcza'), 
							('spółka cywilna', 'Spółka cywilna'),
							('spółka jawna', 'Spółka jawna'),
							('spółka komandytowa', 'Spółka komandytowa'),
							('spółka zoo', 'Spółka z.o.o'),
							('spółka akcyjna', 'Spółka akcyjna'),
							('gmbh', 'GmbH'),
							('ltd', 'Ltd'),
							('inna', 'Inna'),
							('brak', 'Brak'),
							('osoba fizyczna', 'Osoba fizyczna'))
	STATUS_CHOICES = (('aktywny', 'aktywny'), ('ban', 'ban'))
	STAN_CHOICES = (('klient', 'klient'), ('kontakt', 'kontakt'))
	RODZEWID_CHOICES = (('krs', 'KRS'), ('ceidg', 'CEIDG'), ('inne', 'Inne'), ('brak', 'Brak'))
	KATEGORIA_CHOICES = (('produkcja rolna', 'produkcja rolna'),
							('hurtownia części', 'hurtownia części'),
							('sklep części', 'sklep części'),
							('serwis maszyn', 'serwis maszyn'),
							('usługi sprzętowe', 'usługi sprzętowe'),
							('inne', 'inne'))
	nazwa = models.CharField('nazwa unikalna',max_length=40, unique=True, blank=True)
	slug = models.SlugField(max_length=50, blank=True)
	firma = models.CharField('nazwa handlowa', max_length=80, blank=True)
	miejscowosc = models.ForeignKey(Miejscowosc, on_delete=models.CASCADE, related_name='klientoso', blank=True)
	adres = models.CharField(max_length=60, blank=True, null=True)
	kod_pocztowy = models.CharField(max_length=6, blank=True)
	tel = models.CharField(max_length=18, blank=True)
	fax = models.CharField(max_length=18, blank=True)
	email = models.EmailField(blank=True)
	www = models.URLField(blank=True)
	status_prawny = models.CharField(max_length=60, choices=STATUSPRAWNY_CHOICES, default='brak')
	nip = models.CharField(max_length=10, blank=True)
	rodzaj_ewidencji = models.CharField(max_length=20,	choices=RODZEWID_CHOICES, default='brak')
	nr_w_ewidencji = models.CharField(max_length=20, blank=True)
	regon = models.CharField(max_length=9, blank=True)
	kapital = models.DecimalField('kapitał zakładowy', max_digits=12, decimal_places=0, default=5000)
	konto_bankowe = models.CharField(max_length=34, blank=True)
	shortopis = models.CharField("krótki opis", max_length=200, blank=True)
	opis = models.TextField(blank=True)
	kategoria = models.CharField(max_length=20, choices=KATEGORIA_CHOICES, default='inne')
	osoba_kontaktowa = models.ForeignKey(Persona, on_delete=models.CASCADE, related_name='klientos', blank=True)
	status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='aktywny')
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
	stan = models.CharField(max_length=20, choices=STAN_CHOICES, default='klient', help_text="Czy jest klientem lub potencjalnym klientem dla projektu?")
	
	
	

	class Meta:
		ordering = ('nazwa',)
		
	def __str__(self):
		return self.nazwa
		
	'''def save(self, *args, **kwargs):
		if not self.slug:
			self.slug = slugify(self.nazwa)
			super(Firma, self).save(*args, **kwargs)

        def get_absolute_url(self):
		return reverse('klient_list',
							args=[self.slug])		'''
			
			
