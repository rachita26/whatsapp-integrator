import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'whatsapp-integrator';
  @Input() code: String;
  @Input() phNumber: String;
  @Input() message: String;

  startChat() {
    console.log(this.code, this.phNumber, this.message);
    if(this.code && this.phNumber){
      if(this.message){
        window.open(`https://api.whatsapp.com/send?phone=${this.code}${this.phNumber}&text=${this.message}`, "_blank");
      }
      else{
        window.open(`https://api.whatsapp.com/send?phone=${this.code}${this.phNumber}`, "_blank");
      }
    }
  }
}
