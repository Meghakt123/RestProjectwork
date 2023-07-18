from django.urls import path

from newapp import views

urlpatterns=[
    path('details_view/',views.details_view,name='details_view'),
    path('home/',views.home,name='home'),
    path('data_delete/<int:id>/',views.data_delete,name='data_delete'),
]