import React from 'react'

import im0 from '../ProductImages/Banner Image/Personal & Business Loan.png'
import im1 from '../ProductImages/ProductSub/Minimal documentation.png'
import im2 from '../ProductImages/ProductSub/Minimum Rs. 50,000.png'
import im3 from '../ProductImages/ProductSub/Easy to Apply.png'

import '../SubProducts/ProductPages.css';
import Sidebar from '../../../../components/employeeSidebar/Sidebar'
export default function PersonalBusiness() {
  return (
    <>
    <Sidebar/>
    <div className='display-cont' >
          <div class="Banner-image">
              <img src={im0} alt="im1" height="300px"width="100%"/>
              <h2>Personal & Business Loan</h2>
          </div>
    </div>
    <div class="small-cont">
              <div>
              <div>
              <img src={im1}  alt="im1" height="100px"width="10%"/>
              <h2>Minimal documentation</h2>
              <p>1.5% to 2% of loan amount + GST</p>
              </div>
              </div>
    </div>

    <div class="small-cont2">
              <div>
              <div>
              <img src={im2}  alt="im1" height="100px"width="16%"/>
              <h2>Minimum Rs. 50,000 </h2>
              <p>minimum age of 21 years</p>
              </div>
              </div>
    </div>

    <div class="small-cont3">
              <div>
              <div>
              <img src={im3}  alt="im1" height="100px"width="45%"/>
              <h2>Easy to Apply</h2>
              <p> collateral-free EMI-based Business Loans</p>
              </div>
              </div>
    </div>
    </>
  )
}