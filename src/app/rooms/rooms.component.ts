import { AfterViewChecked, AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  // providers:[RoomsService]
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {



  hotelName = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5
  };


  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(private roomsService:RoomsService) { }
  ngAfterViewChecked(): void {
    
  }
  ngAfterViewInit(): void {

    this.headerComponent.title = "Angular Learnings-Room Component";

    console.log(this.headerChildrenComponent);
  }


  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();

  }

  toggle() {
    this.hideRooms = !this.hideRooms; //toggle the value of  hideRooms variable
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }


  addRoom() {
    const room: RoomList = {
      roomNumber: 5,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
      price: 5000,
      photos: '',
      checkinTime: new Date('19-Nov-2021'),
      checkoutTime: new Date('22-Nov-2021')
    };
    // this.roomList.push(room);

    // to create a new instance
    this.roomList = [...this.roomList, room];

  }
}
