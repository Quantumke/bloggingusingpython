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

class Entry(models.Model):
	LIVE_STATUS = 1
	DRAFT_STATUS = 2
	HIDDEN_STATUS = 3
	STATUS_CHOICES = ( (LIVE_STATUS, 'Live'),(DRAFT_STATUS, 'Draft'), (HIDDEN_STATUS, 'Hidden'))
	title = models.CharField(max_length=100 , unique=False)
	excerpt = models.TextField(blank=True)
	body = models.TextField(blank=False)
	pub_date=models.DateField(default=datetime.now, blank=False)
	author = models.ForeignKey(User)
	enable_comments=models.BooleanField(default=True)
	featured= models.BooleanField(default=False)
	slug = models.SlugField(unique_for_date='pub_date',help_text="Suggested value automatically generated ➥from title.Must be unique.")
	status = models.IntegerField(choices = STATUS_CHOICES, default = LIVE_STATUS)
	category= models.ManyToManyField(Category)
	tags = TagField()
	excerpt_html = models.TextField(editable=False, blank=True)
	body_html= models.TextField(editable=False, blank=True)
	#count=models.TextField(max_length=100, default=0)
	image1 = models.ImageField(upload_to='images',
                              verbose_name='Image',blank=True )
	image2 = models.ImageField(upload_to='images',
                              verbose_name='Image',blank=True )
	image3 = models.ImageField(upload_to='images',
                              verbose_name='Image',blank=True )
	image4 = models.ImageField(upload_to='images',
                              verbose_name='Image',blank=True )
	image5 = models.ImageField(upload_to='images',
                              verbose_name='Image',blank=True )



	def save(self, force_insert=False, force_update=False):
		self.body_html = markdown(self.body)
		if self.excerpt:
			self.excerpt_html= markdown(self.excerpt)
		super(Entry, self).save(force_insert, force_update)

	class Meta:
			ordering=["-pub_date"]
			verbose_name_plural="Entries"

	def __unicode__(self):
		return '%s' %self.title
	def get_absolute_url(self):
		return(self.slug)



