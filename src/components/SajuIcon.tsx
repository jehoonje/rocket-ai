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
      className={`w-[70px] h-[70px] border flex flex-col items-center justify-center p-1`}
    >
      <span className={`text-xs mt-1`}>{description}</span>
      <span className={`text-4xl font-serif leading-tight`}>{hanja}</span>
      <span className={`text-xs mt-1`}>{description}</span>
    </div>
  );
};

export default SajuIcon;
