import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { io } from "socket.io-client";

const OrderBook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const socket = io("wss://api-pub.bitfinex.com/ws/2");

        socket.emit('subscribe', {
            event: 'subscribe',
            channel: 'book',
            symbol: 'tBTCUSD',
        });

        socket.on('message', (data) => {
            console.log(data);
            dispatch({ type: 'WEBSOCKET_MESSAGE', payload: data });
        });

        return () => {
            socket.disconnect();
        };
    }, [dispatch]);

    const orderBook = useSelector((state) => state.orderBook);

    console.log(orderBook);

    return (
        <div>
            <h2>Order Book</h2>
            {/* Render the order book data here */}
        </div>
    );
};

export default OrderBook;
