import logo from "../../assets/images/logo1.png";
import Swal from "sweetalert2";
import axios from 'axios'


const Admincategorycard = ({category,onDelete}) => {


    const ondelete = async () => {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        });
    
        if (result.isConfirmed) {
          try {
            const response = await axios.delete(`https://rayn-look-backend.onrender.com/category/${category._id}`);
            if (response.status !== 200) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            await Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            onDelete(category._id);
          } catch (error) {
            console.error('There was an error!', error);
          }
        }
      };

    return (
        <div className="admin-categories-card">
            <h2>{category.Name}</h2>
            <img src={logo} alt="" />
            <button
                type="button"
                className="btn btn-outline-danger"
                onClick={ondelete}
            >
                Delete
            </button>
        </div>
    )
}

export default Admincategorycard