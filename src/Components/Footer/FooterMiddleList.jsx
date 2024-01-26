
const FooterMiddleList = (props) => {
  return (
    <div className="w-full ">
        <h3 className="text-white text-base font-semibold mb-3">{props.title}</h3>
        <ul className="flex flex-col gap-2 ">
        {props.listItems.map((data,index) => (
            <li key={index} className="footerLink">{data}</li>
        ))}
        </ul>
    </div>
  )
}

export default FooterMiddleList
