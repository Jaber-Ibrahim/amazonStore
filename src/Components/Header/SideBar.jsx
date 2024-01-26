import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SideBar = (props) => {
  return (
    <div className='py-3 border-b-[1px] border-b-gray-300'>
        <h3 className="text-lg font-semibold mb-1 px-6">{props.title}</h3>
        <ul className="text-sm">
            <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">{props.first}<KeyboardArrowRightIcon/>
            </li>
            <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">{props.second}<KeyboardArrowRightIcon/>
            </li>
            <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">{props.third}<KeyboardArrowRightIcon/>
            </li>
            
        </ul>
    </div>
  )
}

export default SideBar
