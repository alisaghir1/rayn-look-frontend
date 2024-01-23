import { useState, useEffect } from "react";
import axios from "axios";

const useReviewCount = () => {
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    const fetchReviewCount = async () => {
      try {
        const response = await axios.get("http://localhost:8080/review");
        setReviewCount(response.data.length);
      } catch (error) {
        console.error("Error fetching review count:", error);
      }
    };

    fetchReviewCount();
  }, []);

  return reviewCount;
};

export default useReviewCount;