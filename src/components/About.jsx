import profilePic from "../assets/images/profile-pic2.jpg"
import { motion } from "framer-motion"




const About = () => {

  return (
      <div className="pb-4">
        <h2 className="my-20 text-center text-4xl text-white">About <span className="text-neutral-500">Me</span></h2>

        <div className="flex flex-wrap lg:flex-nowrap justify-around gap-8 w-full px-0 lg:px-20">
            <motion.img
            initial={{ x: -100, opacity: 0 }} 
            animate={{opacity: 1, x: 0}}
            transition={{ duration: 0.5, delay: 0.5}}
            className="object-cover rounded-md" src={profilePic} alt="" width={400} height={400} />

            <motion.p
            initial={{ x: +100, opacity: 0 }} 
            animate={{opacity: 1, x: 0}}
            transition={{ duration: 0.5, delay: 0.5}}
            className="text-white my-2 max-w-xl text-center lg:text-start py-6 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis incidunt fugiat cupiditate quam, eius facere ut natus possimus voluptate quae recusandae obcaecati sequi repellat expedita molestiae culpa ad. Architecto, laboriosam odio. Incidunt eligendi voluptas quam laboriosam explicabo vitae voluptates porro.</motion.p>
        </div>
      </div>
  )
}

export default About