import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`
  // <h2>Hello world from inline html </h2>
  // `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent)
  }
  title = 'hotelinventoryapp';
  role = 'Admin ';


  @ViewChild('user', {read:ViewContainerRef}) vcr! : ViewContainerRef;
}
