function Button(props){
    const { name, bgColor } = props;
return (
  <button className={`text-1xl font-bold rounded-md mt-8 px-7 text-white ${bgColor}`}>
    {name}
  </button>

    )
}export default Button;