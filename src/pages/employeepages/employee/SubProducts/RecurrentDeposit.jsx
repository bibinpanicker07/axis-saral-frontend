import React from 'react'

import im0 from '../ProductImages/Banner Image/Recurrent Deposit(RD).png'
import im1 from '../ProductImages/ProductSub/Minimum Investm.png'
import im2 from '../ProductImages/ProductSub/Flexible Tenure.png'
import im3 from '../ProductImages/ProductSub/Save Regularly.png'


import '../SubProducts/ProductPages.css';
import Sidebar from '../../../../components/employeeSidebar/Sidebar'
export default function RecurrentDeposit() {
  return (
    <>
    <Sidebar/>
    <div className='display-cont' >
          <div class="Banner-image">
              <img src={im0} alt="im1" height="300px"width="100%"/>
              <h2>Recurring Deposit (RD)</h2>
          </div>
    </div>
    <div class="small-cont">
              <div>
              <div>
              <img src={im1}  alt="im1" height="100px"width="10%"/>
              <h2>Minimum Investment </h2>
              <p>you can start of with Rs.500</p>
              </div>
              </div>
    </div>

    <div class="small-cont2">
              <div>
              <div>
              <img src={im2}  alt="im1" height="100px"width="16%"/>
              <h2>Flexible Tenure</h2>
              <p>Minimum 6 months only</p>
              </div>
              </div>
    </div>

    <div class="small-cont3">
              <div>
              <div>
              <img src={im3}  alt="im1" height="100px"width="45%"/>
              <h2>Save Regularly</h2>
              <p>The Simplest Way of Building Wealth</p>
              </div>
              </div>
    </div>
    </>
  )
}