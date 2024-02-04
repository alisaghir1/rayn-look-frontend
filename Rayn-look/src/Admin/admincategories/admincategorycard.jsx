import logo from "../../assets/images/logo1.png";
const Admincategorycard = ({category}) => {
    return (
        <div className="admin-categories-card">
            <h2>{category.Name}</h2>
            <img src={logo} alt="" />
        </div>
    )
}

export default Admincategorycard