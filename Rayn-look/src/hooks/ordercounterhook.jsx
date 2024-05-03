import { useState, useEffect } from "react";
import axios from "axios";

const useOrderCount = () => {
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    const fetchOrderCount = async () => {
      try {
        const response = await axios.get("https://rayn-look-backend.onrender.com/Order");
        setOrderCount(response.data.length);
      } catch (error) {
        console.error("Error fetching review count:", error);
      }
    };

    fetchOrderCount();
  }, []);

  return orderCount;
};

export default useOrderCount;