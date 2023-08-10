import React from 'react';
import { FaTruckMoving } from 'react-icons/fa';
import './nav.css';
const Nav = () => {
  return (
    <>
    <div className="free">
        <div className="icon"><FaTruckMoving /> </div>
        <p> FREE Shipping when shopping upto $1000</p>
    </div>
    </>
  );
}

export default Nav;