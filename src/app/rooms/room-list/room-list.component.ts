import { Component, OnInit, Input } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  @Input() rooms:RoomList[]=[];
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
