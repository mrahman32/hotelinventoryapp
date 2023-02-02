import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  @Input() rooms:RoomList[]=[];
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectRoom(room:RoomList){
    this.selectedRoom.emit(room);
  }

}
