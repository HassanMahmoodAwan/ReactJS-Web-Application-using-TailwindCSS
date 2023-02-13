import {React, useState} from 'react';
import {logo, close, menu} from '../assets';
import {navLinks} from '../constants'

const Navbar = () => {
  // useSate for toggle b/w menu & close.
  const [Toggle, setToggle] = useState(true);



  return (
    <nav className={` w-full py-6 flex justify-between items-center navbar`}>
      {/*Logo*/}
      <img src={logo} alt="logo" className={`w-[120px] h-[35px]`} />

      {/* List for menu buttons */}
      <ul
        className={`list-none hidden sm:flex justify-end items-center flex-1`}
      >
        {/* For instantly returning we have () in func instead of {}*/}
        {navLinks.map((n, i) => (
          <li
            className={`font-poppins cursor-pointer text-[16px] font-normal ${
              i === navLinks.length - 1 ? "mr-0" : "mr-[20px]"
            }`}
            key=
            {n.id}
          >
            <a href={`${n.id}`}>{n.title}</a>
          </li>
        ))}
        
      </ul>

      {/* New UL for Our Mobile Applications */}
      <div className={`sm:hidden flex flex-1      justify-end items-center`}>
        <img
          src={Toggle ? menu : close}
          alt="hamBurger"
          className={`hamburger w-[28px] h-[28px] object-contain`}
          onClick={() => setToggle((prev) => !prev)}
        />
      
        {/* IF toggle then menu */}
        <div
          className={` sidebar                        ${Toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute rounded-xl right-0 top-20 mx-4 my-2 min-w-[140px] `}>
          {/* UL similar to upper UL */}
          <ul className='list-none flex flex-1 flex-col justify-end items-center '>
            {navLinks.map((n, i)=>(
              <li key={n.id} className={`font-poppins font-normal cursor-pointer text-[16px] 
              ${i === navLinks.length-1 ? 'mb-0' : 'mb-7'}`}>
                  <a href={`${n.id}`}>
                    {n.title}
                  </a>
              </li>
            ))}
          </ul>
        </div>
      </div> 
    </nav>
  );
}

export default Navbar
