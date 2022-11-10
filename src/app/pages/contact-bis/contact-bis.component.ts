import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../../services/toast-service';

@Component({
  selector: 'app-contact-bis',
  templateUrl: './contact-bis.component.html',
  styleUrls: ['./contact-bis.component.css']
})
export class ContactBisComponent implements OnInit {
  constructor(private fb: FormBuilder, public toastService: ToastService) { }
  submitted = false;
  jobForm = this.fb.group({
    firstName: ['', [Validators.required]],
    organisme: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: [''],
  });
  get myForm() {
    return this.jobForm.controls;
  }
  ngOnInit(): void {

  }

  showSuccess() {
    this.toastService.show('Toutes les informations sont correctes', { classname: 'bg-success text-light', delay: 10000 });
  }


  save(): void {
    this.submitted = true;
    if (this.jobForm.status == "VALID") {
      let msg: string = "Nom et Prénom : " + encodeURIComponent(this.jobForm.value.firstName!) + "%0AOrganisme : " +
        encodeURIComponent(this.jobForm.value.organisme!) + "%0ANumero Téléphone : " + (this.jobForm.value.phone == null ? "non renseigné" : encodeURIComponent(this.jobForm.value.phone!)) + "%0AMail : " + encodeURIComponent(this.jobForm.value.email!);
        this.showSuccess();
        window.location.href = "mailto:" + 'contact@ethoprotectio.fr?subject=Client&body=' + msg;
    }
  }


}
