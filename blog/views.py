from django.shortcuts import get_object_or_404, render_to_response,render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from blog.models import Entry, Link, Category
from django.template import RequestContext
from datetime import datetime, timedelta
from django.contrib.comments.models import Comment
from django.db.models import F
from django.contrib.auth.models import User
# Create your views here.

def entries_index(request):
	marque_all=Entry.objects.all().order_by('-pub_date')
	paginator= Paginator(marque_all, 5)
	page= request.GET.get('page')
	try:
		marque= paginator.page(page)
	except PageNotAnInteger:
		marque= paginator.page(1)
	except EmptyPage:
		marque= paginator.page(paginator.num_pages)

	newest=Entry.objects.filter(featured=True)[:4]

	return render_to_response('index.html',
							  {'entries': Entry.objects.all(),
							   'marque':marque,
							   'newest':newest,
							   'current_path': request.get_full_path,

							   })



