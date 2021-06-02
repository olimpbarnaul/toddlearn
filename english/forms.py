from django import forms

class TrainingDictForm(forms.Form):
    answer = forms.CharField(max_length=200, required=False)
    word = forms.CharField(max_length=200)
    translation = forms.CharField(max_length=200)
