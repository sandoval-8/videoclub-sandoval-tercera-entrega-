import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VIDEOTESTCODERHOUSE';

  response:any;

  constructor(private http:HttpClient){  }

  mostrar(){
    this.http.get("/api/saludo").subscribe((response) => {
      console.log("saludo: " + response);
    });
  }
}
