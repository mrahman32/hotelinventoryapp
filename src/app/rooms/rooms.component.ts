import { AfterViewChecked, AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
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

  constructor() { }
  ngAfterViewChecked(): void {
    
  }
  ngAfterViewInit(): void {

    this.headerComponent.title = "Angular Learnings-Room Component";

    console.log(this.headerChildrenComponent);
  }


  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Delux Room',
        amenities: 'Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
        price: 500,
        photos: '',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021')
      },
      {
        roomNumber: 2,
        roomType: 'Delux Room',
        amenities: 'Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
        price: 500,
        photos: '',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021')
      },
      {
        roomNumber: 3,
        roomType: 'Delux Room',
        amenities: 'Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
        price: 1200,
        photos: '',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021')
      },
      {
        roomNumber: 4,
        roomType: 'Prive Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
        price: 1500,
        photos: '',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021')
      },
    ];
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
