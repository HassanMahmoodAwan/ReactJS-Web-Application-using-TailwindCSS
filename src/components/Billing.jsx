import React from 'react'
import {apple, bill, google} from '../assets'
import styles, {layout} from '../style'

const Billing = () => (
  <section className={`${layout.sectionReverse}`}>
    {/* left part */}
    <div className={`${layout.sectionImgReverse}`}>
      <img
        src={bill}
        alt="bill-img"
        className={`h-[100%] w-[100%] relative z-[10]`}
      />

      {/* Puting some gradient */}
      <div
        className={`absolute rounded-full white__gradient w-[50%] h-[50%] top-0 -left-1/2`}
      />
      <div
        className={`absolute rounded-full pink__gradient w-[50%] h-[50%] bottom-0 -left-1/2`}
      />
    </div>

    {/* Right part */}
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        Easily Control your <br className={`sm:block hidden`} /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestias
        laudantium enim minus corrupti magni adipisci exercitationem ut
        perferendis est!Lorem
      </p>
      <div className="flex flex-row flex-1 flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple"
          className={`object-contain cursor-pointer w-[128px] h-[42px] mr-5`}
        />
        <img
          src={google}
          alt="google-app"
          className={`object-contain cursor-pointer w-[128px] h-[42px]`}
        />
      </div>
    </div>
  </section>
);


export default Billing















// import { apple, bill, google } from "../assets";
// import styles, { layout } from "../style";

// const Billing = () => (
//   <section id="product" className={layout.sectionReverse}>
//     <div className={layout.sectionImgReverse}>
//       <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

//       {/* gradient start */}
//       <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
//       <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
//       {/* gradient end */}
//     </div>

//     <div className={layout.sectionInfo}>
//       <h2 className={styles.heading2}>
//         Easily control your <br className="sm:block hidden" /> billing &
//         invoicing
//       </h2>
//       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//         Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
//         aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
//         placerat.
//       </p>

//       <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
//         <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
//         <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
//       </div>
//     </div>
//   </section>
// );

// export default Billing;
