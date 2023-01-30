import React from 'react'
import Sidebar from '../../../../components/employeeSidebar/Sidebar'
import im1 from '../ProductImages/ProductImage/Debit card.png'
import im2 from '../ProductImages/ProductImage/Credit card.png'
import im3 from '../ProductImages/ProductImage/Transit Cards.png'
import './Cards.css'

export default function Cards() {
  return (
    <>
    <Sidebar/>
    <section className='cards'>
    <h2 className='tx'>Cards</h2>
    
<div class="card">
<img src={im1} alt="im1" height="200px" width="230px" />
  <div class="container">
    <h4><b>Debit Card</b></h4> 
    <a href="/DebitCard" className='linkColor'> 
    <p>Know More</p>
    </a>
  </div>
</div>

<div class="card1">
<img src={im2} alt="im1" height="200px" width="230px" />
  <div class="container1">
  <h4><b>Credit Card</b></h4> 
    <a href="/CreditCard" className='linkColor'> 
    <p>Know More</p>
    </a>
  </div>
</div>

<div class="card2">
<img src={im3} alt="im1" height="200px" width="230px" />
  <div class="container2">
  <h4><b>Transaction Card</b></h4> 
    <a href="/Trans" className='linkColor'> 
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
