import Adminreviewcard from "./adminreviewcard"
import TextField from "@mui/material/TextField";
import "./adminreviews.css"
import { useEffect, useState } from "react";
import axios from "axios"
const Adminreviews = () => {
    const [review, setreview] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        const fetchingreviews = () => {
          axios
            .get('http://localhost:8080/review/')
            .then((res) => {
              setreview(res.data);
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
              setreview([]);
            });
        };

        fetchingreviews();
      }, []);

    return(
        <div className="Admin-display-container">
              <div className="admin-reviews-search-bar">
        <TextField 
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
        />
 </div>
           <div className="admin-reviews-container">

            {review &&
              review.filter((item) =>
              (searchTerm === "" ||
                (item.username && item.username.toLowerCase().includes(searchTerm.toLowerCase())))
            ).map((item, index) => <Adminreviewcard key={index} data={item} />)}
            </div>
        </div>
    )
}


export default Adminreviews