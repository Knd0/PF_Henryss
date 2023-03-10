import React, { useState } from 'react';
import mercadopago from 'mercadopago';

const PaymentForm = () => {
  const [amount, setAmount] = useState(0);

  const handlePayment = async () => {
    // Crea un objeto de pago con los detalles de la transacción
    const payment = {
      transaction_amount: amount,
      token: '',
      description: 'Descripción del producto',
      installments: 1,
      payment_method_id: '',
      issuer_id: '',
      payer: {
        email: 'email@del.com',
        identification: {
          type: 'DNI',
          number: '12345678',
        },
      },
    };

    // Envía la solicitud de pago a la API de MercadoPago
    try {
      const response = await mercadopago.payment.save(payment);
      console.log(response);
      // Almacenar la información de pago en la base de datos y proporcionar una confirmación al usuario
    } catch (error) {
      console.log(error);
      // Manejar el error
    }
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pagar con MercadoPago</button>
    </div>
  );
};

export default PaymentForm;
