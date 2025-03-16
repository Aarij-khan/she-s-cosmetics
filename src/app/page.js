import React from 'react'
import Marquee from './componensts/marquee'
import Banner from './componensts/banner'
import DiagonalMarquee from './componensts/DiagonalMarquee'
import Line from './componensts/line'

function Page() {
  return (
    <div className='bg-white'>
      <Marquee/>
      <Banner/>
      <Line/>

      {/* <DiagonalMarquee/>
      <DiagonalMarquee deg={0}/> */}
    </div>
  )
}

export default Page