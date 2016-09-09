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



def view_more(request, slug):
	#count=Entry.objects.get(slug=slug)
	next_issue = Entry.objects.get(slug=slug)
	current_id= next_issue.pk
	current_category=next_issue.tags
	next_iem_id= current_id+1
	last_id=Entry.objects.latest('id')
	last_id= last_id.pk
	if next_iem_id > last_id:
		next_item = Entry.objects.get(id=current_id - 1)
	else:
		next_item = Entry.objects.get(id=next_iem_id)
	next_item_slug= next_item.slug
	next_item_title=next_item.title
	similar= Entry.objects.filter(tags=current_category)
	newest = Entry.objects.filter(featured=True)[:4]
	marque = Entry.objects.all().order_by('-pub_date')[:3]
	return render_to_response('entry_detail.html',{
	'object':get_object_or_404(Entry, slug=slug),
		'newest':newest,
		'next_item_slug':next_item_slug,
		'next_item_title':next_item_title,
		'marque':marque,
		'similar':similar,
		'current_path': request.get_full_path,

	},RequestContext(request))

