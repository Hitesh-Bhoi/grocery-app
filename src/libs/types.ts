export interface Category {
  _id?: string;
  name: string;
  slug?: string;
}

export interface Product {
  id?: string | number;
  _id?: string;
  name: string;
  slug?: string;
  category?: string | Category;
  price: number;
  original_price?: number;
  unit?: string;
  rating?: number;
  reviews_count?: number;
  stock?: number;
  is_featured?: boolean;
  image_url: string;
  description?: string;
  tags?: string[];
  badge?: string;
  discount?: number;
}

export interface CartItem {
  id?: string | number;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
  unit?: string;
}

export interface WishlistItem {
  id?: string | number;
  name: string;
  price: number;
  image_url: string;
  unit?: string;
}

export interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  image_url?: string;
  unit?: string;
}

export interface Order {
  id: string;
  date: string;
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  items: OrderItem[];
  total: number;
  paymentMethod?: string;
  deliveryAddress?: string;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar?: string;
}
