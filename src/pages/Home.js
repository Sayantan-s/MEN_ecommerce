import { Page,Button } from 'components'
import React from 'react'

const Home = () => {
    return (
       <Page>
         { /*<h1 className="font-extrabold text-9xl text-gray-100">
             AIR
    </h1> */}
          <div className="relative w-7/12">
            <img 
            className="object-cover"
            src="/cover.png" 
            alt="nike_banner"
           />
          </div>
          <div className="text-center max-w-xl">
             <h1 className="font-bold text-gray-800 text-4xl">
               Nike Jordan 'Why Not?' Zer0.4 PF
             </h1>
             <p className="text-center mx-auto mt-4">
               Speed is Russell Westbrook's not-so-secret weapon. 
               He out-hustles the competition, building momentum and muscling his way onto the highlight reel. 
               Cue the Jordan 'Why Not?' Zer0.4, the first to feature double-stacked Zoom in the forefoot.
             </p>
             <Button 
             type="primary"
             moreStyles="mt-6 mx-auto"
             >
                Buy Now!
             </Button>
          </div>
       </Page>
    )
}

export default Home
