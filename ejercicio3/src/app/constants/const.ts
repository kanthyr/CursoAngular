export interface city {
    id: number;
    id_state: number;
    name: string;
  }
  
  interface infoperson {
    adress: string;
  }
  
  export interface typesData {
    date_join: Date;
    years: number;
    name: string;
    info: infoperson;
    amount: number;
  }
  
  
  export const CITIES: city[] = [
    {
      "id": 1,
      "id_state": 1,
      "name": "Agdam"
    },
    {
      "id": 2,
      "id_state": 2,
      "name": "Adzhikend"
    },
    {
      "id": 3,
      "id_state": 3,
      "name": "Alunitag"
    },
    {
      "id": 10,
      "id_state": 4,
      "name": "Aksu"
    },
    {
      "id": 11,
      "id_state": 5,
      "name": "Baku"
    },
    {
      "id": 15,
      "id_state": 6,
      "name": "Belokani"
    }
  ]
  
  
  export const TYPES: typesData = {
    date_join: new Date(),
    years: 25.456,
    name: 'gerardo',
    info: {
      adress: 'sur 50 mz 64 lte 12'
    },
    amount: 255
  }
  