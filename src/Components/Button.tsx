
const Button = ({children,variant="secondary",...props}:any) => {
     const baseStyle = "rounded-md p-2 font-roboto-bold cursor-pointer mr-2"
     const variantStyle:any = {
        primary:"bg-violet-500 hover:bg-violet-400",
        secondary:"bg-gray-200 hover:bg-gray-300"
     }
    return (
        <button className={`${baseStyle} ${variantStyle[variant]}`} {...props}>
            {children}
        </button>
    )
}

export default Button;