import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import SideBar from './SideBar';
import {motion,AnimatePresence} from "framer-motion"
import { useSelector } from 'react-redux';

const HeaderBottom = () => {
    const [showSideBar , setshowSideBar] = useState (false)
    const userInfo = useSelector((state) => state.user.userInfo)
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light flex items-center ">
        <ul className="flex items-center gap-2 text-xs md:text-sm text-white tracking-wide">
            <li className="headerHover gap-1" onClick={() => setshowSideBar(true)}><MenuIcon/>All</li>
            <li className="headerHover hidden md:inline-flex">Today's Deals</li>
            <li className="headerHover hidden md:inline-flex">Customer's Service</li>
            <li className="headerHover hidden md:inline-flex">Gift Cards</li>
            <li className="headerHover hidden md:inline-flex">Registry</li>
            <li className="headerHover hidden md:inline-flex">Sell</li>
        </ul>

        <AnimatePresence mode='popLayout' initial={false}>
        {showSideBar && (
            <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
                <div className="w-full h-full relative" onClick={() => setshowSideBar(false)}>
                    <motion.div initial={{x:"-100%" , opacity:0}} animate={{x:0,opacity:1}} 
                    exit={{x:"-100%" , opacity:0}} transition={{duration:.5}}className="w-[50%] md:w-[350px] h-full bg-white border border-black">
                        <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                            <AccountCircleIcon/>
                            {/* <h3 className='font-bold text-sm md:text-lg tracking-wide'>
                                Hello , Sign in
                            </h3> */}

                            {
                            userInfo ?
                            <h3 className='font-bold text-sm md:text-lg tracking-wide'>
                                Hello , {userInfo.userName}
                            </h3> 
                            : 
                            <h3 className='font-bold text-sm md:text-lg tracking-wide'>
                                Hello , Sign in
                            </h3>
                            }
                        </div>
                        <SideBar
                            title = "Digital Content & Devices"
                            first = "Amazon Music"
                            second = "Kindle E-Commerce & Books"
                            third = "Amazon Appstore"/>
                        <SideBar
                            title = "Shop By Department"
                            first = "Electronics"
                            second = "Computers"
                            third = "Smart Home"/>
                        <SideBar
                            title = "Programs & Features "
                            first = "Gift Cards"
                            second = "Amazon Live"
                            third = "International Shopping"/>
                        <SideBar
                            title = "Help & Center"
                            first = "Your Account"
                            second = "Customer Service"
                            third = "Contact us"/>
                    <span className='absolute top-0 left-[100%] md:left-[350px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300 cursor-pointer' onClick={() => setshowSideBar(false)}>
                        <CloseIcon/>
                    </span>
                    </motion.div>
                </div>
            </div>
        )}
        </AnimatePresence>
    </div>
  )
}

export default HeaderBottom
