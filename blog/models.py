# -*- coding: utf-8 -*-
from django.db import models
from datetime import datetime, timedelta
from django.contrib.auth.models import User
from tagging.fields import TagField
from markdown import markdown
from django.db.models import permalink
from django.conf import settings
from django.db.models import permalink
from django.conf import settings


# Create your models here.

class Category(models.Model):
	title = models.CharField(max_length=100,  unique=False)
	slug = models.SlugField(max_length=100, unique=True)
	description = models.CharField(max_length=100)
	class Meta:
		ordering = ['title']
		verbose_name_plural = "Categories"

	def __unicode__(self):
		return "/cats/%s/" % self.title

	def get_absolute_url(self):
		return self.slug

