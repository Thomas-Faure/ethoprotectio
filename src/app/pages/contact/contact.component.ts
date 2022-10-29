import { Component, OnInit,KeyValueChanges, KeyValueDiffer, KeyValueDiffers} from '@angular/core';
import { FormControl } from '@angular/forms';
import {ContactForm} from '../../class/contactForm';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private differs: KeyValueDiffers) { }
  customerDiffer!: KeyValueDiffer<string, any>;

  model! : ContactForm;
  canSendMail! : boolean;
  mailtovalue! :string;

  ngOnInit(): void {
    this.canSendMail = false;
    this.mailtovalue = "";
    this.model = new ContactForm();
    this.customerDiffer = this.differs.find(this.model).create();
  }

  ngDoCheck(): void {
    const changes = this.customerDiffer.diff(this.model);
    if (changes) {
      this.checkCanSendMail()
    }
}
  checkCanSendMail() : void{
    if(this.model.allValid()){
      this.model.clearText();
      this.mailtovalue = 'claire@gmail.com?subject=Client&body='+"Nom et Prenom: "+this.model.nomPrenom+"%0ASociete: "+this.model.societe+"%0ANumero Téléphone: "+this.model.numeroTel+"%0AMail : "+this.model.email;
      this.canSendMail = true;
    }else{
      this.canSendMail = false;
    }
  }


}
