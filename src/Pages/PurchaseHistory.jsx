import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PurchaseHistory = () => {
  const [orders, setOrders] = useState();
  const { id } = useParams();

  useEffect(() => {
    let userToken = localStorage.getItem('token');
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/api/users/userOrders/${id}?token=${userToken}`
      )
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>
        <b>Purchase History</b>
      </h2>
      {/* Aca empieza el test del table bootstrap */}
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th></th>
              <th>Order Number</th>
              <th>Number of products</th>
              <th>Date</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => {
              let orderTotal = order.orderDetails.reduce((prev, current) => {
                return (prev += current.price);
              }, 0);
              return (
                <tr>
                  <td>
                    <AiOutlineShoppingCart />
                  </td>
                  <td>{order.orderId}</td>
                  <td>{order.orderDetails.length}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>${orderTotal}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PurchaseHistory;
