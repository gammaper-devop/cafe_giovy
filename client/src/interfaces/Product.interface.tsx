export interface Product {
    _id: string;
  descripcion: string;
  image: string;
  tipos: {
    nombre: string;
    precio: number;
  }[];
}