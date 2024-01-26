import { Link, useNavigate } from "react-router-dom"
import {darkLogo} from "./../assets/index"
import { useState } from "react"
import { auth } from "./../firebase"
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth"
import {RingLoader} from "react-spinners"
import { useDispatch, useSelector } from "react-redux"
import { setUserInfo } from "../redux/features/userSlice"
import { ErrorMsg, MyInput, SuccessMsg } from "../Components/import"

const Registration = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userInfo = useSelector((state) => state.user.userInfo)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    
    
    // Error messages , validation cases
    const [errorName, setErrorName] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")
    const [firebaseError, setFirebaseError] = useState("")


    // console.log(userInfo)
    // my functions
    const handleName = (e) => {
        setFirebaseError("");
        const userName = e.target.value;
        if(userName) {
            setName(userName)
            setErrorName("")
        } else {
            setErrorName("! Enter your name")
        }
    }

    const handleEmail = (e) => {
        const userEmail = e.target.value;

        // setEmail(e.target.value)
        setFirebaseError("");
        const ValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);
        if(ValidEmail) {
            setEmail(userEmail)
            setErrorEmail("")
            // console.log("email validate" , ValidEmail)
        }
        else {
            setEmail("")
            setErrorEmail("! Your email should be like this : example@example.com")
            // console.log("email validate" , ValidEmail)
        }
        // console.log("email" , email)
    }

    const handlePassword = (e) => {
        setFirebaseError("");
        const userPassword = e.target.value;
        const hasNumber = /\d/.test(userPassword);
        // Check for at least one uppercase letter
        const hasUppercase = /[A-Z]/.test(userPassword);
        // Check for at least one special character (non-alphanumeric)
        const hasSpecialCharacter = /[!@#$%^&*(),.?~\/-_+{}]/.test(userPassword);
        // Combine the conditions
        const isStrong = (hasNumber && hasUppercase && hasSpecialCharacter && userPassword.length >= 8);
        if(isStrong) {
            // console.log("is strong " , isStrong)
            setPassword(userPassword)
            // console.log("password :  " , password)
            setErrorPassword("")
        } else {
            setPassword("")
            setErrorPassword("Your Password should have numbers , capital letters and special characters like @ , # , $ , % , ^ etc..")
        }
        setConfirmPassword("")
    }


    const confirmPasswordHandler = (e) => {
        setFirebaseError("");
        if(password) {
            if(e.target.value === password) {
                setConfirmPassword(e.target.value)
                setErrorConfirmPassword("")
            }
            else {
                setErrorConfirmPassword("not confirmed yet")
            }
        }
        else if(!password){
            setConfirmPassword("")
            setErrorConfirmPassword("Enter a strong password first")
        }
    }

    const registrationHandler = (e) => {

        e.preventDefault();
        setFirebaseError("")
        setLoading(true)
        if(!name) {
            setErrorName("! Enter your name")
        }
        if(!email) {
            setErrorEmail("! Not Valid Email ")
        }
        if(!password) {
            setErrorPassword("! Your Password does not set yet")
        }
        if(!confirmpassword) {
            setErrorConfirmPassword("! Not Matched")
        }
        if (name && !errorName && email && confirmpassword=== password ){
            // const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            createUserWithEmailAndPassword(auth,email,password)
            .then(async (userCredential) => {
                await updateProfile(auth.currentUser,{
                    displayName : name
                })
                setLoading(false)
                setSuccessMessage("Account Created Successfully")
                dispatch(setUserInfo({
                    id : userCredential.user.uid,
                    userName : userCredential.user.displayName,
                    email : userCredential.user.email
                }))
                console.log("after dispatch")
                setTimeout(() => {
                    navigate("/",{replace: true})
                }, 1000);
            })
            .catch((error) => {
                setLoading(false)
                setFirebaseError(error.code)
            //   console.log(firebaseError)
            })
        }
        else {
            setFirebaseError("Check The Wrong Fields")
            setTimeout(() => {
                setLoading(false)
            }, 4000);
        }
    }


  return (
    userInfo ?
    <div className="w-full h-screen mt-auto p-5">
        {successMessage ? 
        <SuccessMsg>{successMessage}</SuccessMsg>
        : 
        <SuccessMsg>you are alreday signing in - <Link to={"/"} className="text-green-600 text-4xl"> Go Home</Link></SuccessMsg> 
        }
    </div> 
    : (
        <>
        <div className="pt-6 flex flex-col items-center justify-center gap-10">
         <div className="w-[80%] md:w-[400px] flex flex-col  gap-10 items-center">
           <img src={darkLogo} className="w-40" alt="amazon logo" />
           <form className="w-full flex flex-col gap-4 border border-zinc-300 p-4">
             <h2 className="text-3xl font-medium">Create Account</h2>
             
                 <MyInput
                    for = "name"
                    label = "Your Name"
                    changeHandler = {handleName}
                    type = "text"
                    name = "name"
                    id = "name"
                    />
                {errorName && <ErrorMsg error={errorName}/>}
    
             
                    <MyInput
                        for = "email"
                        label = "Your Email"
                        changeHandler = {handleEmail}
                        type = "email"
                        name = "email"
                        id = "email"
                        />
                    {errorEmail && 
                        <ErrorMsg error={errorEmail}/>
                    }

             <MyInput
                for = "password"
                label = "Your Password"
                changeHandler = {handlePassword}
                type = "password"
                name = "password"
                id = "password"
                on="on"
                />
             
             {errorPassword && 
                <ErrorMsg error={errorPassword}/>
             }
    
             
             <MyInput
                for = "confirm"
                label = "Confirm Your Password"
                changeHandler = {confirmPasswordHandler}
                type = "password"
                name = "confirm"
                id = "confirm"
                on="on"
                />
             {errorConfirmPassword && <ErrorMsg error={errorConfirmPassword}/>}
    
    
             <button onClick={registrationHandler} className="w-full py-2 text-lg font-semibold rounded-md bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazon_input_shadow">Continue</button>
    
             {firebaseError && <ErrorMsg error={firebaseError}/>}
    
    
    
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
    
             
    
             <p className="">By Continuing, you agree to Amazon's <span className="text-blue-500">Conditions of Use </span> and <span className="text-blue-500"> Privacy Notice.</span></p>
             <p className="">Already have an account?  
             <Link className="text-blue-500" to={"/signin"}> Sign in</Link>
             </p>
           </form>
    
           
         </div>
       
    
       <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
       <div className="flex items-center gap-6">
         <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">Conditions of Use</p>
         <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">Privacy Notice</p>
         <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">Privacy Notice</p></div>
         <p className="text-xs text-gray-600">© create By
          <Link target="_blank" to={"https://github.com/Jaber-Ibrahim"} className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100"> Jaber Ibrahim </Link>
           2024
         </p>
       </div>
     </div>
     </>
    )
  )
}

export default Registration
