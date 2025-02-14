import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsBadgeSd } from "react-icons/bs";

const Navbar = () => {

  return (
    <nav className="mb-20 flex items-center justify-between py-4 sm:py-11" >
      <div className="text-white text-4xl" >
        <BsBadgeSd />
      </div>
      <div className="text-white flex gap-4 text-xl" >
        <FaInstagram className="cursor-pointer" />
        <FaXTwitter className="cursor-pointer" />
        <FaGithub className="cursor-pointer" />
        <FaLinkedin className="cursor-pointer" />
      </div>
    </nav>
  )
}

export default Navbar