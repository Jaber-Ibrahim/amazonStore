
import { Button } from "../import"
import "./LogoutConfirmationPopup.css"
const LogoutConfirmationPopup = (props) => {

  return (
    <div className="popup-container">
      <div className="popup">
        <p>Are you sure you want to logout? You will lose all the products in your cart.</p>
        <div className="buttons">
          <Button handler={props.onConfirm}>Confirm</Button>
          <Button handler={props.onCancel}>Cancel</Button>
          {/* <button onClick={props.onConfirm}>Confirm</button>
          <button onClick={props.onCancel}>Cancel</button> */}
        </div>
      </div>
    </div>
  )
}

export default LogoutConfirmationPopup
