/* Estamos creando una nueva clase de producto y el constructor toma 5 argumentos. Cuando escribimos public sku: string, estamos diciendo dos cosas:
  hay una variable public en instancias de esta clase llamada sku
  sku es de tipo cadena.
*/
export class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number) {
  }
}
