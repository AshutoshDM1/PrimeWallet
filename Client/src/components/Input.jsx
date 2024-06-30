const Input = ({ onChange , type, name, placeholder, value, className }) => {
  return (
    <input
      onChange={onChange}
      name={name}
      className={`w-full md:w-4/6 py-4 pl-8 rounded-full border-white focus:border-blue-600 border focus:outline-none text-lg bg-gray-700/10 focus:bg-gray-400/10 font-medium ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;