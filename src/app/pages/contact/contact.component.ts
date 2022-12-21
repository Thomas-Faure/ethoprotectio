import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../../services/toast-service';
import axios, {isCancel, AxiosError} from 'axios';

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

  showSuccess() {
    this.toastService.show('Votre mail a été envoyé', { classname: 'bg-success text-light', delay: 10000 });
  }

  save(): void {
    this.submitted = true;
    if (this.jobForm.status == "VALID") {

      let msg: string = "Nom et Prénom : " +this.jobForm.value.firstName! + "<br>Organisme : " +
        this.jobForm.value.organisme! + "<br>Numero Téléphone : " + (this.jobForm.value.phone == null ? "non renseigné" : this.jobForm.value.phone!) + "<br>Mail : " + this.jobForm.value.email! + "<br>Message : " + (this.jobForm.value.message == null ? '' : this.jobForm.value.message!);
        axios({
          method: 'post',
          url: 'https://www.ethoprotectio.fr/sendmail',
          data: {
            body: msg
          }
        });
        this.showSuccess();
        this.jobForm.reset();
        // window.location.href = "mailto:" + 'contact@ethoprotectio.fr?subject=Client&body=' + msg;*/
    }
  }


}
