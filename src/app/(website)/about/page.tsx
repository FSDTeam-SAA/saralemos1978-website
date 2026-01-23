import AboutBrokerage from '@/components/website/about/AboutBrokerage'
import AboutFeatured from '@/components/website/about/AboutFeatured'
import AboutHero from '@/components/website/about/AboutHero'
import AboutHolmes from '@/components/website/about/AboutHolmes'
import AboutWhyWorkUs from '@/components/website/about/AboutWhyWorkUs'
import CharterInThailand from '@/components/website/about/CharterInThailand'
import HowLimePitch from '@/components/website/about/HowLimePitch'
import StillHaveAQuestions from '@/components/website/about/StillHaveAQuestions'
import HaveAQuestion from '@/components/website/home/HaveAQuestion'
import React from 'react'

const page = () => {
  return (
    <>
     <AboutHero />
     <AboutHolmes />
     <AboutBrokerage />
     <AboutWhyWorkUs />
     <AboutFeatured />
     <CharterInThailand />
     <HowLimePitch />
     {/* <StillHaveAQuestions /> */}
      <HaveAQuestion />


    </>
  )
}

export default page