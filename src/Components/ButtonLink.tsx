import { Link } from "react-router-dom"
const ButtonLink = ({children, variant="primary",to,...props}:any) => {
   const baseStyle = "rounded-md p-3 font-semibold font-roboto-regular w-[fit-content] mt-5"
   const variantStyle:any={
      primary:'bg-main-800 text-white block m-auto hover:bg-zinc-700',
      secondary:'bg-secondary text-white block'
   }
   return (
       <Link to={to}  className={`${baseStyle} ${variantStyle[variant]}`} {...props}>
         {children}
       </Link>  
   )
}

export default ButtonLink;