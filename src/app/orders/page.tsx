"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { HiOutlineXMark, HiOutlineClipboardDocumentList } from 'react-icons/hi2';

// Mock data
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { 
  OrdersHeader, 
  OrdersContainer, 
  OrdersTitle, 
  OrderList, 
  OrderCard, 
  OrderInfo, 
  OrderStatus,
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalItemsList,
  ModalTotal
} from './orders.styled';

const OrdersPage = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  React.useEffect(() => {
    if (selectedOrder) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedOrder]);

  return (
    <>
      <OrdersHeader>
        <OrdersTitle>
          <div className="title-left">
            <HiOutlineClipboardDocumentList className="orders-heading-icon" />
            <h1>Order History</h1>
          </div>
          <div className="title-right">
            <p className="subtitle">
              Total <span>{orders.length} orders</span> placed
            </p>
          </div>
        </OrdersTitle>
      </OrdersHeader>

      <OrdersContainer>
        {orders.length > 0 ? (
          <OrderList>
            {orders.map((order) => (
              <OrderCard key={order.id} onClick={() => setSelectedOrder(order)} style={{ cursor: 'pointer' }}>
                <OrderInfo>
                  <div className="order-id">Order ID: <span>{order.id}</span></div>
                  <div className="order-date">Placed on {order.date} • {order.itemsCount} Items</div>
                  <div className="order-total">${order.total.toFixed(2)}</div>
                </OrderInfo>
                <OrderStatus status={order.status}>
                  <div className="status-badge">{order.status}</div>
                  <button className="view-btn">View Details</button>
                </OrderStatus>
              </OrderCard>
            ))}
          </OrderList>
        ) : (
          /* ... empty state ... */
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#888' }}>
            <h2 style={{ color: '#333', marginBottom: '10px' }}>No orders yet</h2>
            <p>You haven't placed any orders yet. Start shopping to see your history!</p>
            <Link href="/products" style={{ 
              display: 'inline-block', 
              marginTop: '20px', 
              backgroundColor: '#20b820', 
              color: 'white', 
              padding: '12px 24px', 
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '700'
            }}>
              Browse Products
            </Link>
          </div>
        )}
      </OrdersContainer>

      {/* Order Details Modal */}
      {selectedOrder && (
        <ModalOverlay onClick={() => setSelectedOrder(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedOrder(null)}>
              <HiOutlineXMark />
            </CloseButton>
            <h2>Order Details</h2>
            
            <div className="order-meta">
              <div className="meta-item">
                <label>Order ID</label>
                <div className="value">{selectedOrder.id}</div>
              </div>
              <div className="meta-item">
                <label>Date</label>
                <div className="value">{selectedOrder.date}</div>
              </div>
              <div className="meta-item">
                <label>Status</label>
                <div className="value" style={{ color: '#20b820' }}>{selectedOrder.status}</div>
              </div>
            </div>

            <h3>Items Summary</h3>
            <ModalItemsList>
              {selectedOrder.items?.map((item: any, idx: number) => (
                <div key={idx} className="item">
                  <img src={item.image_url} alt={item.name} />
                  <div className="info">
                    <h4>{item.name}</h4>
                    <p>{item.quantity} x ${item.price.toFixed(2)}</p>
                  </div>
                  <div className="price">
                    ${(item.quantity * item.price).toFixed(2)}
                  </div>
                </div>
              ))}
            </ModalItemsList>

            <ModalTotal>
              <span>Total Amount</span>
              <div className="amount">${selectedOrder.total.toFixed(2)}</div>
            </ModalTotal>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default OrdersPage;
