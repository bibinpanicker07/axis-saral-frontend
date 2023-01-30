import React from 'react'
import Sidebar from '../../../../components/employeeSidebar/Sidebar'

import im0 from '../ProductImages/Banner Image/SalaryAccount.png'
import im1 from '../ProductImages/ProductSub/ULTIMA Burgundy.png'
import im2 from '../ProductImages/ProductSub/ULTIMA Easy.png'
import im3 from '../ProductImages/ProductSub/ULTIMA Liberty.png'


import '../SubProducts/ProductPages.css';
export default function SalaryAccount() {
  return (
    <>
    <Sidebar/>
    <div className='display-cont' >
          <div class="Banner-image">
              <img src={im0} alt="im1" height="300px"width="100%"/>
              <h2>Salary Account</h2>
          </div>
    </div>
    <div class="small-cont">
              <div>
              <div>
              <img src={im1}  alt="im1" height="100px"width="10%"/>
              <h2>ULTIMA Burgundy</h2>
              <p>Digital Salary Account</p>
              </div>
              </div>
    </div>

    <div class="small-cont2">
              <div>
              <div>
              <img src={im2}  alt="im1" height="100px"width="16%"/>
              <h2>ULTIMA Easy </h2>
              <p>Access Salary Account</p>
              </div>
              </div>
    </div>

    <div class="small-cont3">
              <div>
              <div>
              <img src={im3}  alt="im1" height="100px"width="45%"/>
              <h2>ULTIMA Liberty</h2>
              <p>Digital Saving Account</p>
              </div>
              </div>
    </div>
    </>
  )
}