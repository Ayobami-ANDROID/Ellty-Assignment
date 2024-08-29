import React, { useState } from 'react';

const CheckBox = ({ title, checked, onChange }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    return (
        <div className="relative">
            <div className="flex justify-between items-center">
                <label className="text-[#1F2128] font-montserrat font-[400] text-[14px] font-text">{title}</label>
                <div className="relative">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={onChange}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onMouseDown={() => setIsPressed(true)}
                        onMouseUp={() => setIsPressed(false)}
                        className={`
              appearance-none border-2 h-[23px] w-[23px] rounded-[6px]
              transition-all duration-200 ease-in-out
              ${checked
                                ? 'bg-[#2469F6] border-0 hover:bg-[#5087F8] h-[23px] w-[23px]'
                                : 'border-[#CDCDCD] hover:border-[#BDBDBD] hover:bg-white h-[23px] w-[23px]'
                            }
              ${isPressed && checked ? 'ring-2 ring-blue-200 bg-[#2469F6] h-[23px] w-[23px] border-0' : ''}
              ${isPressed && !checked ? 'bg-white border-[#BDBDBD] h-[23px] w-[23px]' : ''}
              focus:outline-none
            `}
                    />
                    {checked && (

                        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none">
                            <path d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1" stroke="white" stroke-linecap="round" />
                        </svg>
                    )}
                    {!checked && isHovered && (
                        <svg
                            className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                            width="19"
                            height="14"
                            viewBox="0 0 19 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
                                stroke={isPressed ? "#878787" : "#E3E3E3"}
                                strokeLinecap="round"
                            />
                        </svg>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckBox;