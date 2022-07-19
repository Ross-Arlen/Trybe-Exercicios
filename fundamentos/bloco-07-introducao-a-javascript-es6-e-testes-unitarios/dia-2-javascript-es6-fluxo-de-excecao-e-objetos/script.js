const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const person = Object.values(order.order.delivery)[0];
    const customer = Object.values(order);
    const address = Object.values(order.address);
    console.log(`Olá ${person}, entrega para: ${customer[0]}, Telefone: ${customer[1]}, R. ${address[0]}, Nº: ${address[1]}, AP: ${address[2]}`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const customer = Object.values(order)[0];
    const pizza = Object.keys(order.order.pizza);
    const bebida = Object.values(order.order.drinks.coke)[0];
    const total = Object.values(order.payment);
    console.log(`Olá ${customer}, o total do seu pedido de ${pizza} e ${bebida} é R$ ${total},00.`);
  }
  
  orderModifier(order);