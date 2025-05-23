import React, { JSX } from 'react';
import SajuIcon from './SajuIcon';

export interface SajuData {
  name: string;
  birthDate: string;
  columns: string[];
  sipsungTop: Array<{ main: string; sub?: string }>;
  cheonGan: Array<{
    hanja: string;
    hanjaColor?: string;
    description: string;
    descriptionkr: string;
    bgColor?: string;
    descriptionColor?: string;
    borderColor?: string;
  }>;
  jiJi: Array<{
    hanja: string;
    hanjaColor?: string;
    description: string;
    descriptionkr: string;
    bgColor?: string;
    descriptionColor?: string;
    borderColor?: string;
  }>;
  sipsungBottom: Array<{ main: string; sub?: string }>;
  unseong: Array<{ main: string; sub?: string }>;
  sinsal: Array<{ main: string; sub?: string }>;
  gwiin: Array<{ main: string | JSX.Element; sub?: string | JSX.Element }>;
}

interface SajuTableProps {
  data: SajuData;
}

const SajuTable: React.FC<SajuTableProps> = ({ data }) => {
  const renderCell = (
    item: { main: string | JSX.Element; sub?: string | JSX.Element },
    key?: string | number,
    idx?: number,
    rowType?: string
  ) => (
    <div
      key={key}
      className={`text-center border-b border-black ${
        idx === 0
          ? `${rowType === 'sipsungTop' ? '' : 'border-l border-black '}border-r border-r-gray-300`
          : idx === 3
          ? 'border-r border-black'
          : 'border-r border-r-gray-300'
      } p-1 flex flex-col justify-center items-center h-full min-h-[40px]`}
    >
      <span className="text-md font-medium leading-tight">{item.main}</span>
      {item.sub && <span className="text-[9px] leading-tight">{item.sub}</span>}
    </div>
  );

  const renderLabelCell = (label: string, subLabel: string, key: string) => (
    <div
      key={key}
      className={`text-center px-1 py-2 flex flex-col justify-center items-center h-full ${
        key === 'cheonganLabel'
          ? 'border-r border-black border-b border-b-gray-300'
          : ['sipsungBottomLabel','unseongLabel','sinsalLabel','gwiinLabel'].includes(key)
            ? 'border-r border-r-gray-300 border-b border-black'
            : 'border-r border-black border-b border-black'
      }`}
    >
      <span className="text-md font-semibold">{label}</span>
      <span className="text-xs">{subLabel}</span>
    </div>
  );

  const renderGwiinSpecialCell = (
    item: { main: JSX.Element; sub?: JSX.Element },
    key?: string | number,
    idx?: number
  ) => {
    const mainTexts = React.Children.toArray(item.main.props.children)
      .filter(c => typeof c === 'string')
      .map(c => (c as string).trim());
    const subTexts = item.sub
      ? React.Children.toArray(item.sub.props.children)
          .filter(c => typeof c === 'string')
          .map(c => (c as string).trim())
      : [];

    const combined: string[] = [];
    for (let i = 0; i < Math.max(mainTexts.length, subTexts.length); i++) {
      mainTexts[i] && combined.push(mainTexts[i]);
      subTexts[i] && combined.push(subTexts[i]);
    }

    return (
      <div
        key={key}
        className={`text-center border-b border-black ${
          idx === 0
            ? 'border-l border-black border-r border-r-gray-300'
            : idx === 3
            ? 'border-r border-black'
            : 'border-r border-r-gray-300'
        } p-1 flex flex-wrap justify-center items-center h-full min-h-[40px] gap-x-1`}
      >
        {combined.map((txt, i) => (
          <span
            key={i}
            className={
              i % 2 === 0
                ? 'text-md font-medium leading-tight'
                : 'text-[11px] font-medium leading-tight'
            }
          >
            {txt}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div
      // ★ 고정 크기: 362×645(px) ★
      className="bg-[#f6f3ef] shadow-lg flex flex-col"
      style={{ width: 358, height: 645 }}
    >
      <div className="text-center pt-[15px]">
        <p className="text-md mb-2 font-Hangul">{data.name}님의 사주</p>
        <p className="text-2xl font-Hangul">{data.birthDate}</p>
      </div>

      <div className="flex-grow grid bg-[#f6f3ef] grid-cols-5 px-[15px] pt-[1.5rem] pb-[1.3rem]">
        <div className="border-black border-r border-b"></div>
        {data.columns.map((col, i) => (
          <div
            key={i}
            className="text-center font-semibold text-2xl border-black border-r border-b p-0 flex items-center justify-center"
          >
            {col}
          </div>
        ))}

        {renderLabelCell('十星','(십성)','sipsungTopLabel')}
        {data.sipsungTop.map((it,i)=>renderCell(it,`st-${i}`,i,'sipsungTop'))}

        {renderLabelCell('天干','(천간)','cheonganLabel')}
        {data.cheonGan.map((it,i)=>(
          <div
            key={i}
            className={`
              ${i===0?'border-l border-black':''}
              ${i===data.cheonGan.length-1?'border-r border-black':'border-r border-r-gray-300'}
              border-b border-black p-1 flex justify-center items-center h-full
            `}
          >
            <SajuIcon {...it} />
          </div>
        ))}

        {renderLabelCell('地支','(지지)','jijiLabel')}
        {data.jiJi.map((it,i)=>(
          <div
            key={i}
            className={`
              ${i===0?'border-l border-black':''}
              ${i===data.jiJi.length-1?'border-r border-black':'border-r border-r-gray-300'}
              border-b border-b-black p-1 flex justify-center items-center h-full
            `}
          >
            <SajuIcon {...it} />
          </div>
        ))}

        {renderLabelCell('十星','(십성)','sipsungBottomLabel')}
        {data.sipsungBottom.map((it,i)=>renderCell(it,`sb-${i}`,i,'sipsungBottom'))}

        {renderLabelCell('十二運星','(십이운성)','unseongLabel')}
        {data.unseong.map((it,i)=>renderCell(it,`un-${i}`,i,'unseong'))}

        {renderLabelCell('十二神殺','(십이신살)','sinsalLabel')}
        {data.sinsal.map((it,i)=>renderCell(it,`ss-${i}`,i,'sinsal'))}

        {renderLabelCell(data.gwiin[0].main as string, data.gwiin[0].sub as string,'gwiinLabel')}
        {data.gwiin.slice(1).map((it,i)=>
          i===3 && typeof it.main!=='string' && typeof it.sub!=='string'
            ? renderGwiinSpecialCell(it as any,`gw-${i}`,i)
            : renderCell(it,`gw-${i}`,i,'gwiin')
        )}
      </div>
    </div>
  );
};

export default SajuTable;
