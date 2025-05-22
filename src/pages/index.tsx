import React, {JSX} from 'react';
import Image from 'next/image';
import SajuTable from '../components/SajuTable';


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


// 실제 사주 데이터 (OCR 및 이미지 참고, 색상 SajuIcon에 맞게 조정)
const sajuData: SajuData = {
  name: '김로켓',
  birthDate: '1980년 8월27일 08:10',
  columns: ['時', '日', '月', '年'],
  sipsungTop: [
    { main: '傷官', sub: '(상관)' },
    { main: '比肩', sub: '(비견)' },
    { main: '傷官', sub: '(상관)' },
    { main: '傷官', sub: '(상관)' },
  ],
  cheonGan: [ // bgColor 등은 SajuIcon에 전달되어 아이콘 스타일 결정
    { hanja: '壬', description: '陽水', bgColor: 'bg-gray-700', hanjaColor: 'text-white', descriptionColor: 'text-gray-300', borderColor: 'border-gray-500' },
    { hanja: '丁', description: '陰火', bgColor: 'bg-red-500', hanjaColor: 'text-white', descriptionColor: 'text-red-100', borderColor: 'border-red-700'  },
    { hanja: '癸', description: '陰水', bgColor: 'bg-gray-700', hanjaColor: 'text-white', descriptionColor: 'text-gray-300', borderColor: 'border-gray-500'  },
    { hanja: '癸', description: '陰水', bgColor: 'bg-gray-700', hanjaColor: 'text-white', descriptionColor: 'text-gray-300', borderColor: 'border-gray-500'  },
  ],
  jiJi: [
    { hanja: '寅', description: '陽木', bgColor: 'bg-teal-500', hanjaColor: 'text-white', descriptionColor: 'text-teal-100', borderColor: 'border-teal-700'  },
    { hanja: '巳', description: '陰火', bgColor: 'bg-red-500', hanjaColor: 'text-white', descriptionColor: 'text-red-100', borderColor: 'border-red-700'  },
    { hanja: '亥', description: '陰水', bgColor: 'bg-gray-700', hanjaColor: 'text-white', descriptionColor: 'text-gray-300', borderColor: 'border-gray-500'  },
    { hanja: '酉', description: '陰金', bgColor: 'bg-white', hanjaColor: 'text-gray-700', descriptionColor: 'text-gray-600', borderColor: 'border-gray-400' },
  ],
  sipsungBottom: [
    { main: '比肩', sub: '(비견)' }, { main: '劫財', sub: '(겁재)' }, { main: '食神', sub: '(식신)' }, { main: '偏財', sub: '(편재)' },
  ],
  unseong: [
    { main: '死', sub: '(사)' }, { main: '帝旺', sub: '(제왕)' }, { main: '胎', sub: '(태)' }, { main: '長生', sub: '(장생)' },
  ],
  sinsal: [
    { main: '劫殺', sub: '(겁살)' }, { main: '地殺', sub: '(지살)' }, { main: '驛馬殺', sub: '(역마살)' }, { main: '將星殺', sub: '(장성살)' },
  ],
  gwiin: [
    { main: '貴人', sub: '(귀인)' },
    { main: '(없음)', sub: '' },
    { main: '(없음)', sub: '' },
    { main: '天乙', sub: '(천을귀인)' },
    { main: <>天乙<br/>太極<br/>文昌</>, sub: <>(천을귀인)<br/>(태극귀인)<br/>(문창귀인)</> },
  ],
};

const speechBubble1Text = "나의 운명은 어떤 모습일까?\n하늘의 별들처럼 정해져 있는 걸까?";
const speechBubble2Text = "사주팔자 속에 숨겨진\n내 삶의 비밀을 찾아 떠나보자.";


const HomePage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen font-sans">
      {/* 배경 이미지 */}
      <Image
        src="/images/background.png" 
        alt="사주 배경"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="-z-10" 
      />

      {/* 컨텐츠 컨테이너 (max-w-md로 중앙 정렬 및 반응형) */}
      <div className="relative mx-auto w-full max-w-md h-screen flex flex-col items-center justify-start pt-[18vh]"> {/* 상단 타이틀 영역만큼 패딩 */}
        
        {/* 첫번째 말풍선 텍스트 */}
        <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 w-[70%] text-center">
          <p className="text-sm text-gray-700 whitespace-pre-line leading-snug">
            {speechBubble1Text}
          </p>
        </div>

        {/* 두번째 말풍선 텍스트 */}
        <div className="absolute top-[51vh] left-1/2 -translate-x-1/2 w-[70%] text-center">
           <p className="text-sm text-gray-700 whitespace-pre-line leading-snug">
            {speechBubble2Text}
          </p>
        </div>
        
        {/* 사주 테이블 컨테이너 */}
        <div className="absolute bottom-[2vh] w-[92%] left-1/2 -translate-x-1/2 px-2">
          <SajuTable data={sajuData} />
        </div>

      </div>
    </div>
  );
};

export default HomePage;
