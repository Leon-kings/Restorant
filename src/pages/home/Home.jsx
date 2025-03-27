import React from 'react'
import Hero from '../../components/hero/Hero'
import { Services } from '../services/Services'
import { About } from '../about/About'
import { FoodMenu } from '../menu/Menu'
import { Reservation } from '../reservation/Reservation'
import { Testimonial } from '../testimony/Testimony'
import { OurTeam } from '../team/Team'
import { Payment } from '../payment/Payment'

export default function Home() {
  return (
    <>
      <div className="w-full">
        <div className="w-full">
            <Hero/>
        </div>
        <div className="w-full">
            <Services/>
        </div>
        <div className="w-full">
            <About/>
        </div>
        <div className="w-full">
            <FoodMenu/>
        </div>
        <div className="w-full">
            <Reservation/>
        </div>
        <div className="w-full">
            <Testimonial/>
        </div>
        <div className="w-full">
            <OurTeam/>
        </div>
        {/* <Payment/> */}
      </div>
    </>
  )
}
