"""Main views file of application English"""
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from .services import Training
from .forms import TrainingDictForm


@login_required
def index(request):
    return render(request, 'english/index.html')


@login_required
def training(request, training_type):
    user = request.user
    training_service = Training(user)
    if not user.profile.dictionary:
        training_service.load_dictionary()
        print('dictionary loaded')
    if len(user.profile.exercise) < 3:
        training_service.load_exercise()

    data = {}

    if request.method == 'POST':
        form = TrainingDictForm(request.POST)
        if form.is_valid():
            if form.cleaned_data['answer'].lower() in list(map(str.strip, form.cleaned_data['translation'].split(','))) :
                data['ok'] = 'OK'
                training_service.word_done(form.cleaned_data['word'])
            else:
                data['error'] = form.cleaned_data['word'] + ' - ' + form.cleaned_data['translation']

    data['exercise'] = training_service.get_exercise()
    ret = render(request, 'english/training_' + training_type + '.html', data)

    return ret
