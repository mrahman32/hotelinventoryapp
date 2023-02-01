import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5
  } 


  roomList:RoomList[] = [
    {
      roomNumber:1,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
      price : 500,
      photos:'',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
    },
    {
      roomNumber:2,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
      price : 500,
      photos:'',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
    },
    {
      roomNumber:3,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
      price : 1200,
      photos:'',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
    },
    {
      roomNumber:4,
      roomType: 'Prive Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
      price : 1500,
      photos:'',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms; //toggle the value of  hideRooms variable
  }

}
