# Generated by Django 3.2.11 on 2022-01-14 18:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_ingredient'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='cookingTime',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='imageOne',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='recipe',
            name='imageThree',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='recipe',
            name='imageTwo',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='recipe',
            name='noOfPeople',
            field=models.IntegerField(blank=True, default=2, null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='recipeTime',
            field=models.CharField(choices=[('Breakfast', 'Breakfast'), ('Lunch', 'Lunch'), ('Snacks', 'Snacks'), ('Dinner', 'Dinner')], default='Breakfast', max_length=20),
        ),
        migrations.CreateModel(
            name='Instruction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('recipe', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.recipe')),
            ],
        ),
    ]
