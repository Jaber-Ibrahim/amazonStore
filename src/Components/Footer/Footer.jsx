import FooterBottom from "./FooterBottom"
import FooterMiddle from "./FooterMiddle"
import FooterTop from "./FooterTop"
import { useSelector } from 'react-redux'

const Footer = () => {
  const userInfo = useSelector((state) => state.user.userInfo)
  return (
    <footer>
      {!userInfo && <FooterTop/>}
      <FooterMiddle/>
      <FooterBottom/>
    </footer>
  )
}

export default Footer
