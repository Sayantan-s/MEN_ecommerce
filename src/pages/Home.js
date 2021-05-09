import { Page,Button } from 'components'
import React from 'react'

const Home = () => {
    return (
       <Page className="relative">
         <div className="flex flex-col place-items-center h-full">
            <div className="relative w-7/12 mx-auto">
               <img 
                  className="object-cover"
                  src="/cover.png" 
                  alt="nike_banner"
               />
            </div>
            <div className="text-center max-w-2xl mx-auto mt-4">
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
            <div className="flex justify-between absolute w-full top-1/2">
               <Button moreStyles="shadow p-2 rounded-full w-14 h-14 flex justify-center items-center">
                  <svg className="w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M15.5 19L8.5 12L15.5 5" stroke="#200E32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </Button>
               <Button moreStyles="shadow p-2 rounded-full w-14 h-14 flex justify-center items-center">
                  <svg className="w-8 text-gray-400 stroke-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M8.5 5L15.5 12L8.5 19" stroke="#200E32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </Button>
            </div>
         </div>
       </Page>
    )
}

export default Home
