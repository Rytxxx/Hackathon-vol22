from django.contrib import admin
from . import models
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext as _

class ProfileInline(admin.StackedInline):
    model = models.Profile
    can_delete = False
    verbose_name_plural = 'Profile'
    fieldsets = (
        (None, {
            'fields': ('nickName',)
        }),
        (None, {
            'fields': ('preference',),
        })
    )
    readonly_fields = ('nickName', 'preference')

class UserAdmin(BaseUserAdmin):
    ordering = ['id']
    list_display = ['email']
    fieldsets = (
        (None, {'fields': ('email',)}),
        (_('Personal info'), {'fields': ()}),
        (
            _('Permissions'),
            {
                'fields': ('is_active',
                           'is_staff',
                           'is_superuser'
                ),
            }
        ),
        (_('Important dates'), {'fields': ('last_login',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email','password1','password2'),
        })
    )
    inlines = (ProfileInline, )



admin.site.register(models.User, UserAdmin)
admin.site.register(models.Profile)
admin.site.register(models.Trip)
admin.site.register(models.ShareTrip)
