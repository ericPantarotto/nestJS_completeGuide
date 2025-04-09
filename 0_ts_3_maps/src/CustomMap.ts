/// <reference types="google.maps" />
import { Company } from './Company';
import { User } from './User';

export class CustomMap {
  private googleMap: google.maps.Map; //HACK: to limit access to the google map object

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
        mapId: divId,
      }
    );
  }

  addMarker(mappable: User | Company): void {
    new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
