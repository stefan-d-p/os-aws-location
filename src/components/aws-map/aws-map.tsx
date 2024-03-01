import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { Map, Marker } from 'maplibre-gl';

@Component({
  tag: 'aws-map',
  styleUrls: ['aws-map.css','../../../node_modules/maplibre-gl/dist/maplibre-gl.css'],
  shadow: false,
})
export class AwsMap {

  @Prop() apiKey: string;
  @Prop() lat: number;
  @Prop() lng: number;
  @Prop() mapName: string;
  @Prop() region: string;

  @Prop() zoom: number;

  @Watch('zoom')
  watchZoom(newValue: number) {
    this.currentMap.setZoom(newValue);
  }

  mapElement!: HTMLElement;

  currentMap: Map;

  initializeMap() {

    this.currentMap = new Map({
      container: this.mapElement,
      center: [ this.lng, this.lat ],
      zoom: this.zoom,
      style: `https://maps.geo.${this.region}.amazonaws.com/maps/v0/maps/${this.mapName}/style-descriptor?key=${this.apiKey}`,
    });
  }

  public addMarker(color: string, lng: number, lat: number) {
    const marker = new Marker({color: color}).setLngLat([lng, lat]);
    marker.addTo(this.currentMap);
  }

   componentDidLoad() {
    this.initializeMap();

  }

  render() {
    return (
      <Host>
        <div class="map" ref={(el) => this.mapElement = el as HTMLElement} />
      </Host>
    );
  }
}
