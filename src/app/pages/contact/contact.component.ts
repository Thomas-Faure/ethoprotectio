import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../../services/toast-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private fb: FormBuilder, public toastService: ToastService) { }
  submitted = false;
  jobForm = this.fb.group({
    firstName: ['', [Validators.required]],
    organisme: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: [''],
    message: ''
  });
  get myForm() {
    return this.jobForm.controls;
  }
  ngOnInit(): void {

  }

  save(): void {
    this.submitted = true;
    if (this.jobForm.status == "VALID") {
      let msg: string = "Nom et Prénom : " + encodeURIComponent(this.jobForm.value.firstName!) + "%0AOrganisme : " +
        encodeURIComponent(this.jobForm.value.organisme!) + "%0ANumero Téléphone : " + (this.jobForm.value.phone == null ? "non renseigné" : encodeURIComponent(this.jobForm.value.phone!)) + "%0AMail : " + encodeURIComponent(this.jobForm.value.email!) + "%0AMessage : " + encodeURIComponent(this.jobForm.value.message == null ? '' : this.jobForm.value.message!);
        window.location.href = "mailto:" + 'contact@ethoprotectio.fr?subject=Client&body=' + msg;
    }
  }


}
