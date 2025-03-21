import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
       </div>
       <div className='my-10 flex flex-col md:flex-row gap-16'>
             <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
              <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quis necessitatibus quia ipsum, quibusdam adipisci cum voluptatibus accusantium incidunt architecto alias soluta officiis laborum magni placeat eaque asperiores! Accusantium quos quaerat quis, consequatur commodi nulla nemo impedit ad, natus suscipit assumenda ipsa? Ad, nisi facere.</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, culpa perferendis dolor fugit distinctio voluptates consequuntur minima harum unde laudantium at natus tempora neque optio nemo pariatur nihil rerum magni eligendi repudiandae. In voluptatum aut aliquam facere! Dicta, dolorem repudiandae?</p>
                  <b className='text-gray-800'>Our Mission</b>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nesciunt aperiam expedita et at deleniti reiciendis impedit, nisi ratione inventore culpa amet asperiores, aliquid minima temporibus tempore quae corporis dolor.</p>
              </div>
       </div>
       <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
       </div>
         <div className='flex flex-col md:flex-row text-sm mb-20'>
             <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis, voluptas nemo consectetur distinctio reiciendis iusto? At quidem vel accusantium in sequi tempora architecto! Vel.</p>
             </div>
             <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vero aut reprehenderit veniam modi consectetur in accusantium a at..</p>
             </div>
             <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolorum libero magnam officiis exercitationem, eum repudiandae tempora veniam. Placeat, iste!</p>
             </div>
         </div>
         <NewsletterBox/>
    </div>
  )
}

export default About
