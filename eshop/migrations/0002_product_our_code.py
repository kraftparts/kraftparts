# Generated by Django 4.0.9 on 2023-06-16 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eshop', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='our_code',
            field=models.CharField(blank=True, max_length=40),
        ),
    ]