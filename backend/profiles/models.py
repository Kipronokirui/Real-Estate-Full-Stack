from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from django_countries.fields import CountryField
from phonenumber_field.modelfields import PhoneNumberField
from common.models import TimeStampedUUIDModel

User = get_user_model()

# Create your models here.
class Gender(models.TextChoices):
    MALE="Male", _("Male")
    FEMALE="Female", _("Female")
    OTHER ="Other", _("Other")
    
class Profile(TimeStampedUUIDModel):
    user = models.OneToOneField(User, related_name="profile", on_delete=models.CASCADE)
    phone_number = PhoneNumberField(verbose_name=_("Phone Number"), max_length=30, default="+254123123123")
    about_me = models.TextField(verbose_name=_("About Me"), default="Say something about yourself")
    licence = models.CharField(verbose_name=_("Real Estate Licence"), max_length=20, blank=True, null=True)
    profile_photo = models.ImageField(verbose_name=_("Profile photo"), default='profile_default.png')
    gender = models.CharField(verbose_name=_("Gender"), choices=Gender.choices, default=Gender.OTHER, max_length=20)
    country = CountryField(verbose_name=_("Country"), default='KE', blank=False, null=False)
    city = models.CharField(verbose_name=_("City"), default="Nairobi", max_length=100, blank=False, null=False)
    is_buyer = models.BooleanField(verbose_name=_("Buyer"), default=False, help_text="Are you looking to buy a home?")
    is_seller = models.BooleanField(verbose_name=_("Seller"), default=False, help_text="Are you looking to sell a home?")
    is_agent = models.BooleanField(verbose_name=_("Agent"), default=False, help_text="Are you an agent?")
    top_agent = models.BooleanField(verbose_name=_("Top Agent"), default=False, help_text="Top agent")
    rating = models.DecimalField(max_digits=4, decimal_places=2, blank=True, null=True)
    num_reviews = models.IntegerField(verbose_name=_("Reviews"), default=0, blank=True, null=True)
    
    def __str__(self):
        return f"{self.user.username}'s profile"

