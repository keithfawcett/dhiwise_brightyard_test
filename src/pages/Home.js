import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/addnew">AddNew</Link>
        </li>
        <li>
          <Link to="/addnewcustomer">AddNewCustomer</Link>
        </li>
        <li>
          <Link to="/selectcustomer">SelectCustomer</Link>
        </li>
        <li>
          <Link to="/addnewdeal">AddNewDeal</Link>
        </li>
        <li>
          <Link to="/deals">Deals</Link>
        </li>
        <li>
          <Link to="/dealdetail">DealDetail</Link>
        </li>
        <li>
          <Link to="/editdeal">EditDeal</Link>
        </li>
        <li>
          <Link to="/editactivity">EditActivity</Link>
        </li>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <Link to="/customerdetail">CustomerDetail</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/addnewtask">AddNewTask</Link>
        </li>
        <li>
          <Link to="/edittask">EditTask</Link>
        </li>
        <li>
          <Link to="/comingsoon">ComingSoon</Link>
        </li>
        <li>
          <Link to="/styles">Styles</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
