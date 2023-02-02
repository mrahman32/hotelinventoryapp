import { Component, OnInit, Input, Output, EventEmitter,ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';
// import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class RoomListComponent implements OnInit, OnChanges {

  @Input() rooms:RoomList[]=[];
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();


  constructor(){}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectRoom(room:RoomList){
    this.selectedRoom.emit(room);
  }

}
