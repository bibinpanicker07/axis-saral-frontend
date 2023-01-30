import React from 'react'
import Sidebar from '../../../../components/employeeSidebar/Sidebar'
import im1 from '../ProductImages/ProductImage/HouseLoan.png'
import im2 from '../ProductImages/ProductImage/Busines-Personal.png'
import im3 from '../ProductImages/ProductImage/CarLoan.png'
import './Loan.css'
export default function Loan() {
  return (
    
      <>
      <Sidebar/>
      <section className='loan'>
      <h2 className='tx'>Loan</h2>
      
  <div class="card">
  <img src={im1} alt="im1" height="200px" width="230px" />
    <div class="container">
    <h4><b>Home Loan</b></h4> 
      <a href="/HomeLoan" className='linkColor'> 
      <p>Know More</p>
      </a>
    </div>
  </div>
  
  <div class="card1">
  <img src={im2} alt="im1" height="200px" width="230px" />
    <div class="container1">
    <h4><b>Personal & Business Loan</b></h4> 
      <a href="/PersonalBusiness" className='linkColor'> 
      <p>Know More</p>
      </a>
    </div>
  </div>
  
  <div class="card2">
  <img src={im3} alt="im1" height="200px" width="230px" />
    <div class="container2">
    <h4><b>Car Loan</b></h4> 
      <a href="/CarLoan" className='linkColor'> 
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
