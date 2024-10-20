from django.urls import path
from .views import BannerView, SkillListView, AboutView, ProjectListView

urlpatterns = [
    path('banner/', BannerView.as_view(), name='banner'),
    path('skills/', SkillListView.as_view(), name='skills'),
    path('about/', AboutView.as_view(), name='about'),
    path('projects/', ProjectListView.as_view(), name='projects'),
]