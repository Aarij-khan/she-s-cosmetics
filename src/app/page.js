import React from 'react'
import Marquee from './componensts/marquee'
import Banner from './componensts/banner'
import DiagonalMarquee from './componensts/DiagonalMarquee'

function Page() {
  return (
    <div className=''>
      <Marquee/>
      <Banner/>

      <DiagonalMarquee/>
      <DiagonalMarquee deg={0}/>
    </div>
  )
}

export default Page