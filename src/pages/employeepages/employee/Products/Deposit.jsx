import React from 'react'
import Sidebar from '../../../../components/employeeSidebar/Sidebar';
import im1 from '../ProductImages/ProductImage/FD.png'
import im2 from '../ProductImages/ProductImage/Fixed Deposit.png'
import im3 from '../ProductImages/ProductImage/rec.png'

import './Deposit.css';

export default function Deposit() {
  return (
    <>
    <Sidebar/>
    <section className='deposit-display'>
    <h2 className='tx'>Deposit</h2>
    
<div class="depositcard1">
<img src={im1} alt="im1" height="200px" width="230px" />
  <div class="depositcontainer1">
  <h4><b>Fixed Deposits (FD)</b></h4> 
    <a href="/FD" className='linkColor'> 
    <p>Know More</p>
    </a>
  </div>
</div>

<div class="depositcard2">
<img src={im2} alt="im1" height="200px" width="230px" />
  <div class="depositcontainer2">
  <h4><b>digital Fixed Deposit</b></h4> 
    <a href="/FixedDeposit" className='linkColor'> 
    <p>Know More</p>
    </a>
  </div>
</div>

<div class="depositcard3">
<img src={im3} alt="im1" height="200px" width="230px" />
  <div class="depositcontainer3">
  <h4><b>Recurrent Deposit(RD)</b></h4> 
    <a href="/RecurrentDeposit" className='linkColor'> 
    <p>Know More</p>
    </a> 
  </div>
</div>
<div className='para'>
<p>It is a long established fact that a reader will be distracted 
by the readable content of a page when looking at its layout. 
The point of using Lorem Ipsum is that it has a more-or-less 
normal distribution of letters, <p>as opposed to using 'Content here,
content here', making it look like readable English. Many desktop
publishing packages and web page editors now use Lorem Ipsum 
as their default model text, and </p>a search for 'lorem ipsum' 
will uncover many web sites still in their infancy. Various 
versions have evolved over the years, sometimes by accident, 
sometimes on purpose (injected humour and the like).</p>
</div>
</section>
    </>
  )
}
