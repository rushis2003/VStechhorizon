import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent {
  constructor() { }

  openWhatsApp() {
    const whatsappLink = "https://wa.me/9325360357";
    
    window.open(whatsappLink, '_blank');
  }

}
// const whatsappLink = "https://api.whatsapp.com/send?9359562210";