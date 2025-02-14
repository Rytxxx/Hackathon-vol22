from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.conf import settings

class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

# UserをEmailで識別できるようにカスタム
class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=50, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()
    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email

class Profile(models.Model):
    nickName = models.CharField(max_length=20)
    preference = models.JSONField(default=dict)
    userProfile = models.OneToOneField(settings.AUTH_USER_MODEL, related_name='profile', on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)

# 旅行の概要
class Trip(models.Model):
    title = models.CharField(max_length=100)
    userTrip = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='trips', on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField()
    destination = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.title}:{self.userTrip.email}'

# 旅行の共同編集
class ShareTrip(models.Model):
    shareTrip = models.ForeignKey(Trip, on_delete=models.CASCADE, related_name='shareTrip',)
    shareUser = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='shareTrip',)
    permissionUser = models.CharField(
        max_length=10,
        choices=[('view','View'),('edit','Edit')],
        default='edit'
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.shareTrip.title}:{self.shareUser.email} + {self.permissionUser}'
