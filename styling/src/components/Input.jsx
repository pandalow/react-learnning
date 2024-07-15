let labelValid = "block mb-2 text-xs font-bold tracking-wide uppercase"
let inputValid = "w-full px-3 py-2 leading-tight border rounded shadow "

if(invalid){
    labelValid += " text-red-500"
    inputValid += " text-red-500 bg-red-100"

}else{
    labelValid += " text-stone-300"
    inputValid += " text-gray-700 bg-stone-300"
}



export default function Input({ label, invalid, ...props }) {
    return (
      <p>
        <label className={label}>{label}</label>
        <input className={inputValid} {...props} />
      </p>
    );
  }