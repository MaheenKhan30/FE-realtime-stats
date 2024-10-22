import { useEffect, useRef } from 'react';
import openSocket from "socket.io-client";
import { useAppDispatch } from '../redux/hook';
import { setCurrentAvgPrice } from '../redux/slices/avgPriceSlice';


const useSocket = (serverUrl?: string) => {

const dispatch = useAppDispatch();
console.log(process.env.REACT_APP_SERVER_BASE_URL)

  useEffect(() => {
    const socket = openSocket(process.env.SERVER_BASE_URL);

    socket.on('connect', () => {
      console.log('Socket connected');
    });

    socket.on('error', (error) => {
      console.error('Socket error:', error);
    })

    socket.on('disconnect', () => {
      console.log('Socket disconnected');
    })

    socket.on('avgPriceUpdate', (data) => {
        if(data){
            console.log('Received data:', data);
            dispatch(setCurrentAvgPrice(data))
        }
    });

  }, [serverUrl]);

};

export default useSocket;
