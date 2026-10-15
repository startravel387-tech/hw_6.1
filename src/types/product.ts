interface Product {
  readonly id: number;
  title: string;
  price: number;
  isAvailable: boolean;
  colors: string[];
  description?: string;
  manufacturer: {
    country: string;
    city: string;
  };
}

const myProduct: Product = {
  id: 1,
  title: "Смартфон",
  price: 45000,
  isAvailable: true,
  colors: ["черный", "серебристый"],
  description: "Флагманский смартфон с отличной камерой",
  manufacturer: {
    country: "Южная Корея",
    city: "Сеул"
  }
};