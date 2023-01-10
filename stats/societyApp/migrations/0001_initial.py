# Generated by Django 3.2.16 on 2023-01-09 18:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sector',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=300, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Society',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=300, unique=True)),
                ('siren', models.IntegerField(unique=True)),
                ('sector', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sector', to='societyApp.sector')),
            ],
        ),
        migrations.CreateModel(
            name='Result',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ca', models.IntegerField()),
                ('margin', models.IntegerField()),
                ('ebitda', models.IntegerField()),
                ('loss', models.IntegerField()),
                ('year', models.IntegerField()),
                ('society', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='society', to='societyApp.society')),
            ],
        ),
    ]
