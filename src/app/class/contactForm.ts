export class ContactForm {

    constructor(
      public nomPrenom?: string,
      public email? : string,
      public numeroTel? : string,
      public societe? : string
    ) {  }


    public allValid(): boolean {
        console.log(typeof this.nomPrenom!='undefined' && this.nomPrenom)
        if(!(typeof this.nomPrenom!='undefined' && this.nomPrenom)){
            console.log("falseeee")
            return false;
        }
        if(!(typeof this.email!='undefined' && this.email)){
            return false;
        }
        if(!(typeof this.numeroTel!='undefined')){
            return false;
        }
        if(!(typeof this.societe!='undefined' && this.societe)){
            return false;
        }
        return true;
    }
    public clearText(){
        this.nomPrenom = this.nomPrenom?.replace("&body=","")
        this.email = this.nomPrenom?.replace("&body=","")
        this.societe = this.nomPrenom?.replace("&body=","")

        this.nomPrenom = this.nomPrenom?.replace("subject=","")
        this.email = this.nomPrenom?.replace("subject=","")
        this.societe = this.nomPrenom?.replace("subject=","")


    }
  
  }