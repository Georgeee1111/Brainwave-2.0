const InputField = ({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
          errorMessage ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {errorMessage && (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputField;
