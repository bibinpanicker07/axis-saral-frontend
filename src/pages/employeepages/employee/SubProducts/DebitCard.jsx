import React from 'react'

import im0 from '../ProductImages/Banner Image/Deb Card.png'
import im1 from '../ProductImages/ProductSub/E-Debit Card.png'
import im2 from '../ProductImages/ProductSub/Liberty Debit Card.png'
import im3 from '../ProductImages/ProductSub/Burgundy Debit Card.png'


import '../SubProducts/ProductPages.css';
import Sidebar from '../../../../components/employeeSidebar/Sidebar'
export default function DebitCard() {
  return (
    <>
    <Sidebar/>
    <div className='display-cont' >
          <div class="Banner-image">
              <img src={im0} alt="im1" height="300px"width="100%"/>
              <h2>Debit Card</h2>
          </div>
    </div>
    <div class="small-cont">
              <div>
              <div>
              <img src={im1}  alt="im1" height="100px"width="10%"/>
              <h2>E-Debit Card</h2>
              <p>Daily cash withdrawal & purchase</p>
              </div>
              </div>
    </div>

    <div class="small-cont2">
              <div>
              <div>
              <img src={im2}  alt="im1" height="100px"width="16%"/>
              <h2>Liberty Debit Card</h2>
              <p>Daily cash withdrawal limit of Rs. 50,000</p>
              </div>
              </div>
    </div>

    <div class="small-cont3">
              <div>
              <div>
              <img src={im3}  alt="im1" height="100px"width="45%"/>
              <h2>Burgundy Debit Card</h2>
              <p>limit of Rs. 3 lakh to Rs. 6 lakh</p>
              </div>
              </div>
    </div>
    </>
  )
}