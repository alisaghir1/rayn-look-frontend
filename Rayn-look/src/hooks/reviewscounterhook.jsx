import { useState, useEffect } from "react";
import axios from "axios";

const useReviewCount = () => {
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    const fetchReviewCount = async () => {
      try {
        const response = await axios.get("https://rayn-look-backend.onrender.com/review");
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