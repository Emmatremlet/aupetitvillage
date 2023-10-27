import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
  
export class ContactComponent {

  contactForm: FormGroup;
  logo: any = "../assets/logo.png";

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      object: ['', Validators.required],
      comments: ['', Validators.required],
    });
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_ptlbqr8', 'template_16vskto', e.target as HTMLFormElement, '-zAyczA1-KABOJJnO')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert("SUCCESS!");
      }, (error) => {
        console.log(error.text);
        alert("FAILED...")
      });
    this.contactForm.reset();
  }
}


