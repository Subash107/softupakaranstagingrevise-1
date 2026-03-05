from django.db import models


class Categories(models.Model):
    id = models.TextField(primary_key=True)
    name = models.TextField()
    tag = models.TextField(blank=True, null=True)
    icon = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'categories'


class Products(models.Model):
    id = models.TextField(primary_key=True)
    name = models.TextField()
    category = models.ForeignKey(Categories, models.DO_NOTHING)
    price_npr = models.IntegerField()
    image = models.TextField(blank=True, null=True)
    note = models.TextField(blank=True, null=True)
    note_ne = models.TextField(blank=True, null=True)
    price_usd = models.IntegerField(blank=True, null=True)
    tier = models.TextField(blank=True, null=True)
    availability = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'products'


class Feedback(models.Model):
    id = models.IntegerField(primary_key=True)
    created_at = models.TextField(blank=True, null=True)
    user = models.ForeignKey('Users', models.DO_NOTHING, blank=True, null=True)
    name = models.TextField(blank=True, null=True)
    email = models.TextField(blank=True, null=True)
    rating = models.IntegerField(blank=True, null=True)
    message = models.TextField()
    status = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'feedback'


class Users(models.Model):
    id = models.IntegerField(primary_key=True)
    created_at = models.TextField(blank=True, null=True)
    updated_at = models.TextField(blank=True, null=True)
    name = models.TextField(blank=True, null=True)
    email = models.TextField(unique=True)
    password_hash = models.TextField()
    phone = models.TextField(blank=True, null=True)
    whatsapp = models.TextField(blank=True, null=True)
    role = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'users'


class Settings(models.Model):
    key = models.TextField(primary_key=True)
    value = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'settings'
