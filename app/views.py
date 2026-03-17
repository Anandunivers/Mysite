import requests # type: ignore
from django.shortcuts import render,redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from .models import Contact, Skills, Project,AutoStat



def home(request):
    return render(request,'index.html')


def about(request):
    stats=AutoStat.objects.all()
    return render(request,"about.html",{"stats":stats})


# def contact(request):

    if request.method == "POST":

        name = request.POST.get("name")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")

        # Database me save
        Contact.objects.create(
            name=name,
            email=email,
            subject=subject,
            message=message
        )

        # Email message
        full_message = f"""
New Contact Form Message

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}
"""

        # Email send
        send_mail(
            subject,
            full_message,
            settings.EMAIL_HOST_USER,
            [settings.EMAIL_HOST_USER],
            fail_silently=False,
        )
        # -----------------------
        # Auto Reply to USER
        # -----------------------

        user_message = f"""
Hello {name},

Thank you for contacting me.

I have received your message and will get back to you as soon as possible.

Best Regards  
Anand Singh  
AI & Machine Learning Developer
"""

        send_mail(
            "Thank you for contacting me",
            user_message,
            settings.EMAIL_HOST_USER,
            [email],
            fail_silently=False,
        )

        messages.success(request,"Message Sent Successfully")

        return redirect('home')

    return render(request,'Contact.html')




def contact(request):

    if request.method == "POST":

        # ----------------------
        # reCAPTCHA verification
        # ----------------------

        # recaptcha_response = request.POST.get('g-recaptcha-response')

        # data = {
        #     'secret': settings.RECAPTCHA_SECRET_KEY,
        #     'response': recaptcha_response
        # }

        # r = requests.post(
        #     'https://www.google.com/recaptcha/api/siteverify',
        #     data=data
        # )

        # result = r.json()

        # if not result['success']:
        #     messages.error(request,"Invalid reCAPTCHA. Please try again.")
        #     return redirect('contact')


        # ----------------------
        # Form Data
        # ----------------------

        name = request.POST.get("name")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")


        # ----------------------
        # Save in Database
        # ----------------------

        Contact.objects.create(
            name=name,
            email=email,
            subject=subject,
            message=message
        )


        # ----------------------
        # Email to You
        # ----------------------

        full_message = f"""
New Contact Form Message

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}
"""

        send_mail(
            subject,
            full_message,
            settings.EMAIL_HOST_USER,
            [settings.EMAIL_HOST_USER],
            fail_silently=False,
        )


        # ----------------------
        # Auto Reply to User
        # ----------------------

        user_message = f"""
Hello {name},

Thank you for contacting me.

I have received your message and will get back to you as soon as possible.

Best Regards  
Anand Singh  
AI & Machine Learning Developer
"""

        send_mail(
            "Thank you for contacting me",
            user_message,
            settings.EMAIL_HOST_USER,
            [email],
            fail_silently=False,
        )


        messages.success(request,"Message Sent Successfully")

        return redirect('home')


    return render(request,'Contact.html')

def project(request):

    projects = Project.objects.all()

    context = {
        "projects": projects
    }

    return render(request,"Project.html",context)


def skills(request):

    skills = Skills.objects.all()

    return render(request,"Skills.html",{"skills":skills})