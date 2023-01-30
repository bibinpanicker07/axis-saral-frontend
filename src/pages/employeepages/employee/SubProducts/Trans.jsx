import React from 'react'

import im0 from '../ProductImages/Banner Image/Transaction Card.png'
import im1 from '../ProductImages/ProductSub/Meal Card.png'
import im2 from '../ProductImages/ProductSub/Gift Card.png'
import im3 from '../ProductImages/ProductSub/Smart Pay Card.png'


import '../SubProducts/ProductPages.css';
import Sidebar from '../../../../components/employeeSidebar/Sidebar'
export default function Trans() {
  return (
    <>
    <Sidebar/>
    <div className='display-cont' >
          <div class="Banner-image">
              <img src={im0} alt="im1" height="300px"width="100%"/>
              <h2>Pre-Paid Card</h2>
          </div>
    </div>
    <div class="small-cont">
              <div>
              <div>
              <img src={im1}  alt="im1" height="100px"width="10%"/>
              <h2>Meal Card</h2>
              <p>Issued by corporate organizations Tax free Meal</p>
              </div>
              </div>
    </div>

    <div class="small-cont2">
              <div>
              <div>
              <img src={im2}  alt="im1" height="100px"width="16%"/>
              <h2>Gift Card</h2>
              <p>An Ideal gift for your dear one</p>
              </div>
              </div>
    </div>

    <div class="small-cont3">
              <div>
              <div>
              <img src={im3}  alt="im1" height="100px"width="45%"/>
              <h2>Smart Pay Card</h2>
              <p>Ideal way to disburse salaries / incentives </p>
              </div>
              </div>
    </div>
    </>
  )
}