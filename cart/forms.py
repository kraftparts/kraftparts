from django import forms








#PRODUCT_QANTITY_CHOICES = [(i, str(i)) for i in range(1, 21)]



class CartAddProductForm(forms.Form):
    quantity = forms.IntegerField(initial=1, min_value=0, label='Ilość', widget=forms.TextInput(attrs={'size': '6'}))
    update = forms.BooleanField(required=False, initial=False, widget=forms.HiddenInput)