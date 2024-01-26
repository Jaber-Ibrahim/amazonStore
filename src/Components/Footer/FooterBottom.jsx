import {footerBottomItems} from "./../../constants/footerBottomItems"
const FooterBottom = () => {
  return (
    <div className="w-full bg-footer_bottom p-6">
      <div className="max-w-5xl mx-auto">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 items-center md:items-start place-content-center text-gray-400">
            {
                footerBottomItems.map((item) => (
                    <div className="group cursor-pointer" key={item.id}>
                        <h3 className="footerBottomTitle">
                            {item.title}
                        </h3>
                        <p className="footerBottomText">{item.desc}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default FooterBottom
