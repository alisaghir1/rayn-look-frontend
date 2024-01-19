import './AdminDashboard.css'
import { HiMiniShoppingBag } from "react-icons/hi2";
import { BiNotepad } from "react-icons/bi";
import { VscPreview } from "react-icons/vsc";
import { useState } from 'react';
import AdminHome from './adminhome/adminhome'
import Adminproducts from './adminproducts/adminproducts';
import Adminorders from './adminorders/adminorders';
import Adminreviews from './adminreviews/adminreviews';
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

<div className='Admin-sidebar-section' onClick={() => handleSidebarClick('Dashboard')}>
        <HiMiniShoppingBag className="Admin-icons"/>
<h1>Dashboard</h1>
</div>



    <div className='Admin-sidebar-section' onClick={() => handleSidebarClick('Products')}>
        <HiMiniShoppingBag className="Admin-icons"/>
<h1>Products</h1>
</div>



<div className='Admin-sidebar-section' onClick={() => handleSidebarClick('Orders')}>

<BiNotepad className="Admin-icons"/>
<h1>Orders</h1>
</div>



<div className='Admin-sidebar-section' onClick={() => handleSidebarClick('Reviews')}>

<VscPreview className="Admin-icons"/>
<h1>Reviews</h1>
</div>

</div>




<div className="Admin-Display">{renderSelectedComponent()}</div>








</div>



)





}


export default AdminDashboard