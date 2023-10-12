import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgForm, NgModel} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
  
export class ContactComponent {
  showAlert: boolean = false;

  toggleShowAlert() {
    this.showAlert = !this.showAlert;
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_ptlbqr8', 'template_16vskto', e.target as HTMLFormElement, '-zAyczA1-KABOJJnO')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert("SUCCESS!");
        setTimeout(this.toggleShowAlert, 3000);
      }, (error) => {
        console.log(error.text);
        alert("FAILED...")
      });
  }
}


