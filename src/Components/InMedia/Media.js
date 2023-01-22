import React from 'react'
import Icon7 from '../../images/media/1-16.jpg';
import Icon8 from '../../images/media/1-17.jpg';
import Icon9 from '../../images/media/1-18.jpg';
import Icon10 from '../../images/media/1-19.jpg';
import Icon11 from '../../images/media/1-20.jpg';
import Icon12 from '../../images/media/1-21.jpg';




function Media() {
  return (
   <>
     <div class="containerM h-100 ">
      <div class="row align-items-center h-100">
        <div class="container rounded">
          <h1 class="text-centerM">Media In</h1>
          <div className='slider'>
            <div className="Logos"> 
              <img src={Icon7} alt=".." className="MediaImg shadow-3-strong" loading='lazy' />
              <img src={Icon8} alt=".." className="MediaImg shadow-3-strong" loading='lazy'  />
              <img src={Icon9} alt=".." className="MediaImg shadow-3-strong" loading='lazy' />
              <img src={Icon10} alt=".." className="MediaImg shadow-3-strong" loading='lazy' />
              <img src={Icon11} alt=".." className="MediaImg shadow-3-strong" loading='lazy'/>
              <img src={Icon12} alt=".." className="MediaImg shadow-3-strong" loading='lazy' />
              <img src={Icon7} alt=".." className="MediaImg shadow-3-strong" loading='lazy' />
              <img src={Icon8} alt=".." className="MediaImg shadow-3-strong" loading='lazy'  />
              <img src={Icon9} alt=".." className="MediaImg shadow-3-strong" loading='lazy' />
              <img src={Icon10} alt=".." className="MediaImg shadow-3-strong" loading='lazy' />
              <img src={Icon11} alt=".." className="MediaImg shadow-3-strong" loading='lazy'/>
              <img src={Icon12} alt=".." className="MediaImg shadow-3-strong" loading='lazy' />
            </div>  

             </div>
          </div>
        </div>
      </div>

   </>
  )
}

export default Media
