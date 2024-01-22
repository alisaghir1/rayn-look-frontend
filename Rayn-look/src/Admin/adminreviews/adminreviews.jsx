import Adminreviewcard from "./adminreviewcard"
import TextField from "@mui/material/TextField";
import "./adminreviews.css"
const Adminreviews = () => {
    return(
        <div className="Admin-display-container">
              <div className="admin-reviews-search-bar">        
        <TextField 
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
 </div>
           <div className="admin-reviews-container">
            <Adminreviewcard />
            <Adminreviewcard />
            <Adminreviewcard />
            <Adminreviewcard />
            <Adminreviewcard />
            <Adminreviewcard />
            <Adminreviewcard />
            <Adminreviewcard />
            <Adminreviewcard />
            <Adminreviewcard />
            <Adminreviewcard />
            <Adminreviewcard />
            </div>
        </div>
    )
}


export default Adminreviews