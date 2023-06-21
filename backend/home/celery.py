from __future__ import absolute_import

import os

from celery import Celery
from home.settings import base

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "home.settings.development")

app = Celery("home")

app.config_from_object("home.settings.development", namespace="CELERY"),

app.autodiscover_tasks(lambda: base.INSTALLED_APPS)