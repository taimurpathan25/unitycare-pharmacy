import React from 'react'
import { LocateIcon, Mail, Phone, Timer } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'


const TopNavbar = () => {
  return (
    <>
    <header className='mx-auto '>
    <div className='grid grid-cols-1 md:grid-cols-4 py-2 px-4 sm:px-6 lg:px-8 top-header bg-gradient-to-r from-green-50 to-green-100 text-white text-center p-2 text-sm md:text-base gap-4'>
<div className='md:col-span-2 flex gap-6'>
    <FaFacebook className='text-xl text-blue-600 rounded'/>
    <FaInstagram  className='text-xl bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf] rounded'/>
    <FaYoutube className='text-xl text-red-500 rounded'/>
    <FaLinkedin className='text-xl text-blue-900 rounded'/>
    </div>

    <div className='md:col-span-2 flex gap-6 text-black font-semibold overflow-x-auto'> 
        <div className="location flex justify-center items-center text-xs sm:text-xs"><LocateIcon className='text-green-500'/> Nakatiya, Dist. Bareilly</div>
        <div className="contact flex justify-center items-center text-xs sm:text-xs"><Phone className='text-blue-500'/> +91 7618270346</div>
        <div className="gmail flex justify-center items-center text-xs sm:text-xs"><Mail className='text-red-500'/> taimurpathan25@gmail.com</div>
        <div className="support flex justify-center items-center text-xs sm:text-xs"><Timer className='text-orange-500'/> 24 Hour</div>
    </div>
</div>

    </header>
    </>
    
  )
}

export default TopNavbar