import { useEffect, useRef } from "react";

import openSocket from "socket.io-client";

import { useAppDispatch } from "../redux/hook";

import {
  addToPriceHistory,
  setCurrentAvgPrice,
  setHighestandLowestPrice,
} from "../redux/slices/avgPriceSlice";

const useSocket = () => {
  const dispatch = useAppDispatch();
  const socketRef = useRef<any>(null);

  useEffect(() => {
    socketRef.current = openSocket(`${process.env.REACT_APP_SERVER_BASE_URL}`);

    const socket = socketRef.current;

    socket.on("connect", () => {
      console.log("Socket connected");
    });

    socket.on("error", (error: any) => {
      console.error("Socket error:", error);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    socket.on("avgPriceUpdate", (data: any) => {
      if (data) {
        dispatch(setCurrentAvgPrice(data));
        dispatch(addToPriceHistory(data));
        dispatch(setHighestandLowestPrice(data?.avgPriceUSD));
      }
    });

    return () => {
      socket.off("avgPriceUpdate");
      socket.disconnect();
    };
  }, [dispatch]);

  return socketRef.current;
};

export default useSocket;
