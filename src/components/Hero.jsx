import profilePic from "../assets/images/profile-pic1.jpg"
import { motion } from "framer-motion"


const Hero = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-around">
      <div className="text-white flex flex-col">
        <motion.h1 
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1}}
        transition={{ duration: 0.5, delay: 0}}
        className="text-5xl lg:text-7xl pb-4 lg:pb-8">Soumyadip Dutta</motion.h1>

        <motion.span
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1}}
        transition={{ duration: 0.5, delay: 0.5}}
        className="text-xl lg:text-2xl">Front-end Developer</motion.span>
        <motion.p
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1}}
        transition={{ duration: 0.5, delay: 1}}
        className="my-4 max-w-xl text-sm font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quasi dicta culpa obcaecati voluptatum, distinctio odio excepturi corporis autem suscipit dolor explicabo provident praesentium.
        </motion.p>
      </div>
      <div className="mx-4">
        <motion.img
        initial={{ x: +100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1}}
        transition={{ duration: 0.5, delay: 1}}
        className="rounded-lg" src={profilePic} alt="profile picture" width={400} height={400} />
      </div>
    </div>
  )
}

export default Hero