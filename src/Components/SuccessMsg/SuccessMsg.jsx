import { motion } from "framer-motion"


const SuccessMsg = (props) => {
  return (
    <motion.p
        initial={{y: 10 , opacity : 0}}
        animate={{y: 0 , opacity : 1}}
        transition={{duration : 0.5}}
        className="text-2xl font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center">
            {props.children}
    </motion.p>
  )
}

export default SuccessMsg
