export class Product {
    //name,sku,imageurl,department,price
    constructor(
        public name:string,
        public sku:string, 
        public imageUrl:string, 
        public department:Array<string>, 
        public price:number
        ) {}
}
