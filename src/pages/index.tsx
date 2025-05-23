// pages/index.tsx
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import SajuTable, { SajuData } from '../components/SajuTable';

// 1) 사주 데이터 정의
const sajuData: SajuData = {
  name: '임제훈',
  birthDate: '1993년 7월27일 19:38',
  columns: ['時', '日', '月', '年'],
  sipsungTop: [
    { main: '傷官', sub: '(상관)' },
    { main: '比肩', sub: '(비견)' },
    { main: '傷官', sub: '(상관)' },
    { main: '傷官', sub: '(상관)' },
  ],
  cheonGan: [
    {
      hanja: '壬',
      hanjaColor: 'text-white',
      description: '陽水',
      descriptionkr: '임수',
      bgColor: 'bg-gray-700',
      descriptionColor: 'text-white',
      borderColor: 'border-gray-500',
    },
    {
      hanja: '丁',
      hanjaColor: 'text-white',
      description: '陰火',
      descriptionkr: '정화',
      bgColor: 'bg-red-700',
      descriptionColor: 'text-white',
      borderColor: 'border-red-700',
    },
    {
      hanja: '癸',
      hanjaColor: 'text-white',
      description: '陰水',
      descriptionkr: '계수',
      bgColor: 'bg-gray-700',
      descriptionColor: 'text-white',
      borderColor: 'border-gray-500',
    },
    {
      hanja: '癸',
      hanjaColor: 'text-white',
      description: '陰水',
      descriptionkr: '계수',
      bgColor: 'bg-gray-700',
      descriptionColor: 'text-white',
      borderColor: 'border-gray-500',
    },
  ],
  jiJi: [
    {
      hanja: '寅',
      hanjaColor: 'text-white',
      description: '陽木',
      descriptionkr: '인목',
      bgColor: 'bg-teal-700',
      descriptionColor: 'text-white',
      borderColor: 'border-teal-700',
    },
    {
      hanja: '巳',
      hanjaColor: 'text-white',
      description: '陰火',
      descriptionkr: '사화',
      bgColor: 'bg-red-700',
      descriptionColor: 'text-white',
      borderColor: 'border-red-700',
    },
    {
      hanja: '亥',
      hanjaColor: 'text-white',
      description: '陰水',
      descriptionkr: '해수',
      bgColor: 'bg-gray-700',
      descriptionColor: 'text-white',
      borderColor: 'border-gray-500',
    },
    {
      hanja: '酉',
      hanjaColor: 'text-black',
      description: '陰金',
      descriptionkr: '유금',
      bgColor: 'bg-white',
      descriptionColor: 'text-black',
      borderColor: 'border-gray-400',
    },
  ],
  sipsungBottom: [
    { main: '比肩', sub: '(비견)' },
    { main: '劫財', sub: '(겁재)' },
    { main: '食神', sub: '(식신)' },
    { main: '偏財', sub: '(편재)' },
  ],
  unseong: [
    { main: '死', sub: '(사)' },
    { main: '帝旺', sub: '(제왕)' },
    { main: '胎', sub: '(태)' },
    { main: '長生', sub: '(장생)' },
  ],
  sinsal: [
    { main: '劫殺', sub: '(겁살)' },
    { main: '地殺', sub: '(지살)' },
    { main: '驛馬殺', sub: '(역마살)' },
    { main: '將星殺', sub: '(장성살)' },
  ],
  gwiin: [
    { main: '貴人', sub: '(귀인)' },
    { main: '', sub: '' },
    { main: '', sub: '' },
    { main: '天乙', sub: '(천을귀인)' },
    {
      main: (
        <>
          天乙<br />
          天乙<br />
          文昌
        </>
      ),
      sub: (
        <>
          (천을귀인)<br />
          (천을귀인)<br />
          (문창귀인)
        </>
      ),
    },
  ],
};
// 2) 말풍선 텍스트
const bubble1 = `이제 본격적으로\n${sajuData.name}님의 사주팔자를\n분석해볼 차례네요.`;
const bubble2 = '사주팔자 속에 숨겨진\n내 삶의 비밀을 찾아 떠나보자.';

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);
  const [bottomPx, setBottomPx] = useState<number>(0);

  useEffect(() => {
    const baseW      = 362;
    const maxScale   = 420 / baseW;
    const baseBottom = 5.2 * 16;
    const maxBottom  = 6 * 16;

    const update = () => {
      if (!containerRef.current) return;
      const parentW = containerRef.current.clientWidth;
      let s = parentW / baseW;
      s = Math.min(s, maxScale);           // 362→420 사이만 확대
      setScale(s);
      setBottomPx(Math.min(baseBottom * s, maxBottom));
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className="mx-auto w-full max-w-md bg-white font-Hangul relative">
      {/* 배경 이미지 */}
      <div className="w-full relative">
        <Image
          src="/images/background.png"
          alt="사주 배경"
          layout="responsive"
          width={375}
          height={4162}
          quality={100}
          priority
        />

        {/* 말풍선 1 */}
        <div className="absolute z-10" style={{ top:'5%', left:'10%' }}>
          <div className="rounded-lg text-center">
            <p className="whitespace-pre-line text-md">{bubble1}</p>
          </div>
        </div>
        {/* 말풍선 2 */}
        <div className="absolute z-10" style={{ top:'15%', left:'5%' }}>
          <div className="rounded-lg text-center">
            <p className="whitespace-pre-line text-md">{bubble2}</p>
          </div>
        </div>

        {/* 테이블 래퍼: inset-x 비율/픽셀 유지, bottom은 계산된 px */}
        <div
          ref={containerRef}
          className="absolute inset-x-[5%] sm:inset-x-[11px] z-20"
          style={{ bottom: `${bottomPx}px` }}
        >
          {/* 테이블 스케일링 */}
          <div style={{ transform: `scale(${scale})`, transformOrigin:'bottom left' }}>
            <SajuTable data={sajuData} />
          </div>
        </div>
      </div>
    </div>
  );
}