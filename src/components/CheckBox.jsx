import React from 'react';

const CheckBox = ({ title, checked, onChange }) => {
  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        <label className="text-[#1F2128] font-montserrat font-[400] text-[16px]">{title}</label>
        <div className="relative">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className={`
              appearance-none border-2 border-[#BDBDBD] h-[23px] w-[23px] rounded-[6px]
              checked:bg-[#2469F6] checked:border-none
              focus:outline-none
              transition-all duration-200 ease-in-out
              ${checked ? 'hover:ring-2 hover:ring-blue-200' : ''}
            `}
          />
          {checked && (
            <svg
              className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5L3.82353 8L11 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckBox;