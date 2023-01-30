import React from 'react'
import im1 from '../ProductImages/ProductImage/Saving Account.png'
import im2 from '../ProductImages//ProductImage/Current Account.png'
import im3 from '../ProductImages//ProductImage/Salary Account.png'

import './Accounts.css';
import Sidebar from '../../../../components/employeeSidebar/Sidebar';

export default function Accounts() {
  return (
    <>
    <Sidebar/>
    <section className='accounts-display'>
    <h2 className='tx'>Account</h2>
    
<div class="accountscard1">
<img src={im1} alt="im1" height="200px" width="260px" />
  <div class="accountcontainer1">
    <h4><b>Saving Account</b></h4>
    <a href="/SavingAccount" className='linkColor'> 
    <p>Know More</p>
    </a> 
  </div>
</div>

<div class="accountscard2">
<img src={im2} alt="im1" height="200px" width="230px" />
  <div class="accountcontainer2">
    <h4><b>Current Account</b></h4> 
    <a href="/CurrentAccount" className='linkColor'> 
    <p>Know More</p>
    </a> 
  </div>
</div>

<div class="accountscard3">
<img src={im3} alt="im1" height="200px" width="230px" />
  <div class="accountcontainer3">
    <h4><b>Salary Account</b></h4> 
    <a href="/SalaryAccount" className='linkColor'> 
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
