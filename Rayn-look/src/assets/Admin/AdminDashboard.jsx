import './AdminDashboard.css';
import { HiMiniShoppingBag } from 'react-icons/hi2';
import { BiNotepad } from 'react-icons/bi';
import { VscPreview } from 'react-icons/vsc';
import { useState } from 'react';
import AdminHome from './adminhome/adminhome';
import Adminproducts from './adminproducts/adminproducts';
import Adminorders from './adminorders/adminorders';
import Adminreviews from './adminreviews/adminreviews';
import logo from "../images/rayn-look-logo1.png"
const AdminDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('Dashboard');

  const handleSidebarClick = (component) => {
    setSelectedComponent(component);
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'Dashboard':
        return <AdminHome />;
      case 'Products':
        return <Adminproducts />;
      case 'Orders':
        return <Adminorders />;
      case 'Reviews':
        return <Adminreviews />;
      default:
        return null;
    }
  };

  return (
    <div className="Admin-Dashboard">
      <div className="Admin-sidebar">

<img src={logo} alt="" className='admin-dashboard-logo'/>

        <div
          className={`Admin-sidebar-section ${selectedComponent === 'Dashboard' ? 'selected' : ''}`}
          onClick={() => handleSidebarClick('Dashboard')}
        >
          <HiMiniShoppingBag className="Admin-icons" />
          <h1>Dashboard</h1>
        </div>

        <div
          className={`Admin-sidebar-section ${selectedComponent === 'Products' ? 'selected' : ''}`}
          onClick={() => handleSidebarClick('Products')}
        >
          <HiMiniShoppingBag className="Admin-icons" />
          <h1>Products</h1>
        </div>

        <div
          className={`Admin-sidebar-section ${selectedComponent === 'Orders' ? 'selected' : ''}`}
          onClick={() => handleSidebarClick('Orders')}
        >
          <BiNotepad className="Admin-icons" />
          <h1>Orders</h1>
        </div>

        <div
          className={`Admin-sidebar-section ${selectedComponent === 'Reviews' ? 'selected' : ''}`}
          onClick={() => handleSidebarClick('Reviews')}
        >
          <VscPreview className="Admin-icons" />
          <h1>Reviews</h1>
        </div>
      </div>

      <div className="Admin-Display">{renderSelectedComponent()}</div>
    </div>
  );
};

export default AdminDashboard;
