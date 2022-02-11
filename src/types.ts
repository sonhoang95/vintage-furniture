export interface ProviderProps {
  children: React.ReactNode;
}

export interface ProductDetails {
  id: string;
  stock: number;
  price: number;
  shipping: boolean;
  colors: string[];
  category: string;
  images: Image[];
  reviews: number;
  stars: number;
  name: string;
  description: string;
  company: string;
}

export interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: Thumbnails;
}

export interface Thumbnails {
  small: Full;
  large: Full;
  full: Full;
}

export interface Full {
  url: string;
  width: number;
  height: number;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: Color[];
  company: Company;
  description: string;
  category: string;
  shipping?: boolean;
  featured?: boolean;
}

export enum Color {
  Ff0000 = '#ff0000',
  Ffb900 = '#ffb900',
  The000 = '#000',
  The0000Ff = '#0000ff',
  The00Ff00 = '#00ff00',
}

export enum Company {
  Caressa = 'caressa',
  Ikea = 'ikea',
  Liddy = 'liddy',
  Marcos = 'marcos',
}
