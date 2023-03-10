export interface capital {
    latlng: Array<number>;
  }
  export interface car {
    signs: Array<number>;
    side: string;
  }
  export interface coa {
    png: string;
    svg: string;
  }
  export interface flag {
    png: string;
    svg: string;
    alt: string;
  }
  export interface map {
    googleMaps: string;
    openStreetMaps: string;
  }
  export interface name {
    common: string;
    official: string;
  }
  export interface Country {
    altSpellings: Array<string>;
    area: number;
    region: string;
    capital: Array<string>;
    capitalInfo: capital;
    car: car;
    coatOfArms: coa;
    continents: Array<string>;
    latlng: Array<number>;
    flags: flag;
    maps: map;
    name: name;
  }