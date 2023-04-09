export interface Comic {
  id: number;
  title: string;
  issueNumber: number;
  description: string;
  format: string;
  resourceURI: string;
  urls: Url[];
  price: number;
  oldPrice: number;
  stock: number;
  thumbnail: Thumbnail;
  images: Image[];
  characters: Characters;
}

export interface Url {
  type: string;
  url: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Image {
  path: string;
  extension: string;
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: Item2[];
  returned: number;
}

export interface Item {
  resourceURI: string;
  name: string;
  role: string;
}

export interface Item2 {
  resourceURI: string;
  name: string;
}

export interface Item3 {
  resourceURI: string;
  name: string;
  type: string;
}
