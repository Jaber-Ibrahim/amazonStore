
const MyInput = (props) => {
  return (
    <>
    <label htmlFor={props.for} className="text-sm font-medium">{props.label} : </label>
    <input 
        onChange={props.changeHandler} 
        className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazon_input_shadow duration-100" type={props.type} name={props.name} id={props.id} autoComplete={props.on} />
    </>
  )
}

export default MyInput
