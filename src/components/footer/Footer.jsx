import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
        <div className="flex items-center justify-center py-7">
            Kiran Limbu &copy; 2025
        </div>
      <div className="flex gap-7 justify-center items-center text-lg">
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
        <div className="cursor-pointer hover:opacity-80">
          <a href="mailto:limbukiran6969@gmail.com" target='_blank'>
            <MdOutgoingMail />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
