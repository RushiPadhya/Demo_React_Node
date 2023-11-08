import React from 'react'
import { CContainer,CRow,CCol,CFormCheck } from '@coreui/react'
import Logo from "./img/logo.png"
import BellIcon from './img/bell.png'
import UserImg from './img/userimg.png'
const Checkout = () => {
  return (
             <>
                    <CContainer fluid className='checkout-page'>
                        <CRow className='px-3 checkout-nav'>
                                <CCol className='checkout-logo'><img src={Logo} alt="logo"/></CCol>
                                <CCol className='checkout-user-details d-flex align-items-center justify-content-end '>
                                            <CRow xs={{ cols: 'auto' }} className='pe-4'>
                                                <CCol className='checkout-bell-icon d-flex align-items-center justify-content-center'><img src={BellIcon} alt="bellicon" height={30} width={30}/></CCol>
                                                <CCol className='checkout-user'><span><img src={UserImg} alt="userimg" height={50} width={50}/></span></CCol>         
                                            </CRow>  
                                </CCol>
                        </CRow>

                        {/* Checkout-content */}

                        <CRow className='checkout '>

                            <CCol>

                                    <CRow className='py-4'> 
                                        <CCol className='text-center'><h1>Checkout</h1></CCol>
                                    </CRow>

                            
                                     <CRow className="mt-4 justify-content-center checkout-form gap-4">

                                        {/* Left-part */}
                                                <CCol xs={4} className='account-info '>

                                                         {/* First Card */}
                                                       <CRow className='order-form '>
                                                           <CCol>
                                                                            <CRow>
                                                                            <CCol xs={10} className='d-flex align-items-center justify-content-start py-1'><h5>Account Information</h5></CCol>
                                                                            <CCol xs={2} className='step d-flex justify-content-center align-items-center py-1'>Step-1</CCol>
                                                                        </CRow>

                                                                        <CRow className='py-2'>
                                                                            <CCol xs={6} className='user-info-form'>
                                                                                <label htmlFor="Firstname">First Name*</label> <br />
                                                                                <input type="text" className='w-100 py-1'/>
                                                                            </CCol>
                                                                            <CCol xs={6} className='user-info-form'>
                                                                                <label htmlFor="Firstname">Last Name*</label> <br />
                                                                                <input type="text" className='w-100 py-1'/>
                                                                            </CCol>
                                                                        </CRow>

                                                                        <CRow className='py-2'> 
                                                                            <CCol xs={12} className='user-info-form'>
                                                                                <label htmlFor="Firstname">Email*</label> <br />
                                                                                <input type="text" className='w-100 py-1'/>
                                                                            </CCol>
                                                                        </CRow>

                                                                        <CRow className='py-2'> 
                                                                            <CCol xs={12} className='user-info-form'>
                                                                                <label htmlFor="Firstname">Cell phone number(we'll send you order update notification)*</label> <br />
                                                                                <input type="text" className='w-100 py-1'/>
                                                                            </CCol>
                                                                        </CRow>

                                                                        <CRow className='py-2'> 
                                                                            <CCol xs={12} className='user-info-form'>
                                                                                <label htmlFor="Firstname">Company name</label> <br />
                                                                                <input type="text" className='w-100 py-1'/>
                                                                            </CCol>
                                                                        </CRow>

                                                                        <CRow className='py-2'> 
                                                                            <CCol xs={12} className='user-info-form text-center'>
                                                                                <button type="submit">Submit</button>
                                                                            </CCol>
                                                                        </CRow>
                                                                    
                                                           </CCol>
                                                       </CRow>
                                                       {/* Second Card */}
                                                       <CRow className='other-details'>
                                                           <CCol>
                                                                     <CRow className='mt-4 py-3 other-details-bg  d-flex justify-content-center align-items-center'> 
                                                                            <CCol className='detail-title'><span>Shipping options</span></CCol>
                                                                            <CCol className='text-end detail-step'><span>Step-2</span></CCol>
                                                                     </CRow>
                                                           </CCol>
                                                       </CRow>
                                                     {/* Third Card */}
                                                       <CRow className='other-details'>
                                                           <CCol>
                                                                     <CRow className='mt-4 py-3 other-details-bg  d-flex justify-content-center align-items-center'> 
                                                                            <CCol className='detail-title'><span>Add-ons</span></CCol>
                                                                            <CCol className='text-end detail-step'><span>Step-3</span></CCol>
                                                                     </CRow>
                                                           </CCol>
                                                       </CRow>
                                                     {/* Fourth Card */}
                                                       <CRow className='other-details'>
                                                           <CCol>
                                                                     <CRow className='mt-4 py-3 other-details-bg  d-flex justify-content-center align-items-center'> 
                                                                            <CCol className='detail-title'><span>Payment</span></CCol>
                                                                            <CCol className='text-end detail-step'><span>Step-4</span></CCol>
                                                                     </CRow>
                                                           </CCol>
                                                       </CRow>

                                                    
                                                </CCol> 

                                        {/* Right-part */} 
                                               
                          <CCol xs={3} className='payment-info border py-2'>
                               
                                    <CRow>
                                        <CCol xs={12} className='detail-step'><span>Selected plan:</span></CCol>
                                    </CRow>

                                    <CRow>
                                        <CCol xs={12} className='plan d-flex justify-content-between align-items-center'>
                                            <h4>Team</h4>
                                            <span>Change Plan</span>
                                        </CCol>
                                    </CRow>

                                    <CRow>
                                        <CCol xs={12} className='detail-step'><span>Cost Overview</span></CCol>
                                    </CRow>

                                    <CRow >
                                        <CCol xs={11} className='mt-2 plan-details mx-auto d-flex justify-content-center flex-column' >
                                            <span>Monthly subscription :</span>
                                            <h5>$96/month</h5>
                                            <span>Billed at $1152/year</span><br />
                                            <span className='d-inline-block mt-4'>includes 3 users-$16 per additional</span>
                                            <CRow className='mt-1 need-users'>
                                                <CCol xs={8} className='py-2 other-details-bg'><span>How many Users do you need</span></CCol>
                                                <CCol xs={2} className='py-2 step d-flex justify-content-center'><span className='fs-6 text-white'>6</span></CCol>
                                            </CRow>
                                            <CRow>
                                                    <CCol xs={12} className='mt-2 mb-3 discount d-flex justify-content-end align-items-center'>  
                                                        <span>Next Discount At 13 Users</span>
                                                    </CCol>
                                            </CRow>
                                        </CCol>
                                    </CRow>

                                    <CRow>
                                        <CCol xs={12} className='add-on mt-3'><span>Selected add-on:</span></CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol xs={12}><CFormCheck id="flexCheckDefault" label="1 to 1 onboarding-$350 one Time(required)"/></CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol xs={12}><hr  className='w-50 mx-auto mt-4'/></CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol xs={10} className='d-flex justify-content-between align-items-center'>
                                               <span className='shipping'>Shipping</span>
                                               <span>$0.00</span>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol xs={10} className='d-flex justify-content-between align-items-center'>
                                               <span className='tax'>Tax</span>
                                               <span>$0.00</span>
                                        </CCol>
                                    </CRow>

                                    <CRow>
                                        <CCol xs={12} className='code mt-3'><span>Add discount code</span></CCol>
                                    </CRow>

                                    <CRow className='d-flex justify-content-center align-items-center mt-2'>
                                        <CCol xs={11} className='total-bill d-flex justify-content-between align-items-center py-2'>
                                            <h5>Total</h5>
                                            <h5>$1,502</h5>
                                        </CCol>
                                    </CRow>

                                  
                                    <CRow className='d-flex justify-content-center align-items-center mt-3 mb-2'>
                                        <CCol xs={11} className='renewal-date d-flex justify-content-between align-items-center py-2'>
                                            <span>Renewal Date : 07/20/24</span>
                                            <span>$1,152/year</span>
                                        </CCol>
                                    </CRow>
                                 
                          </CCol>
                 </CRow>                         
          </CCol>
     </CRow>
  </CContainer>  
</>
  )
}

export default Checkout