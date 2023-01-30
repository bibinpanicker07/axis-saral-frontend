import React from 'react'

import im0 from '../ProductImages/Banner Image/DFD.png'
import im1 from '../ProductImages/ProductSub/Open a Full KYC Fixed.png'
import im2 from '../ProductImages/ProductSub/Open FD online.png'
import im3 from '../ProductImages/ProductSub/No penalty on pre-mature.png'


import '../SubProducts/ProductPages.css';
import Sidebar from '../../../../components/employeeSidebar/Sidebar'
export default function FixedDeposit() {
  return (
    <>
    <Sidebar/>
    <div className='display-cont' >
          <div class="Banner-image">
              <img src={im0} alt="im1" height="300px"width="100%"/>
              <h2>Digital Fixed Deposit</h2>
          </div>
    </div>
    <div class="small-cont">
              <div>
              <div>
              <img src={im1}  alt="im1" height="100px"width="10%"/>
              <h2>Open a Full KYC Fixed</h2>
              <p>Deposit within minutes</p>
              </div>
              </div>
    </div>

    <div class="small-cont2">
              <div>
              <div>
              <img src={im2}  alt="im1" height="100px"width="16%"/>
              <h2>Open FD online </h2>
              <p>without any bank savings account</p>
              </div>
              </div>
    </div>

    <div class="small-cont3">
              <div>
              <div>
              <img src={im3}  alt="im1" height="100px"width="45%"/>
              <h2>No penalty on pre-mature</h2>
              <p>easy FD withdrawal</p>
              </div>
              </div>
    </div>
    </>
  )
}