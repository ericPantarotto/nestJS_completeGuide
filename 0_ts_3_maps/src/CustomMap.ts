/// <reference types="google.maps" />

export class CustomMap { 
  private googleMap: google.maps.Map; //HACK: to limit access to the google map object

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}