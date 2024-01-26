import { motion } from "framer-motion"
import "./SuccessMsg.css"

const SuccessMsg = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50">
      <motion.p
          initial={{y: 10 , opacity : 0}}
          animate={{y: 0 , opacity : 1}}
          transition={{duration : 0.5}}
          className=" p-10 text-lg md:text-2xl border-[3px] uppercase border-green-800 font-semibold text-green-800">
              {props.children}
      </motion.p>
    </div>
  )
}

export default SuccessMsg
