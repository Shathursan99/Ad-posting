import React from 'react';

export default function AdButton({ title, imageSrc }) {
  return (
    <div className="inline-flex flex-col h-[263px] m-2 items-center justify-center gap-[25px] pt-[19px] pb-[29px] px-[26px] relative bg-white rounded-[36px] shadow-[4px_3px_22px_#00000040]">
      <img
        className="relative w-[194px] h-[148px] object-cover"
        alt={title}
        src={imageSrc}
      />
      <div className="[font-family:'Roboto_Flex-Bold',Helvetica] font-bold text-black text-[28px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        {title}
      </div>
    </div>
  );
}
