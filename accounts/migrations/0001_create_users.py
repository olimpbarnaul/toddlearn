from django.db import migrations
from django.contrib.auth import get_user_model


def create_users(apps, schema_editor):
    User = get_user_model()
    User.objects.create_superuser(username='adm' , password='Admiragl29')
    User.objects.create_user(username='seva'     , password='Sevargl6'    , first_name='Сева')
    User.objects.create_user(username='egor'     , password='Georgl9'     , first_name='Егор')
    User.objects.create_user(username='vara'     , password='Varvargl13'  , first_name='Варя')
    User.objects.create_user(username='klim'     , password='Kremengl20'  , first_name='Клим')
    User.objects.create_user(username='alen'     , password='Allenka2'    , first_name='Алёна')
    User.objects.create_user(username='anna'     , password='Annetka16'   , first_name='Аня')

class Migration(migrations.Migration):

    dependencies = [ 
        ('auth', '0012_alter_user_first_name_max_length')
    ]

    operations = [
        migrations.RunPython(create_users)
    ]
