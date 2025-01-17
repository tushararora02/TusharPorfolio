import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm!: FormGroup;

  private userPublicKey: string = 'sJvCsnRYP3914kY8J'; 
  private serviceID: string = 'service_pjunz3o'; // Replace with your EmailJS service ID
  private templateID: string = 'template_8sogm9q'; // Replace with your EmailJS template ID


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialize the form
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  // Submit form handler
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      this.sendEmail(this.contactForm.value.name, this.contactForm.value.email, this.contactForm.value.message);
      // Here, you would typically send the form data to a backend API
      alert('Thank you for your message!');
      this.contactForm.reset(); // Reset form after submission
    } else {
      alert('Please fill out the form correctly!');
    }
  }

  sendEmail(from_name: string, from_email: string, message: string) {
    const templateParams = {
      from_name: from_name,
      from_email: from_email,
      message: message
    };

    emailjs.send(this.serviceID, this.templateID, templateParams, this.userPublicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }
}
