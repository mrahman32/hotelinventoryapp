import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList:RoomList[] = [
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
  constructor() { 
    console.log("rooms service initialized");
  }

  getRooms(){
    return this.roomList;
  }
}
