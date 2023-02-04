export class Product{
    
    name:string;
    code:number;
    price:number;
    type?:string;
    status:boolean;

    constructor(name:string, code:number, price:number, type?:string, status:boolean = false){
        this.name = name;
        this.code = code;
        this.price = price;
        this.status = status;
        this.type = type;

    }

}