function calculateDiscount(price: number, discountPercentage: number): number {
  return price - (price * discountPercentage) / 100;
}

const finalPrice = calculateDiscount(1000, 15);

const categories: string[] = ["Electronics", "Clothes"];