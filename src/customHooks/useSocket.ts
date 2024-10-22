import { useEffect, useRef } from "react";
import openSocket from "socket.io-client";
import { useAppDispatch } from "../redux/hook";
import { setCurrentAvgPrice } from "../redux/slices/avgPriceSlice";

const useSocket = (serverUrl?: string) => {
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
        console.log("Received data:", data);
        dispatch(setCurrentAvgPrice(data));
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
