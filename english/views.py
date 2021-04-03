from django.contrib.auth.decorators import login_required
from django.shortcuts import render


@login_required
def index(request):
    return render(request, 'english/index.html')


@login_required
def training(request, training_type):
    return render(request, 'english/training_' + training_type +  '.html')

