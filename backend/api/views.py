from rest_framework import generics
from .models import Banner, Skill, About, Project
from .serializers import BannerSerializer, SkillSerializer, AboutSerializer, ProjectSerializer

class BannerView(generics.RetrieveAPIView):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer

    def get_object(self):
        return self.get_queryset().first()

class SkillListView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class AboutView(generics.RetrieveAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

    def get_object(self):
        return self.get_queryset().first()

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer