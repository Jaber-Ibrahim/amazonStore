import StarRateIcon from '@mui/icons-material/StarRate';
import ApiIcon from '@mui/icons-material/Api';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from "react-redux"
import { addToCart} from '../../redux/features/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Popup } from '../import';


const ProductCard = (props) => {
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.user.userInfo)
  const navigate = useNavigate()
  const [PopupVisible, setPopupVisible] = useState(false);

  const addHandler = () => {
    setPopupVisible(true)
    if(userInfo) {
      dispatch(addToCart({
        id : props.id ,
        title : props.title ,
        category : props.category ,
        desc : props.desc ,
        image : props.image ,
        price: props.price,
        quantity : 1 
      }))
    } else {
      navigate("/signin" , {replace:true})
    }
  }

  const PopupVisibleHandler = () => {
    setPopupVisible(false)
  }
  return (
    <>
    { PopupVisible &&
      <Popup
          onConfirm={PopupVisibleHandler}
          confirm = "Continue"
          msg = "Product Added to Your Cart"/>  
    }
    <div className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-test_shadow duration-300 relative flex flex-col gap-3 rounded-md px-6">
        <span className='absolute top-5 right-5 text-xs capitalize text-gray-300'>{props.category}</span>
      <div className="w-full h-auto items-center justify-center relative overflow-hidden group">
        <img src={props.image} alt="product photo" className="w-full h-64 object-contain"/>
        <ul className='w-full h-36 bg-gray-100 absolute bottom-[-150px] flex flex-col items-center justify-center gap-2 border-1 border-r group-hover:bottom-0 duration-500'>
            <li className='productLi'>Compare <ApiIcon/></li>
            <li className='productLi'>Add to Cart <ShoppingCartIcon/></li>
            <li className='productLi'>View Details <ArrowCircleRightIcon/></li>
            <li className='productLi'>Add to Wish List <FavoriteIcon/></li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="tracking-wide text-lg text-amazon_blue">{props.title.substring(0,20)}</h2>
        <p className="">{props.price} $</p>
      </div>
      <div className="h-auto min-h-[50px] w-auto">
        <p className="text-sm">{props.desc.substring(0,60)} .....</p>
      </div>
      <div className="text-yellow-500">
        <StarRateIcon/>
        <StarRateIcon/>
        <StarRateIcon/>
        <StarRateIcon/>
        <StarRateIcon/>
      </div>
      <button onClick={addHandler} className='w-full font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-2 rounded-md mt-3'>
        {userInfo ? "Add to Cart" : "Sign in to add "  }
        </button>
    </div>
    </>
  )
}

export default ProductCard
