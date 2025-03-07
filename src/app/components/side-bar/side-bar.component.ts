import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  activeItemIndex=0;
  name1="";
  name2="";
  name3="";
  
  items=["My Cart", "Products", "About", "Contact us"]

  button1(i:number){
    
    this.activeItemIndex=i
  }
}
