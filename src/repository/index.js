import creatMYSQLRepository from './mysqlRepository.js';

export const users = creatMYSQLRepository('users');
export const addresses = creatMYSQLRepository('addresses');
export const products = creatMYSQLRepository('products');
export const carts = creatMYSQLRepository('carts');
export const orders = creatMYSQLRepository('orders');