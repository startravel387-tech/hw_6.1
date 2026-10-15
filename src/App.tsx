import React from 'react';

const categories: string[] = ["Electronics", "Clothes"];
const originalPrice = 10000;
const discount = 20;
const finalPrice = originalPrice - (originalPrice * discount) / 100;

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
  price: finalPrice,
  isAvailable: true,
  colors: ["черный", "серебристый", "синий"],
  description: "Флагманский смартфон с отличной камерой и быстрой зарядкой.",
  manufacturer: {
    country: "Южная Корея",
    city: "Сеул"
  }
};

function processData(data: unknown): string {
  if (typeof data === 'string') {
    return `Данные - строка, длина: ${data.length}`;
  } else if (typeof data === 'number') {
    return `Данные - число, умноженное на 10: ${data * 10}`;
  } else if (Array.isArray(data)) {
    return `Данные - массив, элементов: ${data.length}`;
  }
  return 'Неизвестный тип данных';
}

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Результаты</h1>

      <section style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Категории и Скидки</h3>
        <p><strong>Категории:</strong> {categories.join(', ')}</p>
        <p>Исходная цена: {originalPrice} сом | Скидка: {discount}%</p>
        <p><strong>Итоговая цена со скидкой:</strong> {finalPrice} сом</p>
      </section>

      <section style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Информация о товаре (Product)</h3>
        <h2>{myProduct.title}</h2>
        {myProduct.description && <p>{myProduct.description}</p>}
        <p><strong>Цена:</strong> {myProduct.price} сом</p>
        <p><strong>Статус:</strong> {myProduct.isAvailable ? '✅ В наличии' : '❌ Нет в наличии'}</p>
        <p><strong>Производитель:</strong> {myProduct.manufacturer.country}, г. {myProduct.manufacturer.city}</p>
        <p><strong>Доступные цвета:</strong></p>
        <ul>
          {myProduct.colors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      </section>

      <section style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Сужение типов (Type Narrowing)</h3>
        <p>Результат для строки ("Привет, мир!"): <em>{processData("Привет, мир!")}</em></p>
        <p>Результат для числа (50): <em>{processData(50)}</em></p>
        <p>Результат для массива ([1, 2, 3, 4, 5]): <em>{processData([1, 2, 3, 4, 5])}</em></p>
      </section>
    </div>
  );
}