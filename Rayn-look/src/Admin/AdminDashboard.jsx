import "./AdminDashboard.css";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { BiNotepad } from "react-icons/bi";
import { VscPreview } from "react-icons/vsc";
import { useState } from "react";
import AdminHome from "./adminhome/adminhome";
import Adminproducts from "./adminproducts/adminproducts";
import Adminorders from "./adminorders/adminorders";
import Adminreviews from "./adminreviews/adminreviews";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import logo from "../assets/images/logo1.png";
import Swal from "sweetalert2";
const AdminDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");

  const handleSidebarClick = (component) => {
    setSelectedComponent(component);
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "Dashboard":
        return <AdminHome />;
      case "Products":
        return <Adminproducts />;
      case "Orders":
        return <Adminorders />;
      case "Reviews":
        return <Adminreviews />;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        window.location.href = "/adminlogin";
      }
    });
  };
  return (
    <div className="Admin-Dashboard">
      <div className="Admin-sidebar">
        <img src={logo} alt="" className="admin-dashboard-logo" />

        <div
          className={`Admin-sidebar-section ${
            selectedComponent === "Dashboard" ? "selected" : ""
          }`}
          onClick={() => handleSidebarClick("Dashboard")}
        >
          <MdOutlineSpaceDashboard className="Admin-icons" />
          <h2>Dashboard</h2>
        </div>

        <div
          className={`Admin-sidebar-section ${
            selectedComponent === "Products" ? "selected" : ""
          }`}
          onClick={() => handleSidebarClick("Products")}
        >
          <HiMiniShoppingBag className="Admin-icons" />
          <h2>Products</h2>
        </div>

        <div
          className={`Admin-sidebar-section ${
            selectedComponent === "Orders" ? "selected" : ""
          }`}
          onClick={() => handleSidebarClick("Orders")}
        >
          <BiNotepad className="Admin-icons" />
          <h2>Orders</h2>
        </div>

        <div
          className={`Admin-sidebar-section ${
            selectedComponent === "Reviews" ? "selected" : ""
          }`}
          onClick={() => handleSidebarClick("Reviews")}
        >
          <VscPreview className="Admin-icons" />
          <h2>Reviews</h2>
        </div>
        <div className="Admin-sidebar-section" onClick={handleLogout}>
          <CiLogout className="Admin-icons" />
          <h2>Logout</h2>
        </div>
      </div>

      <div className="Admin-Display">{renderSelectedComponent()}</div>
    </div>
  );
};

export default AdminDashboard;
