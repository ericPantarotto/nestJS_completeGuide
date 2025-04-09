/// <reference types="google.maps" />

// NOTE: Instructions to every other class on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

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

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addEventListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        // content: `<div>${mappable.location.lat}, ${mappable.location.lng}</div>`,
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
