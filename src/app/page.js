import React from 'react'
import Marquee from './componensts/marquee'
import Banner from './componensts/banner'
import DiagonalMarquee from './componensts/DiagonalMarquee'
import Line from './componensts/line'

function Page() {
  return (
    <div className=''>
      <Marquee/>
      <Banner/>

      {/* <DiagonalMarquee/>
      <DiagonalMarquee deg={0}/> */}
      <Line/>
    </div>
  )
}

export default Page