import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app';
  fullName = 'Angular';//Bai 2
  subject = 'Angular Framework';//Bai 2
  
  name = "Nguyen Van A";
  age = 20;
  
  
    sayHello(){
      console.log("hello");
      alert('hello ' + this.fullName)
    }

    clickMe(){
      alert("Bạn đã click button");
    }
}
