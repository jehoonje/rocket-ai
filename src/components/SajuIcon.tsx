import React from 'react';

interface SajuIconProps {
  hanja: string;
  description: string;
  hanjaColor?: string;
  descriptionColor?: string;
  bgColor?: string;
  borderColor?: string;
}

const SajuIcon: React.FC<SajuIconProps> = ({
  hanja,
  description,
  hanjaColor = 'text-gray-800',
  descriptionColor = 'text-gray-700',
  bgColor = 'bg-white',
  borderColor = 'border-gray-400',
}) => {
  return (
    <div
      className={`w-[70px] h-[90px] ${bgColor} border ${borderColor} rounded-md flex flex-col items-center justify-center p-1 shadow-sm`}
    >
      <span className={`text-4xl font-serif ${hanjaColor} leading-tight`}>{hanja}</span>
      <span className={`text-xs ${descriptionColor} mt-1`}>{description}</span>
    </div>
  );
};

export default SajuIcon;
