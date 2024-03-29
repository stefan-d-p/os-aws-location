import { Component, Host, h, Prop, Watch, Method } from '@stencil/core';
import { Map, Marker } from 'maplibre-gl';

@Component({
  tag: 'aws-map',
  styleUrls: ['aws-map.css','../../../node_modules/maplibre-gl/dist/maplibre-gl.css'],
  shadow: false,
})
export class AwsMap {

  /** API generated in AWS Location Service Console **/
  @Prop() apiKey: string;
  /** Initial latitude position **/
  @Prop() lat: number;
  /** Initial longitude position **/
  @Prop() lng: number;
  /** Map name from AWS Location Service console **/
  @Prop() mapName: string;
  /** AWS Region **/
  @Prop() region: string;

  /** Zoom Level **/
  @Prop() zoom: number = 10;

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

  @Method()
  async addMarker(color: string, lng: number, lat: number) {
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
