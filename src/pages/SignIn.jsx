import { Link, useNavigate } from "react-router-dom"
import {darkLogo} from "./../assets/index"
import { useState } from "react";
import { auth } from "./../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import {RingLoader} from "react-spinners"
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/features/userSlice";
import { Button, ErrorMsg, MyInput, SuccessMsg } from "./../Components/import";




const SignIn = () => {


  const userInfo = useSelector((state) => state.user.userInfo)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    
    // Error messages , validation cases
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [firebaseError, setFirebaseError] = useState("")

    const [successMessage, setSuccessMessage] = useState("")


    // my functions
    const handleEmail = (e) => {
      setFirebaseError("")
        // setEmail(e.target.value)
        setEmail(e.target.value)
        setErrorEmail("")
    }

    const handlePassword = (e) => {
      setFirebaseError("")
      if(e.target.value) {
          setPassword(e.target.value)
          setErrorPassword("")
            // console.log("is strong " , isStrong)
        } else {
            setPassword("")
            setErrorPassword("! Enter Your Password")
            // console.log("is strong " , isStrong)
          }
    }

    const logInHandler = (e) => {
        setLoading(true)
        e.preventDefault();
        const ValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if(ValidEmail) {
            setErrorEmail("")
          } else {
          setErrorEmail("! Not valid Email")
        }
        // if(!email) {
        //     setErrorEmail("! Enter Your Email ")
        //   }
          if(!password) {
            setErrorPassword("! Enter Your Password")
          }
        else if(ValidEmail && password){
          signInWithEmailAndPassword(auth,email,password)
            .then((userCredential) => {
              dispatch(setUserInfo({
                id : userCredential.user.uid,
                userName : userCredential.user.displayName,
                email : userCredential.user.email,
              }))
              setSuccessMessage("Signing in successfully ")
              setTimeout(() => {
                navigate("/",{replace: true})
              }, 2000);
            })
            .catch((error) => {
              // console.log(error.code)
              setLoading(false)
              setFirebaseError(error.code + " check your inputs")
            })
          // console.log("email",email)
          // console.log("password",password)
        }
    }

  return (
    userInfo ?
        <div className="w-full h-screen mt-auto p-5">
            {successMessage ? 
            <SuccessMsg>{successMessage}</SuccessMsg> 
            : 
            <SuccessMsg>you are alreday signing in - <Link to={"/"} className="text-green-600 text-3xl"> Go Home</Link></SuccessMsg> 
            }
        </div> 
      :
      (
        <div className="pt-6 flex flex-col items-center justify-center gap-10">
        <div className="w-[80%] md:w-[400px] flex flex-col  gap-10 items-center">
          <img src={darkLogo} className="w-40" alt="amazon logo" />
          <form className="w-full flex flex-col gap-4 border border-zinc-300 p-4">
            <h2 className="text-3xl font-medium">Sign in</h2>
            
            

            <MyInput
              for = "email"
              label = "Your Email"
              changeHandler = {handleEmail}
              type = "email"
              name = "email"
              id = "email"/>
            
            {errorEmail && (
                <ErrorMsg error = {errorEmail}/>
            )}


            
            <MyInput
              for = "password"
              label = "Your Password"
              changeHandler = {handlePassword}
              type = "password"
              name = "password"
              id = "password"
              on = "on"/>
            {errorPassword && (
              <ErrorMsg error = {errorPassword}/>
            )}

            <Button handler= {logInHandler}>Continue</Button>

            {
                loading && (
                    <div className="flex justify-center">
                        <RingLoader
                            color="#febd69" 
                            loading
                            size={90}
                            speedMultiplier={1}
                        />
                    </div>
                )
            }


            {firebaseError && (
                <ErrorMsg error={firebaseError}/>
            )}

            {successMessage && (
              <SuccessMsg>{successMessage}</SuccessMsg>
              )}


            <p className="">By Continuing, you agree to Amazon's <span className="text-blue-500">Conditions of Use </span> and <span className="text-blue-500"> Privacy Notice.</span></p>
          </form>
          <p className="relative before:content-['-----------'] before:w-[50px] before:h-[4px] after:content-['-----------'] after:w-[50px] after:h-[4px]  text-gray-600">New To Amazon ?</p>

          <Link to={"/registration"} className="w-full text-center py-2 mt-4 text-lg font-semibold rounded-md bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazon_input_shadow">
              Create Your Amazon Account
          </Link>
        </div>
      

      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
      <div className="flex items-center gap-6">
        <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">Conditions of Use</p>
        <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">Privacy Notice</p>
        <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">Privacy Notice</p></div>
        <p className="text-xs text-gray-600">© create By
          <Link target="_blank" to={"https://github.com/Jaber-Ibrahim"} className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100"> Jaber Ibrahim </Link>
        2024</p>
      </div>
      </div>
      )
  )
}

export default SignIn
