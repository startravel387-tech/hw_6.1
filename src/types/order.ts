type OrderStatus = 'pending' | 'shipped' | 'delivered';

type PaymentMethod = string | number;

const currentStatus: OrderStatus = 'shipped';
const payment: PaymentMethod = 'card';