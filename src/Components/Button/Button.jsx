
const Button = (props) => {
  return (
    <button onClick={props.handler} className="w-full py-2 text-lg font-semibold rounded-md bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazon_input_shadow">{props.children}</button>
  )
}

export default Button
