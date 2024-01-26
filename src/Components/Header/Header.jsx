// import "./Header.css"
import { logo } from "../../assets/index"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import {dropDownItems} from "../../constants/dropDownItems";
import HeaderBottom from "./HeaderBottom"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userSignOut } from "../../redux/features/userSlice";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import {Popup} from "./../import"
import { clearCart } from "../../redux/features/cartSlice";

const Header = () => {
    const navigate = useNavigate()
    // console log the state alone forst to see what useselector returned 
    // const numOfItems = useSelector((state) => state)
    let items = useSelector((state) => state.cart.products)
    let userInfo = useSelector((state) => state.user.userInfo)
    const dispatch = useDispatch()
    const [logoutPopupVisible, setLogoutPopupVisible] = useState(false);
    // console.log(items)
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    
    const [showDropDown , setShowDropDown] = useState(false)
    const myLiItems = dropDownItems.map((item) => {
        return (
            <li className="myLi" key={item.id}>
                {item.title}
            </li>
        )
    })

    const handleLogout = () => {
          setLogoutPopupVisible(true)
    }


    const handleCancelLogout = () => {
        setLogoutPopupVisible(false);
      };

    const handleConfirmLogout = () => {
        // Close the popup
        setLogoutPopupVisible(false);
        // Dispatch the logout action
        signOut(auth).then(() => {
            console.log("Sign-out successful")
            console.log("dispatch signout")
            dispatch(clearCart())
            localStorage.removeItem('persist:root')
            console.log(localStorage.getItem('persist:root'))
            console.log(userInfo)
            dispatch(userSignOut())
            userInfo = null
            console.log(userInfo)
            navigate("/",{replace:true,preventScrollReset : false})
        }).catch((error) => {
            alert(error)
        });
    };
    


      return (
       <>
        { logoutPopupVisible &&
            <Popup
                onConfirm={handleConfirmLogout}
                onCancel={handleCancelLogout}
                confirm = "Continue"
                cancel = "Cancel"
                msg="Are you sure you want to logout? You will lose all the products in your cart."/>  
        }
        <div className="sticky top-0 z-50">
        <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center justify-between gap-4">
        <Link to={"/"}>
            <div className="headerHover">
                <img className="w-24 mt-2" src={logo} alt="logo" />
            </div>
        </Link>
        {/*  this class you will find in index.css */}
        <div className="headerHover hidden mdl:inline-flex">
            <LocationOnIcon/>
            <p className="text-xs md:text-sm text-light_text flex flex-col">Deliver to <span className="font-bold text-white_text">Syria</span></p>
        </div>
   
        <div className="flex flex-grow h-10 relative hidden lgl:flex">
            <p onClick={() => {setShowDropDown(!showDropDown)}} className="pHover">All <ArrowDropDownIcon/></p>
            {
                // if this condition is true , only then return what after &&
            showDropDown && (
                    <ul className="myUl">
                        {myLiItems}
                    </ul>
            )
            }
            <input className="myInput"  type="text" placeholder="Type here to serach"/>
            <span className="searchIcon">
                <SearchIcon />
            </span>
        </div>
   
        <Link to={"signin"}>
            <div className="flex-col items-start headerHover ">
                {
                    userInfo ?
                    <p className="text-sm mdl:text-lg font-semibold text-white mdl:text-light_text">
                        Hello , {userInfo.userName}
                    </p> 
                    : 
                    <p className="text-xs mdl:text-sm text-white mdl:text-light_text font-light">
                        Hello , sign in
                    </p> 
                }
                
                <p className="text-xs mdl:text-sm font-semibold -mt-1 text-white_text hidden mdl:inline-flex">Accounts & Lists <ArrowDropDownIcon/></p>
            </div>
        </Link>
   
                
   
        <div className="hidden lgl:flex-col items-start headerHover">
            <p className="text-xs text-light_text font-light">Returns</p>
            <p className="text-sm font-semibold -mt-1 text-white_text">& Orders</p>
        </div>
   
            {
                userInfo && 
                        <Link to={"/cart"}>
                        <div className="items-start headerHover relative">
                            <ShoppingCartIcon/>
                            <p className="text-xs font-semibold mt-3 text-white_text">
                                Cart 
                                <span className="absolute -top-1 right-6 p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex items-center justify-center">
                                    {totalQuantity > 0  ? totalQuantity : 0}
                                </span>
                            </p>
                        </div>
                    </Link>
            }
   
        {
                    userInfo &&
                    <div onClick={handleLogout} className="flex flex-col justify-center items-center headerHover relative">
                        <LogoutIcon/>
                        <p className="hidden mdl:inline-flex text-xs font-semibold text-white_text">
                            Log out
                        </p>
                    </div> 
                }
    </div>
   
    <HeaderBottom/>
        </div>
       </>
      )
  }

export default Header

