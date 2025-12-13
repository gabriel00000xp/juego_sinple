from django.contrib import admin
from game.models import Player


class PlayerAdmin(admin.ModelAdmin):
    list_display = ('name', 'score')
    search_fields = ('name',)

admin.site.register(Player, PlayerAdmin)