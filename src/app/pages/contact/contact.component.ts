import { Component, OnInit,KeyValueChanges, KeyValueDiffer, KeyValueDiffers} from '@angular/core';
import {  FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private differs: KeyValueDiffers,private fb: FormBuilder,private toastr: ToastrService) { }
  customerDiffer!: KeyValueDiffer<string, any>;

  submitted= false;

  jobForm = this.fb.group({
    firstName: ['',[Validators.required]],
    societe: ['',[Validators.required]],
    email: ['',[Validators.required]],
    phone: [''],
    message: ''
  });

  get myForm() {
    return this.jobForm.controls;
  }
  ngOnInit(): void {

  }

save(): void{
  this.submitted = true;
  if(this.jobForm.status == "VALID"){
    let msg : string = "Nom et Prénom : "+encodeURIComponent(this.jobForm.value.firstName!)+"%0ASociete: "+
    encodeURIComponent(this.jobForm.value.societe!)+"%0ANumero Téléphone : "+(this.jobForm.value.phone == null ? "non renseigné" : encodeURIComponent(this.jobForm.value.phone!))+"%0AMail : "+encodeURIComponent(this.jobForm.value.email!)+"%0AMessage : "+encodeURIComponent(this.jobForm.value.message == null ? '' : this.jobForm.value.message!);
    console.log(this.toastr)
    this.toastr.success('Hello world!', 'Toastr fun!');
   // window.location.href = "mailto:"+'claire@gmail.com?subject=Client&body='+msg;
    console.log('go')
   

  }
}


}
