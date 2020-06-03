export interface AppConfig {
    categoryAPI: CategoryAPI;
    productAPI: ProductAPI;
    featureAPI: FeatureAPI;
    cartAPI: CartAPI;
    orderAPI: OrderAPI;
}

export interface ProductAPI {
    url: string;
}
export interface CategoryAPI {
    url: string;
}
export interface FeatureAPI {
    url: string;
}
export interface CartAPI {
    url: string;
}
export interface OrderAPI {
    url: string;
}
