# Generated by Django 3.2.4 on 2021-08-13 08:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0002_round_score_hcp'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='calculated_hcp',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]