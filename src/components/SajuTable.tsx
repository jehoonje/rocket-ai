import React, {JSX} from 'react';
import SajuIcon from './SajuIcon';

// SajuTable에 전달될 데이터 타입 정의
interface SajuData {
  name: string;
  birthDate: string;
  columns: string[];
  sipsungTop: Array<{ main: string; sub?: string }>;
  cheonGan: Array<{ hanja: string; description: string; bgColor?: string; hanjaColor?: string; descriptionColor?: string, borderColor?: string }>;
  jiJi: Array<{ hanja: string; description: string; bgColor?: string; hanjaColor?: string; descriptionColor?: string, borderColor?: string }>;
  sipsungBottom: Array<{ main: string; sub?: string }>;
  unseong: Array<{ main: string; sub?: string }>;
  sinsal: Array<{ main: string; sub?: string }>;
  gwiin: Array<{ main: string | JSX.Element; sub?: string | JSX.Element }>;
}

interface SajuTableProps {
  data: SajuData;
}

const SajuTable: React.FC<SajuTableProps> = ({ data }) => {
  const renderCell = (item: { main: string | JSX.Element; sub?: string | JSX.Element }, key?: string | number) => (
    <div key={key} className="text-center border-r border-b border-gray-300 p-1 flex flex-col justify-center items-center h-full min-h-[40px]">
      <span className="text-[11px] sm:text-xs font-medium text-gray-700 leading-tight">{item.main}</span>
      {item.sub && <span className="text-[9px] sm:text-[10px] text-gray-500 leading-tight">{item.sub}</span>}
    </div>
  );

  const renderLabelCell = (label: string, subLabel: string, key?: string | number) => (
    <div key={key} className="text-center border-r border-b border-gray-300 px-1 py-2 flex flex-col justify-center items-center bg-gray-50 h-full">
      <span className="text-xs sm:text-sm font-semibold text-gray-600">{label}</span>
      <span className="text-[10px] sm:text-xs text-gray-500">{subLabel}</span>
    </div>
  );

  return (
    <div className="w-full bg-[#f6f3ef] p-[6px] sm:p-2 rounded-md shadow-lg border-2 border-[#3a3a5a]"> {/* 이미지의 베이지색 배경 및 진한 테두리 */}
      <div className="text-center mb-2 text-gray-700">
        <p className="text-sm sm:text-base font-semibold">{data.name}님의 사주</p>
        <p className="text-xs sm:text-sm">{data.birthDate}</p>
      </div>

      <div className="grid grid-cols-5 border-t border-l border-gray-300 bg-white">
        {/* Header Row */}
        <div className="bg-gray-100 border-r border-b border-gray-300"></div> {/* Empty corner */}
        {data.columns.map((col, index) => (
          <div key={index} className="text-center font-semibold text-sm sm:text-base text-gray-700 border-r border-b border-gray-300 py-1 bg-gray-100">
            {col}
          </div>
        ))}

        {/* Rows */}
        {renderLabelCell('十星', '(십성)', 'sipsungTopLabel')}
        {data.sipsungTop.map((item, index) => renderCell(item, `sipsungTop-${index}`))}

        {renderLabelCell('天干', '(천간)', 'cheonganLabel')}
        {data.cheonGan.map((item, index) => (
          <div key={`cheongan-${index}`} className="border-r border-b border-gray-300 p-1 flex justify-center items-center h-full">
            <SajuIcon {...item} />
          </div>
        ))}

        {renderLabelCell('地支', '(지지)', 'jijiLabel')}
        {data.jiJi.map((item, index) => (
          <div key={`jiji-${index}`} className="border-r border-b border-gray-300 p-1 flex justify-center items-center h-full">
            <SajuIcon {...item} />
          </div>
        ))}
        
        {renderLabelCell('十星', '(십성)', 'sipsungBottomLabel')}
        {data.sipsungBottom.map((item, index) => renderCell(item, `sipsungBottom-${index}`))}
        
        {renderLabelCell('十二運星', '(십이운성)', 'unseongLabel')}
        {data.unseong.map((item, index) => renderCell(item, `unseong-${index}`))}

        {renderLabelCell('十二神殺', '(십이신살)', 'sinsalLabel')}
        {data.sinsal.map((item, index) => renderCell(item, `sinsal-${index}`))}
        
        {renderLabelCell(data.gwiin[0].main as string, data.gwiin[0].sub as string, 'gwiinLabel')}
        {data.gwiin.slice(1).map((item, index) => renderCell(item, `gwiin-${index}`))}
      </div>
    </div>
  );
};

export default SajuTable;
