import React from "react";
import Styles from "pages/Styles";
import ComingSoon from "pages/ComingSoon";
import EditTask from "pages/EditTask";
import AddNewTask from "pages/AddNewTask";
import Tasks from "pages/Tasks";
import CustomerDetail from "pages/CustomerDetail";
import Customers from "pages/Customers";
import EditActivity from "pages/EditActivity";
import EditDeal from "pages/EditDeal";
import DealDetail from "pages/DealDetail";
import Deals from "pages/Deals";
import AddNewDeal from "pages/AddNewDeal";
import SelectCustomer from "pages/SelectCustomer";
import AddNewCustomer from "pages/AddNewCustomer";
import AddNew from "pages/AddNew";
import Dashboard from "pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/addnew" element={<AddNew />} />
        <Route path="/addnewcustomer" element={<AddNewCustomer />} />
        <Route path="/selectcustomer" element={<SelectCustomer />} />
        <Route path="/addnewdeal" element={<AddNewDeal />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/dealdetail" element={<DealDetail />} />
        <Route path="/editdeal" element={<EditDeal />} />
        <Route path="/editactivity" element={<EditActivity />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customerdetail" element={<CustomerDetail />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/addnewtask" element={<AddNewTask />} />
        <Route path="/edittask" element={<EditTask />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/styles" element={<Styles />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
