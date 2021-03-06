from django.conf.urls import url, include 
from rest_framework.urlpatterns import format_suffix_patterns
from .views import BlogView, BlogDetailsView


urlpatterns = {
    url(r'^blog/$', BlogView, name="blog"),
    url(r'^blog/(?P<pk>[0-9]+)/$',
    BlogDetailsView, name="blog_details"),
}



urlpatterns = format_suffix_patterns(urlpatterns)
