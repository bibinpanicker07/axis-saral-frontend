import React from 'react'

import im0 from '../ProductImages/im1.png'
import im1 from '../ProductImages/ProductSub/Digital Fixed Deposit.png'
import im2 from '../ProductImages/ProductSub/Tax-Saver Fixed Deposit.png'
import im3 from '../ProductImages/ProductSub/Fixed Deposit Plus.png'


import '../SubProducts/ProductPages.css';
import Sidebar from '../../../../components/employeeSidebar/Sidebar'
export default function FD() {
  return (
    <>
    <Sidebar/>
    <div className='display-cont' >
          <div class="Banner-image">
              <img src={im0} alt="im1" height="300px"width="100%"/>
              <h2>Fixed Deposits (FD)</h2>
          </div>
    </div>
    <div class="small-cont">
              <div>
              <div>
              <img src={im1}  alt="im1" height="100px"width="10%"/>
              <h2>Digital Fixed Deposit</h2>
              <p>Open FD with KYC without documentation</p>
              </div>
              </div>
    </div>

    <div class="small-cont2">
              <div>
              <div>
              <img src={im2}  alt="im1" height="100px"width="16%"/>
              <h2>Tax-Saver Fixed Deposit</h2>
              <p>Save money for your future with tax benefits</p>
              </div>
              </div>
    </div>

    <div class="small-cont3">
              <div>
              <div>
              <img src={im3}  alt="im1" height="100px"width="45%"/>
              <h2>Fixed Deposit Plus</h2>
              <p>Earn higher rate of interest FDs</p>
              </div>
              </div>
    </div>
    </>
  )
}