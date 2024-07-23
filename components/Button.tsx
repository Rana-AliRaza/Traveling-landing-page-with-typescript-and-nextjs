import Image from "next/image"

type btnType = {
    type: 'button' | 'submit',
    title: string,
    icon?: string,
    variant: "btn_dark_green" | "btn_green" | "btn_white_text" | 'btn_white' | 'btn_dark_green_outline'
    full: boolean
}



const Button = ({ type, title, icon, variant, full }:btnType) => {
  return (
    <button
      type={type}
       className={` flexCenter gap-3 ${variant} ${full && 'w-full'} rounded-full border`}
    >
        { icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap">
           {title}
        </label>
    </button>
  )
}

export default Button