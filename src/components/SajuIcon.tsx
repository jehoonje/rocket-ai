import React from 'react';

interface SajuIconProps {
  hanja: string;
  hanjaColor?: string; 
  descriptionkr: string;
  description: string;
  descriptionColor?: string;
  bgColor?: string;
  borderColor?: string;
}

const SajuIcon: React.FC<SajuIconProps> = ({
  hanja,
  hanjaColor,
  description,
  descriptionkr,
  bgColor,
  descriptionColor = 'text-gray-800',
  borderColor = 'border-gray-400',
}) => {
  return (
    <div
      className={`w-[70px] h-[65px] border ${bgColor} rounded-xl ${borderColor} flex flex-col items-center justify-center p-2 overflow-hidden`}
    >
      <span className={`text-[10px] ${descriptionColor} leading-tight`}>{descriptionkr}</span>
      <span className={`text-3xl ${hanjaColor} font-serif leading-tight`}>{hanja}</span>
      <span className={`text-[10px] font-serif ${descriptionColor} leading-tight`}>{description}</span>
    </div>
  );
};

export default SajuIcon;