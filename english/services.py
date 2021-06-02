"""Service functions for English training"""
import os
import json
import random
from pathlib import Path


class Training:
    def __init__(self, user):
        self.user = user

    def load_dictionary(self):
        xml_path = os.path.join(Path(__file__).parent, 'dict')
        xml_file = os.path.join(xml_path, self.user.username + '.json')
        with open(xml_file) as json_file:
            data = json.load(json_file)
            self.user.profile.dictionary = json.dumps({key.lower(): value.lower().replace(';',',') for key, value in data.items()})
            self.user.save()

    def load_exercise(self):
        dictionary = json.loads(self.user.profile.dictionary)
        short_dictionary = {k: v for k, v in dictionary.items() if len(k) < 4}
        exercise = list(short_dictionary.items())
        random.shuffle(exercise)
        self.user.profile.exercise = json.dumps(dict(exercise))
        self.user.save()

    def get_exercise(self):
        exercise = json.loads(self.user.profile.exercise)
        words = list(exercise.keys())
        translations = list(exercise.values())
        word = random.choice(words)
        return {'data': exercise,
                'words': words,
                'translations': translations,
                'word': word,
                'translation': exercise[word]}

    def word_done(self, word):
        exercise = json.loads(self.user.profile.exercise)
        if word in exercise:
            del exercise[word]
            self.user.profile.exercise = json.dumps(exercise)
            self.user.save()

