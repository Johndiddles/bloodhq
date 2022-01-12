import React from 'react';
import { FaFacebookF , FaInstagram, FaTwitter} from "react-icons/fa";
import './footer.styles.css';
export default function Footer() {
    return (
      <div className='p-4 text-white footer-wrapper align-items-center align-items-md-around '>
          <div className='flex-column flex-md-row d-flex justify-content-around'>
                <div className="subscription">
                    <p>Subscribe to our Newsletter</p>
                    <div class="input-group">
                        <div className="form-outline">
                            <input type="search" id="form1" className="form-control" />
                        </div>
                        <button type="button" className="btn btn-danger h-100 subscribe-btn">
                            Subscribe
                        </button>
                        </div>
                </div>
                <div className="py-5 py-md-0">
                    <p className="">Connect with Us</p>
                    <div className='flex-row d-flex justify-content-md-between'>
                    <div className='icon w-auto mx-2'><FaFacebookF/></div>
                    <div className='icon w-auto mx-2'><FaInstagram/></div> 
                    <div className='icon w-auto mx-2'><FaTwitter /></div> 
                    </div>
                </div>
                <div className='d-flex flex-column'>
                    <div  >
                            <h4 className='text-white align-self-start'>Blood<span className="text-danger">HQ</span></h4> 
                        </div>
                        <p>info@bloodHq.com</p>
                </div>
          </div>

            <div className='pt-2 copy justify-content-start d-flex border-top-light'>
            <p >2021 &#169; Copyright All right reserved</p>
            </div>
      </div>
    )
}
