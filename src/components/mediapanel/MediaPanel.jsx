import React from 'react'
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const MediaPanel = () => {
  return (
    <div className='w-[5vw] h-1/2 absolute top-1/2 -translate-y-1/2 translate-x-[43vw] right-1/2 '>
      <div className="flex flex-col gap-7 items-center text-white text-5xl">
        <div className="cursor-pointer hover:opacity-80">
          <a href="https://www.linkedin.com/in/kiran-limbu-32692135a/" target='_blank'>
            <FaLinkedin />
          </a>
        </div>
        <div className="cursor-pointer hover:opacity-80">
            <a href="https://www.facebook.com/profile.php?id=61579257536313" target='_blank'>
            <FaFacebook />
          </a>
        </div>
        <div className="cursor-pointer hover:opacity-80">
          <a href="https://github.com/Kiran-Limbu" target='_blank'>
            <FaGithub />
          </a>
        </div>
        <div className="cursor-pointer hover:opacity-80" >
          <a href="mailto:limbukiran6969@gmail.com" target='_blank'>
            <MdOutgoingMail />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MediaPanel
