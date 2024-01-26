
import { Button } from "../import"
import "./Popup.css"


const Popup = (props) => {
  return (
      <div className="popup-container">
      <div className="bg-white p-10 rounded-lg w-[90%] md:w-[500px] text-center">
        {/* <p>Are you sure you want to logout? You will lose all the products in your cart.</p> */}
        <p>{props.msg}</p>
        <div className="mt-5 flex justify-center gap-3">
          {props.confirm ? <Button handler={props.onConfirm}>{props.confirm}</Button> : null }
          {props.cancel ? <Button handler={props.onCancel}>{props.cancel}</Button> : null }
        </div>
      </div>
    </div>
  )
}

export default Popup
