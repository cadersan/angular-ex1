import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {

    number=0;
    names=[""]
    hidden=true
    WordHidde=false;
   
    items = [
    {
      img: "assets/icons/mugitem.png",
      title:"mug",
      price: "30$"
    },
    {
      img: "assets/icons/shoesitem.png",
      title:"shoes",
      price: "90$"
    },
    {
      img: "assets/icons/caseitem.png",
      title:"case",
      price: "12$"
    }
  ]
  SelectImg(name:string){
    this.number+=1;
  
    this.names.push(name);

  }
  buttonExpand(){
    this.hidden=false
    this.WordHidde=true;
  }

  buttonHidde(){
    this.hidden=true
    this.WordHidde=false
  }
 
}
