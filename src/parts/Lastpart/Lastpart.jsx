import React from 'react';
import { GrTwitter } from 'react-icons/gr'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Lastpart = () => {
  return (
    <section>
    <div className="min-h-lvh bg-[#040F16] text-[#FFF]">
        <div className="flex flex-row flex-wrap gap-5 px-12 py-10">
            <div className="w-[256px]">
                <h1 className="[font-family:'Rajdhani-Bold', Helvetica] mb-5 text-4xl font-bold leading-10">LOGO.</h1>
                <p className="[font-family: 'Open_Sans-Regular', Helvetica] text-base font-normal leading-8 text-[#ffffffcc]">Be the first who learns about our
                    great promotions!</p>
                <h3 className="[font-family:'Rajdhani-Bold', Helvetica] font-semibold leading-7 mt-14">Follow us</h3>
                <div className="flex mt-5">
                    <a href="/"><GrTwitter></GrTwitter></a>
                    <a href="/"><FaFacebookF></FaFacebookF></a>
                    <a href="/"><FaInstagram></FaInstagram></a>
                </div>
            </div>
            <div className='flex flex-row flex-1 gap-5 justify-between w-6/12'>
                <div className="flex flex-col gap-2.5">
                    <h2 className="not-italic text-xl leading-7 mb-5 font-semibold [font-family:'Rajdhani',sans-serif]">Products</h2>

                    <p className="[font-family: 'Open_Sans-Regular', Helvetica] font-normal text-base leading-8 text-[#ffffffcc]">New Arrival</p>
                    <p className="[font-family: 'Open_Sans-Regular', Helvetica] font-normal text-base leading-8 text-[#ffffffcc]">Best Seller</p>
                    <p className="[font-family: 'Open_Sans-Regular', Helvetica] font-normal text-base leading-8 text-[#ffffffcc]">On Sale</p>
                    <p className="[font-family: 'Open_Sans-Regular', Helvetica] font-normal text-base leading-8 text-[#ffffffcc]">All Collection</p>
                </div>
                <div className="flex flex-col gap-2.5">
                    <h2 className="not-italic text-xl leading-7 mb-5 font-semibold [font-family:'Rajdhani',sans-serif]">CATEGORY</h2>

                    <p className="[font-family: 'Open_Sans-Regular', Helvetica] font-normal text-base leading-8 text-[#ffffffcc]">Barbells</p>
                    <p className="[font-family: 'Open_Sans-Regular', Helvetica] font-normal text-base leading-8 text-[#ffffffcc]">Plates</p>
                    <p className="[font-family: 'Open_Sans-Regular', Helvetica] font-normal text-base leading-8 text-[#ffffffcc]">Benches</p>
                    <p className="[font-family: 'Open_Sans-Regular', Helvetica] font-normal text-base leading-8 text-[#ffffffcc]">Appareal</p>
                    <p className="[font-family: 'Open_Sans-Regular', Helvetica] font-normal text-base leading-8 text-[#ffffffcc]">Straps & Supports</p>
                </div>
                <div className="flex flex-col gap-2.5">
                    <h2 className="not-italic text-xl leading-7 mb-5 font-semibold [font-family:'Rajdhani',sans-serif]">Info</h2>

                    <p className="[font-family: 'Open_Sans-Regular', Helvetica] font-normal text-base leading-8 text-[#ffffffcc]">About</p>
                    <p className="[font-family: 'Open_Sans-Regular', Helvetica] font-normal text-base leading-8 text-[#ffffffcc]">Blog</p>
                    <p className="[font-family: 'Open_Sans-Regular', Helvetica] font-normal text-base leading-8 text-[#ffffffcc]">Feature</p>
                    <p className="[font-family: 'Open_Sans-Regular', Helvetica] font-normal text-base leading-8 text-[#ffffffcc]">Store Location</p>
                    <p className="[font-family: 'Open_Sans-Regular', Helvetica] font-normal text-base leading-8 text-[#ffffffcc]">Terms & Conditions</p>
                    <p className="[font-family: 'Open_Sans-Regular', Helvetica] font-normal text-base leading-8 text-[#ffffffcc]">Privacy Policy </p>
                </div>
            </div>
            <div className="w-[256px] ">
                <h2 className="text-xl [font-family:'Rajdhani-Bold', Helvetica] not-italic mb-5 leading-7 font-semibold">SUBSCRIBE</h2>

                <p className="[font-family:'Open_Sans-Regular', Helvetica] font-normal text-base leading-8 text-[#ffffffcc] ">Subscribe our newsletter and get
                    discount 30% off</p>
                <div className="[font-family:'Rajdhani-Bold', Helvetica] mt-14 flex font-bold w-72 h-12 border-2 border-white bg-[#2554D7]">
                    <input type="text" className='w-3/5 text-white font-semibold bg-[#040F16] pl-5' placeholder="Enter your email..." /><button className='text-center w-auto m-auto '> Sign Up</button>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default Lastpart;
