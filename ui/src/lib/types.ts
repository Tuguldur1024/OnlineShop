export type ProductType = {
    categoryId: string;
    coupon: string;
    createdAt: Date;
    description: string;
    images: string[];
    price: number;
    productName: string;
    quantity: number;
    salePercent: string;
    _id: string;
    thumbnails: string;
  };
export type Comment = {
    userId : User;
    comment : string;
    createdAt : Date ;
    productId : string;
    updatedAt : Date;
    id : string;
    star : number
}

export type StarRatingProps = {
    rating: number;
  };
  
export type cartType = {
    productId: string;
    quantity: number;
    price: number;
    images: string[];
    name: string;
  };

export type User = {
  userName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  createdAt: Date;
  updatedAt: Date;
  savedProducts: string[]; 
};



