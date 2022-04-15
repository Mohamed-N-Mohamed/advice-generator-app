import React from 'react'

//images
import iconDice from '../assets/images/icon-dice.svg'
import patternDividerDesktop from '../assets/images/pattern-divider-desktop.svg'
import patternDividerMobile from '../assets/images/pattern-divider-mobile.svg'

export default function Home() {
  return (
    <div className='container'>
      <div className="advice-card p-2 mt-32 w-4/5 h-72 rounded-lg bg-Grayish-Blue mx-auto font-mono md:w-1/2 md:h-60">
        <div className="text-center mt-4 pb-4 ">
          <h5 className='text-Neon-Green text-sm'>ADVICE # 117</h5>
        </div>

        <div className="quote text-center p-2">
          <p className='px-2 text-Light-Cyan text-sm md:text-lg'>it is easy to sit up and take notice, what's difficult is getting up and taking action.</p>
        </div>

    <div class="relative flex py-3 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400"># #
        {/* <img src={patternDividerMobile} alt="" /> */}
      </span>
      <div class="flex-grow border-t border-gray-400"></div>
  </div>

  <div className="generate new quote w-1/2 mx-auto md:w-80">
          {/* <div className="w-2/4 rounded-full bg-red-200 h-4">
          <img src={iconDice} alt="" />
          </div> */}

          <button className='p-2 bg-Neon-Green rounded-lg text-sm md:w-full md:p-3'>Generate new quote</button>

        </div>

        </div>

     

    </div>

   
  )
}
