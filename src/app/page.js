'use client'
import Image from 'next/image'
// import { useEffect } from 'react';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery'


  
export default function Home() {
    $(document).ready(function(){
      $('.read-more').click(function(){
        $(this).hide();
        $('.read-less, .hiden-professer-list').show();
        // $('.read')
      })
      $('.read-less').click(function(){
        $('.read-less, .hiden-professer-list').hide();
        $('.read-more').show();
      })
    })
  return (<>
      <div className='banner'>
  <div className='container-fluid px-0'>
    <div className='banner-container'>
    
    <div className='container-fluid px-0 banner_text '>
    <div className='container p-lg-5 p-2 bannerText'>
      <h2 className='my-4'>Help line center</h2>
      <p className='mb-2'>Cell - 1800000123</p>
      <p>Initialize Bootstrap Components:<br/>
If you are using certain Bootstrap components that require JavaScript initialization (e.g., modals, tooltips), make sure to initialize them. You can use the useEffect hook to run code after the component has mounted, which is a good place to initialize Bootstrap components:</p>
<button className='btn my-4'>Call Now</button>
    </div>
    </div>
    </div>
  </div>
</div>

{/* corona main section */}

<div className='container covid-main-section mt-5'>
    <div className='row align-items-center justify-content-center text-center'>
      <div className='col-12 col-lg-4 mt-lg-0 mt-4'>
        <div className='image-covid'>
        <Image src="/images/p-3.jpg" className="covid_image text-center" width='300' height='300'/>
        </div>
        <h2 className='my-2'>Emergency</h2>
      </div>
      <div className='col-12 col-lg-4 mt-lg-0 mt-4'>
        <div className='image-covid'>
        <Image src="/images/p-2.jpg" className="covid_image text-center" width='300' height='300'/>
        </div>
        <h2 className='my-2'>New Patient</h2>
      </div>
      <div className='col-12 col-lg-4 mt-lg-0 mt-4'>
        <div className='image-covid'>
        <Image src="/images/p-3.jpg" className="covid_image text-center" width='300' height='300'/>
        </div>
        <h2 className='my-2'>Old Patient</h2>
      </div>
    </div>
</div>

{/* meet our professors */}
<div className='container professor_blk mt-5'>
  <h1 className='fw-bold my-lg-5 my-2'>Our Professors</h1>
  <div className='row align-items-center my-4'>
    <div className='col-12 col-lg-4'>
      <Image src="/images/d-1.jpg" className='dt-image' width='300' height='300'/>
    </div>
    <div className='col-12 col-lg-8'>
      <h2 className='my-2'>Dr. Rajendra Sen</h2>
      <p>You can use CSS Flexbox to center an image. Wrap the image in a container and apply Flexbox properties to center it both horizontally and vertically. You can use CSS Flexbox to center an image. Wrap the image in a container and apply Flexbox properties to center it both horizontally and vertically.</p>
      <p>
      You can use CSS Flexbox to center an image. Wrap the image in a container and apply Flexbox properties to center it both horizontally and vertically. You can use CSS Flexbox to center an image. Wrap the image in a container and apply Flexbox properties to center it both horizontally and vertically.
      </p>
      <p className='mt-2 '>Meet Every <span className='fw-bold'>Saterday and Sunday (10.00 - 4.00)</span></p>
    </div>
    
  </div>
  <div className='row align-items-center my-4'>
    <div className='col-12 col-lg-4 order-lg-1 order-0'>
      <Image src="/images/d-1.jpg" className='dt-image' width='300' height='300'/>
    </div>
    <div className='col-12 col-lg-8 order-lg-0 order-1'>
      <h2 className='my-2'>Dr. Rajendra Sen</h2>
      <p>You can use CSS Flexbox to center an image. Wrap the image in a container and apply Flexbox properties to center it both horizontally and vertically. You can use CSS Flexbox to center an image. Wrap the image in a container and apply Flexbox properties to center it both horizontally and vertically.</p>
      <p>
      You can use CSS Flexbox to center an image. Wrap the image in a container and apply Flexbox properties to center it both horizontally and vertically. You can use CSS Flexbox to center an image. Wrap the image in a container and apply Flexbox properties to center it both horizontally and vertically.
      </p>
      <p className='mt-2'>Meet Every <span className='fw-bold'>Monday - Friday (10.00 - 4.00)</span></p>
    </div>
    
  </div>
  
  <div className='hiden-professer-list'>
  <div className='row align-items-center my-4'>
    <div className='col-12 col-lg-4 order-lg-0 order-0'>
      <Image src="/images/d-1.jpg" className='dt-image' width='300' height='300'/>
    </div>
    <div className='col-12 col-lg-8 order-lg-1 order-1'>
      <h2 className='my-2'>Dr. Rajendra Sen</h2>
      <p>You can use CSS Flexbox to center an image. Wrap the image in a container and apply Flexbox properties to center it both horizontally and vertically. You can use CSS Flexbox to center an image. Wrap the image in a container and apply Flexbox properties to center it both horizontally and vertically.</p>
      <p>
      You can use CSS Flexbox to center an image. Wrap the image in a container and apply Flexbox properties to center it both horizontally and vertically. You can use CSS Flexbox to center an image. Wrap the image in a container and apply Flexbox properties to center it both horizontally and vertically.
      </p>
      <p className='mt-2'>Meet Every <span className='fw-bold'>Monday - Friday (10.00 - 4.00)</span></p>
    </div>
    
  </div>
  <div className='row align-items-center my-4'>
    <div className='col-12 col-lg-4 order-lg-1 order-0'>
      <Image src="/images/d-1.jpg" className='dt-image' width='300' height='300'/>
    </div>
    <div className='col-12 col-lg-8 order-lg-0 order-1'>
      <h2 className='my-2'>Dr. Rajendra Sen</h2>
      <p>You can use CSS Flexbox to center an image. Wrap the image in a container and apply Flexbox properties to center it both horizontally and vertically. You can use CSS Flexbox to center an image. Wrap the image in a container and apply Flexbox properties to center it both horizontally and vertically.</p>
      <p>
      You can use CSS Flexbox to center an image. Wrap the image in a container and apply Flexbox properties to center it both horizontally and vertically. You can use CSS Flexbox to center an image. Wrap the image in a container and apply Flexbox properties to center it both horizontally and vertically.
      </p>
      <p className='mt-2'>Meet Every <span className='fw-bold'>Monday - Friday (10.00 - 4.00)</span></p>
    </div>
    
  </div>
  </div>
  <div className='text-center'>
    <button className='btn my-4 bg-danger read-more'>Read More</button>
    <button className='btn my-4 bg-danger read-less'>Read Less</button>
  </div>
</div>

{/* information section */}
<div className='information-blk'>
  <div className='container mt-4'>
    <h1 className='info-data text-center text-light fw-bold'>Information</h1>
    <form className='mt-4'>
    <div className='row'>
      <div className="mb-3 col-12 col-lg-6">
        <label for="f-1" className="form-label">First Name</label>
        <input type="text" className="form-control" id="f-1" placeholder="Enter Your First Name"/>
      </div>
      <div className="mb-3 col-12 col-lg-6">
        <label for="f-2" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="f-2" placeholder="Enter Your Last Name"/>
      </div>
      <div className="mb-3 col-12 col-lg-6">
        <label for="f-3" className="form-label">Phone Number</label>
        <input type="Tel" className="form-control" id="f-3" placeholder="Enter Your Phone Number"/>
      </div>
      <div className="mb-3 col-12 col-lg-6">
        <label for="f-4" className="form-label">Pin Code</label>
        <input type="Tel" className="form-control" id="f-4" placeholder="Enter Your Pin Code"/>
      </div>
      <div className="mb-3 col-12">
        <label for="f-5" className="form-label">Gender</label>
        <div className='d-flex'>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="cb-1"/>
          <label className="form-check-label" for="cb-1">
           Male
          </label>
        </div>
        <div className="form-check ms-4">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="cb-2"/>
          <label className="form-check-label" for="cb-2">
            Female
          </label>
        </div>
        <div className="form-check ms-4">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="cb-3"/>
          <label className="form-check-label" for="cb-3">
            Others
          </label>
        </div>
        </div>
      </div>
      <div className='text-center'>
        <button className='btn mt-4 bg-danger'>Submit</button>
      </div>
    </div>
    </form>
  </div>
</div>
   </>
  )
}
