import { useState } from "react";

const TextInput = ({
  label,
  description,
  type,
  placeholder,
  iconLeft,
  showIcon, //for password
  hideIcon,
}) => {
  const toggleSecret = () => {
    setSecret(!secret);
  };

  const [secret, setSecret] = useState(false);
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <div
        className={`${
          iconLeft || showIcon
            ? "flex input input-bordered w-full items-center gap-2"
            : ""
        }`}
      >
        {iconLeft && iconLeft}
        <input
          type={(showIcon && hideIcon) ? !secret ? 'password' : 'text' :  type}
          placeholder={placeholder}
          className={`placeholder:text-sm ${
            iconLeft || showIcon ? "flex-1" : "input input-bordered w-full"
          }`}
        />
        {(showIcon || hideIcon) && (
          <button className="justify-self-end" onClick={() => toggleSecret()}>{showIcon && !secret ? showIcon : hideIcon}</button>
        )}
      </div>
      <div className="label">
        <span className="label-text-alt">{description}</span>
      </div>
    </label>
  );
};

export default TextInput;
