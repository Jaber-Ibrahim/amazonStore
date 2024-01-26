import { FooterMiddleItems } from "../../constants/FooterMiddleItems"
import FooterMiddleList from "./FooterMiddleList"
import {logo, syrianFlag} from "./../../assets/index"
const FooterMiddle = () => {
  return (
    <div className="w-full bg-amazon_light text-white">
      <div className="w-full border-b-[1px] border-gray-500 p-6">
        <div className="max-w-5xl mx-auto text-gray-30">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 xl:grid-cols-4 items-center md:items-start">
                {FooterMiddleItems.map((item) => (
                    <FooterMiddleList
                        key={item.id}
                        title={item.title}
                        listItems={item.listItem}/>
                ))}
            </div>
        </div>
      </div>

      <div className="w-full flex gap-6 items-center justify-center p-6">
        <div className="">
            <img className="w-20 pt-3 " src={logo} alt="logo of amazon" />
        </div>
        <div className="flex gap-2">
            <p className="footerpara text-xs md-text-sm">
                English
            </p>
        </div>
        <div className="footerpara">
            <img className="w-6" src={syrianFlag} alt= "syrian flag" />
            <p className="text-xs md-text-sm">Syria</p>
        </div>
      </div>
    </div>
  )
}

export default FooterMiddle
