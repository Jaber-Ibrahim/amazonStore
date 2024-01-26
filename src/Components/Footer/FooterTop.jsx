import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../import'


const FooterTop = () => {

  const navigate = useNavigate()

  const navigateToHandler = () => {
    navigate("/signin" , {replace:true})
  }

  return (
    <div className='w-full bg-white py-6'>
      <div className='w-full border-t-[1px] border-b-[1px] py-8'>
        <div className="w-64 mx-auto text-center flex flex-col gap-1">
            <p className="text-sm">See Personalized Recommendation</p>
                <Button handler={navigateToHandler}>Sign In</Button>
               
            <p className="text-xs mt-1">
                New Customer ? 
                <span className="text-blue-600 ml-1 cursor-pointer">Start here</span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default FooterTop
