from django.contrib import admin

from .models import Categories, Feedback, Products, Settings, Users


@admin.register(Categories)
class CategoriesAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "tag")
    search_fields = ("name", "tag")
    list_filter = ("tag",)


@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "category", "price_npr", "availability")
    search_fields = ("name", "note", "note_ne")
    list_filter = ("category", "availability")
    ordering = ("category", "name")


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "email", "rating", "status", "created_at")
    search_fields = ("name", "email", "message")
    list_filter = ("status", "rating")
    readonly_fields = ("created_at",)


@admin.register(Users)
class UsersAdmin(admin.ModelAdmin):
    list_display = ("email", "name", "role", "whatsapp", "created_at")
    search_fields = ("email", "name", "phone", "whatsapp")
    list_filter = ("role",)
    readonly_fields = ("created_at", "updated_at")


@admin.register(Settings)
class SettingsAdmin(admin.ModelAdmin):
    list_display = ("key", "value")
    search_fields = ("key",)
