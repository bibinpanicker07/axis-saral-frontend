import React from 'react'

import im0 from '../ProductImages/Banner Image/HomeLoan.png'
import im1 from '../ProductImages/ProductSub/Top-Up Home Loan.png'
import im2 from '../ProductImages/ProductSub/Fast Forward Home Loan.png'
import im3 from '../ProductImages/ProductSub/QuikPay Home Loan.png'


import '../SubProducts/ProductPages.css';
import Sidebar from '../../../../components/employeeSidebar/Sidebar'
export default function HomeLoan() {
  return (
    <>
    <Sidebar/>
    <div className='display-cont' >
          <div class="Banner-image">
              <img src={im0} alt="im1" height="300px"width="100%"/>
              <h2>Home Loan</h2>
          </div>
    </div>
    <div class="small-cont">
              <div>
              <div>
              <img src={im1}  alt="im1" height="100px"width="10%"/>
              <h2>Top-Up Home Loan</h2>
              <p>Current loan Top-Up</p>
              </div>
              </div>
    </div>

    <div class="small-cont2">
              <div>
              <div>
              <img src={im2}  alt="im1" height="100px"width="16%"/>
              <h2>Fast Forward Home Loan</h2>
              <p>No, Extra Cost</p>
              </div>
              </div>
    </div>

    <div class="small-cont3">
              <div>
              <div>
              <img src={im3}  alt="im1" height="100px"width="45%"/>
              <h2>QuikPay Home Loan</h2>
              <p>Reducing Monthly Installment</p>
              </div>
              </div>
    </div>
    </>
  )
}