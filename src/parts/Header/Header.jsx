import React from 'react';
import {FiShoppingBag} from 'react-icons/fi';
import {BiUser} from 'react-icons/bi';
import {FiSearch} from 'react-icons/fi';
const Header = () => {
  return (
    <>
     <div className=''>
        <div className="[font-family:'Rajdhani',sans-serif] max-w-[3000] flex justify-between items-center z-[999] px-20 py-5 mx-auto">
          <h1 href="/" className="[font-family:'Rajdhani',sans-serif] font-bold text-[40px]  w-[99px] cursor-pointer">LOGO.</h1>
          <div>
            <ul className='flex items-center  gap-5 -left-[59px]  font-bold w-[38px] h-[20px]'>
              <li><a href='index.html' className='hover:text-[#2554d7] cursor-pointer'>Home</a></li>
              <li><a href='/' className='hover:text-[#2554d7] cursor-pointer'>Shop</a></li>
              <li><a href='/' className='hover:text-[#2554d7] cursor-pointer'>About</a></li>
              <li><a href='/' className='hover:text-[#2554d7] cursor-pointer'>Blog</a></li>
              <li><a href='/' className='hover:text-[#2554d7] cursor-pointer'>Features</a></li>
              <li><a href='/' className='hover:text-[#2554d7]cursor-pointer'>Contacts</a></li>
            </ul>
          </div>
          <div></div>
          <ul className='flex items-center gap-x-4'>
            <li><a href='/'><FiSearch /></a></li>
            <li><a href='/login'><BiUser /></a></li>
            <li><a href='/'><FiShoppingBag /></a></li>
          </ul>
        </div>
      </div> 

  {/*   <section className='flex items-center justify-between flex-row gap-5 z-[999] px-20 py-5 md:flex-col sm:flex-col'>
            <a href='/' className='no-underline text-black text-[25px] font-bold'>LOGO.</a>
            <div className='mx-[5px] my-0'>
                <ul className='flex items-center flex-row justify-between w-6/12 md:flex-col md:w-full sm:flex-col sm:w-full'>
                    <li className="x-2.5 my-0 [font-family:'Rajdhani',sans-serif] list-none no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]"><a href='index.html' className="[font-family:'Roboto Condensed',sans-serif] no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]">Home</a></li>
                    <li className="x-2.5 my-0 [font-family:'Rajdhani',sans-serif] list-none no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]"><a href='/' className="[font-family:'Roboto Condensed',sans-serif] no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]">Shop</a></li>
                    <li className="x-2.5 my-0 [font-family:'Rajdhani',sans-serif] list-none no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]"><a href='/' className="[font-family:'Roboto Condensed',sans-serif] no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]">About</a></li>
                    <li className="x-2.5 my-0 [font-family:'Rajdhani',sans-serif] list-none no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]"><a href='/' className="[font-family:'Roboto Condensed',sans-serif] no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]">Blog</a></li>
                    <li className="x-2.5 my-0 [font-family:'Rajdhani',sans-serif] list-none no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]"><a href='/' className="[font-family:'Roboto Condensed',sans-serif] no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]">Features</a></li>
                    <li className="x-2.5 my-0 [font-family:'Rajdhani',sans-serif] list-none no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]"><a href='/' className="[font-family:'Roboto Condensed',sans-serif] no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]">Contacts</a></li>           
                </ul>
            </div>

            <div className='mx-[5px] my-0'>
                <ul className='flex items-center flex-row justify-between w-6/12 md:flex-col md:w-full sm:flex-col sm:w-full'>
            
                    <li className="x-2.5 my-0 [font-family:'Rajdhani',sans-serif] list-none no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]"><a href='/' className="[font-family:'Roboto Condensed',sans-serif] no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]"><FiSearch/></a></li>
                    <li className="x-2.5 my-0 [font-family:'Rajdhani',sans-serif] list-none no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]"><a href='/login' className="[font-family:'Roboto Condensed',sans-serif] no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]"><BiUser/></a></li>
                    <li className="x-2.5 my-0 [font-family:'Rajdhani',sans-serif] list-none no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]"><a href='/' className="[font-family:'Roboto Condensed',sans-serif] no-underline text-[#040F16] text-base font-medium transition-[0.3s] duration-[ease] hover:text-[#088178]"><FiShoppingBag/></a></li>
                </ul>
            </div>
        </section> */} 
    </>

  );
}

export default Header;
