
import { Button } from "../import"
import "./Popup.css"
import {motion} from "framer-motion"

const Popup = (props) => {
  return (
    <>
        {
          props.confirm && 
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, type: 'spring' }}
            className="popup-container">
            <div className="bg-white p-10 rounded-lg w-[90%] md:w-[500px] text-center">
              <p className="font-semibold text-lg">{props.msg}</p>
              <div className="mt-5 flex justify-center gap-3">
                {props.confirm ? <Button handler={props.onConfirm}>{props.confirm}</Button> : null }
                {props.cancel ? <Button handler={props.onCancel}>{props.cancel}</Button> : null }
              </div>
            </div>
          </motion.div>
        }
        </>
  )
}

export default Popup
