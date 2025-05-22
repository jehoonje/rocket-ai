import React, { JSX } from "react";
import Image from "next/image";
import SajuTable from "../components/SajuTable"; // 경로 확인

interface SajuData {
  name: string;
  birthDate: string;
  columns: string[];
  sipsungTop: Array<{ main: string; sub?: string }>;
  cheonGan: Array<{
    hanja: string;
    description: string;
    bgColor?: string;
    hanjaColor?: string;
    descriptionColor?: string;
    borderColor?: string;
  }>;
  jiJi: Array<{
    hanja: string;
    description: string;
    bgColor?: string;
    hanjaColor?: string;
    descriptionColor?: string;
    borderColor?: string;
  }>;
  sipsungBottom: Array<{ main: string; sub?: string }>;
  unseong: Array<{ main: string; sub?: string }>;
  sinsal: Array<{ main: string; sub?: string }>;
  gwiin: Array<{ main: string | JSX.Element; sub?: string | JSX.Element }>;
}

const sajuData: SajuData = {
  name: "김로켓",
  birthDate: "1980년 8월27일 08:10",
  columns: ["時", "日", "月", "年"],
  sipsungTop: [
    { main: "傷官", sub: "(상관)" },
    { main: "比肩", sub: "(비견)" },
    { main: "傷官", sub: "(상관)" },
    { main: "傷官", sub: "(상관)" },
  ],
  cheonGan: [
    {
      hanja: "壬",
      description: "陽水",
      bgColor: "bg-gray-700",
      hanjaColor: "text-white",
      descriptionColor: "text-gray-300",
      borderColor: "border-gray-500",
    },
    {
      hanja: "丁",
      description: "陰火",
      bgColor: "bg-red-500",
      hanjaColor: "text-white",
      descriptionColor: "text-red-100",
      borderColor: "border-red-700",
    },
    {
      hanja: "癸",
      description: "陰水",
      bgColor: "bg-gray-700",
      hanjaColor: "text-white",
      descriptionColor: "text-gray-300",
      borderColor: "border-gray-500",
    },
    {
      hanja: "癸",
      description: "陰水",
      bgColor: "bg-gray-700",
      hanjaColor: "text-white",
      descriptionColor: "text-gray-300",
      borderColor: "border-gray-500",
    },
  ],
  jiJi: [
    {
      hanja: "寅",
      description: "陽木",
      bgColor: "bg-teal-500",
      hanjaColor: "text-white",
      descriptionColor: "text-teal-100",
      borderColor: "border-teal-700",
    },
    {
      hanja: "巳",
      description: "陰火",
      bgColor: "bg-red-500",
      hanjaColor: "text-white",
      descriptionColor: "text-red-100",
      borderColor: "border-red-700",
    },
    {
      hanja: "亥",
      description: "陰水",
      bgColor: "bg-gray-700",
      hanjaColor: "text-white",
      descriptionColor: "text-gray-300",
      borderColor: "border-gray-500",
    },
    {
      hanja: "酉",
      description: "陰金",
      bgColor: "bg-white",
      hanjaColor: "text-gray-700",
      descriptionColor: "text-gray-600",
      borderColor: "border-gray-400",
    },
  ],
  sipsungBottom: [
    { main: "比肩", sub: "(비견)" },
    { main: "劫財", sub: "(겁재)" },
    { main: "食神", sub: "(식신)" },
    { main: "偏財", sub: "(편재)" },
  ],
  unseong: [
    { main: "死", sub: "(사)" },
    { main: "帝旺", sub: "(제왕)" },
    { main: "胎", sub: "(태)" },
    { main: "長生", sub: "(장생)" },
  ],
  sinsal: [
    { main: "劫殺", sub: "(겁살)" },
    { main: "地殺", sub: "(지살)" },
    { main: "驛馬殺", sub: "(역마살)" },
    { main: "將星殺", sub: "(장성살)" },
  ],
  gwiin: [
    { main: "貴人", sub: "(귀인)" },
    { main: "(없음)", sub: "" },
    { main: "(없음)", sub: "" },
    { main: "天乙", sub: "(천을귀인)" },
    {
      main: (
        <>
          天乙
          <br />
          太極
          <br />
          文昌
        </>
      ),
      sub: (
        <>
          (천을귀인)
          <br />
          (태극귀인)
          <br />
          (문창귀인)
        </>
      ),
    },
  ],
};

const speechBubble1Text =
  `이제 본격적으로\n ${sajuData.name}님의 사주팔자를\n 분석해볼 차례네요.`;
const speechBubble2Text = 
  "사주팔자 속에 숨겨진\n내 삶의 비밀을 찾아 떠나보자.";
const speechBubble1Position = { top: "31%", left: "0%" };
const speechBubble2Position = { top: "49.3%", left: "39%" };

const HomePage: React.FC = () => {
  const desiredMinHeight = "2081px"; // 페이지 전체의 최소 높이 (스크롤을 위해)

  return (
    // 1. 최상위 div: 배경 이미지 영역
    <div className="relative w-full min-h-screen font-sans">
      <Image
        src="/images/background.png"
        alt="사주 배경"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="-z-10"
      />

      {/* 2. 실제 컨텐츠를 담는 컨테이너.
          - position: relative 추가 (SajuTable의 absolute 기준점)
          - minHeight: desiredMinHeight 유지 (페이지 전체 스크롤 확보)
          - paddingBottom: SajuTable이 fixed/absolute로 빠져나갈 공간 확보
      */}
      <div
        className="relative mx-auto w-full max-w-md flex flex-col items-center pt-[6vh] sm:pt-[8vh]"
        style={{
          minHeight: desiredMinHeight,
         
        }}
      >
        {/* 말풍선 영역 - Absolute Positioning */}
        {/* 첫번째 말풍선 */}
        <div
          className="absolute w-[70%] sm:w-[60%] md:w-[50%] z-20"
          style={{
            top: speechBubble1Position.top,
            left: speechBubble1Position.left,
          }}
        >
          <div className="text-center">
            <p className="text-md text-gray-200 sm:text-base whitespace-pre-line bg-black/40 p-3">
              {speechBubble1Text}
            </p>
          </div>
        </div>

        {/* 두번째 말풍선 */}
        <div
          className="absolute w-[70%] sm:w-[60%] md:w-[50%] z-20"
          style={{
            top: speechBubble2Position.top,
            left: speechBubble2Position.left,
            transform: "translateX(-50%)",
          }}
        >
           <div className="text-center">
             <p className="text-md text-gray-200 whitespace-pre-line bg-black/40 p-3">
              {speechBubble2Text}
            </p>
          </div>
        </div>

        <div
          className="mt-auto w-full border-2 px-2 z-100"
          style={{ bottom: 'full' }} // '50px'
        >
          <SajuTable data={sajuData} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
