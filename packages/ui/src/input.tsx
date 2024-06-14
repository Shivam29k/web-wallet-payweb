

function Input({className, label, type, onChange, placeholder }:{className?: string, label?: string, type: string, onChange?: React.ChangeEventHandler<HTMLInputElement>, placeholder?: string}) {
  return (
    <div>
        <h3>{label}</h3>
        <input type={type} onChange={onChange} className={`border border-gray-300 rounded-md w-full py-1 px-2 outline-blue-500 ${className}`} required placeholder={placeholder} />
    </div>
  )
}

export default Input