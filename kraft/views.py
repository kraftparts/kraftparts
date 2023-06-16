from django.shortcuts import render, get_object_or_404
#from .forms import FinansowanieFZForm
#from .models import FinansowanieFZ
from django.contrib import messages
from django.contrib.auth.decorators import login_required


def main_start(request):
		
	return render(request, 'mainkraft/subsite/startsite.html')



def about(request):
		
	return render(request, 'mainkraft/subsite/about.html')
    
    
    
def kontakt(request):
		
	return render(request, 'mainkraft/subsite/kontakt.html')
    
    