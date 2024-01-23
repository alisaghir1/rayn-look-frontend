import { useState, useEffect } from "react";
import axios from "axios";

const useProductCount = () => {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await axios.get("http://localhost:8080/product");
        setProductCount(response.data.length);
      } catch (error) {
        console.error("Error fetching product count:", error);
      }
    };

    fetchProductCount();
  }, []);

  return productCount;
};

export default useProductCount;