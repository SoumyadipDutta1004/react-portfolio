import { FaReact, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCpp } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
});

const Technologies = () => {

  return (
    <div className="pb-20">
      <h1 className="my-20 text-white text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4"> 
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaReact className="text-cyan-500 text-6xl" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <IoLogoJavascript className="text-yellow-300 text-6xl" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiTailwindCssFill className="text-cyan-400 text-6xl" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <TbBrandCpp className="text-purple-500 text-6xl" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaPython className="text-blue-500 text-6xl" />
        </motion.div>

      </div>
    </div>
  )
}

export default Technologies