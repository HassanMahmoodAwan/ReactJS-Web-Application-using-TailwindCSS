import React from 'react'
import styles from './style'
// When many to import then we use curly brackets
import {Navbar, Hero, Stats, CTA, Clients, Footer, Billing, Business, CardDeal, Testimonials} from './components'

const App = () => {
  return (
    // main div makes overflow hidden means unwanted whitespaces will be remove when scrolling.
    <div
      id="get_started"
      className="bg-gradient-to-r from-slate-800  to-blue-800 ... w-full overflow-hidden"
    >
      {/* Froms a navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} text-white`}>
          <Navbar />
        </div>
      </div>

      {/* Hero or crousal section */}
      <div
        className={`bg-gradient-to-r from-slate-800  to-blue-800 ... ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth} text-white`}>
          <Hero />
        </div>
      </div>

      {/* other components */}
      <div
        className={`${styles.flexStart} ${styles.paddingX}bg-gradient-to-r from-slate-800  to-blue-800 ...`}
      >
        <div className={`${styles.boxWidth} text-white`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App
