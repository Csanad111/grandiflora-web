import svgPaths from "./svg-4slh7iwba5";
import imgHater31 from "figma:asset/03ae2a4dcc5d38153cf827363b470b13c0718d98.png";
import imgHattrer51 from "figma:asset/d4f4d71f2ca2e532154e9be8e147f8dcc8dccc37.png";
import { imgBlur, imgBlur1, imgBlur2, imgBlur3 } from "./svg-zx317";

function Time() {
  return <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px" data-name="Time" />;
}

function StatusBar() {
  return (
    <div className="absolute content-stretch flex h-[58px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[24px] right-0 top-0" data-name="Status bar">
      <Time />
    </div>
  );
}

function Levels() {
  return (
    <div className="absolute h-[22px] left-[calc(70%-1.6px)] top-[18px] w-[95.5px]" data-name="Levels">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95.5 22">
        <g id="Levels">
          <path clipRule="evenodd" d={svgPaths.p1ab0f300} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
          <path clipRule="evenodd" d={svgPaths.p18be5000} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
          <g id="Frame">
            <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="59.2568" y="5.5" />
            <path d={svgPaths.p6449300} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="60.7568" y="7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Blur() {
  return (
    <div className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[24px]" data-name="Blur" style={{ maskImage: `url('${imgBlur}')` }}>
      <div aria-hidden="true" className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Shadow() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Blur />
    </div>
  );
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 mix-blend-screen rounded-[24px]" data-name="Glass Effect" />;
}

function Blur1() {
  return (
    <div className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[24px]" data-name="Blur" style={{ maskImage: `url('${imgBlur1}')` }}>
      <div aria-hidden="true" className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Shadow1() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Blur1 />
    </div>
  );
}

function GlassEffect1() {
  return <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 mix-blend-screen rounded-[24px]" data-name="Glass Effect" />;
}

function Blur2() {
  return (
    <div className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[24px]" data-name="Blur" style={{ maskImage: `url('${imgBlur2}')` }}>
      <div aria-hidden="true" className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Shadow2() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Blur2 />
    </div>
  );
}

function GlassEffect2() {
  return <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 mix-blend-screen rounded-[24px]" data-name="Glass Effect" />;
}

function Group() {
  return (
    <div className="absolute contents left-[calc(80%+8.6px)] top-[calc(5%+29.1px)]">
      <div className="absolute left-[calc(80%+8.6px)] size-[24px] top-[calc(5%+29.1px)]" data-name="Temperature_light" />
    </div>
  );
}

function Time1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[1.5px] relative" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Frame">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p7a14d80} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels1() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pr-px pt-px relative size-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Time2() {
  return <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px" data-name="Time" />;
}

function StatusBar1() {
  return (
    <div className="absolute content-stretch flex h-[58px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[24px] right-0 top-0" data-name="Status bar">
      <Time2 />
    </div>
  );
}

function Levels2() {
  return (
    <div className="absolute h-[22px] left-[calc(70%-1.6px)] top-[18px] w-[95.5px]" data-name="Levels">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95.5 22">
        <g id="Levels">
          <path clipRule="evenodd" d={svgPaths.p1ab0f300} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
          <path clipRule="evenodd" d={svgPaths.p18be5000} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
          <g id="Frame">
            <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="59.2568" y="5.5" />
            <path d={svgPaths.p6449300} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="60.7568" y="7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Blur3() {
  return (
    <div className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[24px]" data-name="Blur" style={{ maskImage: `url('${imgBlur}')` }}>
      <div aria-hidden="true" className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Shadow3() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Blur3 />
    </div>
  );
}

function GlassEffect3() {
  return <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 mix-blend-screen rounded-[24px]" data-name="Glass Effect" />;
}

function Blur4() {
  return (
    <div className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[24px]" data-name="Blur" style={{ maskImage: `url('${imgBlur1}')` }}>
      <div aria-hidden="true" className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Shadow4() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Blur4 />
    </div>
  );
}

function GlassEffect4() {
  return <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 mix-blend-screen rounded-[24px]" data-name="Glass Effect" />;
}

function Blur5() {
  return (
    <div className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[24px]" data-name="Blur" style={{ maskImage: `url('${imgBlur2}')` }}>
      <div aria-hidden="true" className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Shadow5() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Blur5 />
    </div>
  );
}

function GlassEffect5() {
  return <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 mix-blend-screen rounded-[24px]" data-name="Glass Effect" />;
}

function Group1() {
  return (
    <div className="absolute contents left-[calc(80%+8.6px)] top-[calc(5%+29.1px)]">
      <div className="absolute left-[calc(80%+8.6px)] size-[24px] top-[calc(5%+29.1px)]" data-name="Temperature_light" />
    </div>
  );
}

function Time3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[1.5px] relative" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Frame">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p7a14d80} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels3() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pr-px pt-px relative size-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function ImgAlt({ className }: { className?: string }) {
  return (
    <div className={className || "absolute inset-[74.4%_21.12%_17.97%_61.07%]"} data-name="Img_alt_">
      <div className="absolute inset-[37.5%_29.17%_20.83%_12.5%]">
        <div className="absolute inset-[-1.39%_-0.65%_-3.43%_-0.65%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.3665 30.5716">
            <path d={svgPaths.p20470e00} id="Vector 340" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_12.5%_20.83%_45.83%]">
        <div className="absolute inset-[-1.25%_-1.23%_-4.29%_-3.43%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.5261 24.6239">
            <path d={svgPaths.p14f42700} id="Vector 341" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_12.5%_62.5%_66.67%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5833 14.5833">
          <circle cx="7.29167" cy="7.29167" fill="var(--fill-0, #5E6E5E)" id="Ellipse 46" r="7.29167" />
        </svg>
      </div>
    </div>
  );
}

function Tree({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[calc(60%+17.2px)] size-[24px] top-[calc(80%-16.4px)]"} data-name="Tree">
      <div className="absolute h-[3px] left-[12px] top-[17px] w-0">
        <div className="absolute inset-[-33.33%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
            <path d="M1 1V4" id="Vector 575" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[7px] left-[6.04px] top-[10px] w-[11.914px]" data-name="Subtract">
        <div className="absolute inset-[-14.29%_-8.41%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9188 9">
            <path d={svgPaths.p3ee76800} fill="var(--stroke-0, #5E6E5E)" id="Subtract" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[6px] left-[6px] top-[4px] w-[12px]">
        <div className="absolute inset-[-16.67%_3.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1796 8">
            <path d={svgPaths.pccc3e00} id="Vector 573" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Blur6() {
  return (
    <div className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[34px]" data-name="Blur" style={{ maskImage: `url('${imgBlur3}')` }}>
      <div aria-hidden="true" className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[34px]" />
    </div>
  );
}

function Shadow6() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Blur6 />
    </div>
  );
}

function Fill() {
  return (
    <div className="absolute inset-0 rounded-[34px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[34px]">
        <div className="absolute bg-[#262626] inset-0 mix-blend-color-dodge rounded-[34px]" />
        <div className="absolute bg-[rgba(250,250,250,0.7)] inset-0 rounded-[34px]" />
      </div>
    </div>
  );
}

function GlassEffect6() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[34px]" data-name="Glass Effect" />;
}

function Time4() {
  return <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px" data-name="Time" />;
}

function StatusBar2() {
  return (
    <div className="absolute content-stretch flex h-[58px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[24px] right-0 top-0" data-name="Status bar">
      <Time4 />
    </div>
  );
}

function Levels4() {
  return (
    <div className="absolute h-[22px] left-[calc(70%-1.6px)] top-[18px] w-[95.5px]" data-name="Levels">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95.5 22">
        <g id="Levels">
          <path clipRule="evenodd" d={svgPaths.p1ab0f300} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
          <path clipRule="evenodd" d={svgPaths.p18be5000} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
          <g id="Frame">
            <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="59.2568" y="5.5" />
            <path d={svgPaths.p6449300} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="60.7568" y="7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Blur7() {
  return (
    <div className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[24px]" data-name="Blur" style={{ maskImage: `url('${imgBlur}')` }}>
      <div aria-hidden="true" className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Shadow7() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Blur7 />
    </div>
  );
}

function GlassEffect7() {
  return <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 mix-blend-screen rounded-[24px]" data-name="Glass Effect" />;
}

function Blur8() {
  return (
    <div className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[24px]" data-name="Blur" style={{ maskImage: `url('${imgBlur1}')` }}>
      <div aria-hidden="true" className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Shadow8() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Blur8 />
    </div>
  );
}

function GlassEffect8() {
  return <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 mix-blend-screen rounded-[24px]" data-name="Glass Effect" />;
}

function Blur9() {
  return (
    <div className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[24px]" data-name="Blur" style={{ maskImage: `url('${imgBlur2}')` }}>
      <div aria-hidden="true" className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Shadow9() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Blur9 />
    </div>
  );
}

function GlassEffect9() {
  return <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 mix-blend-screen rounded-[24px]" data-name="Glass Effect" />;
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(80%+8.6px)] top-[calc(5%+29.1px)]">
      <div className="absolute left-[calc(80%+8.6px)] size-[24px] top-[calc(5%+29.1px)]" data-name="Temperature_light" />
    </div>
  );
}

function Time5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[1.5px] relative" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Frame">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p7a14d80} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels5() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pr-px pt-px relative size-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Time6() {
  return <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px" data-name="Time" />;
}

function StatusBar3() {
  return (
    <div className="absolute content-stretch flex h-[58px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[24px] right-0 top-0" data-name="Status bar">
      <Time6 />
    </div>
  );
}

function Levels6() {
  return (
    <div className="absolute h-[22px] left-[calc(70%-1.6px)] top-[18px] w-[95.5px]" data-name="Levels">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95.5 22">
        <g id="Levels">
          <path clipRule="evenodd" d={svgPaths.p1ab0f300} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
          <path clipRule="evenodd" d={svgPaths.p18be5000} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
          <g id="Frame">
            <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="59.2568" y="5.5" />
            <path d={svgPaths.p6449300} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="60.7568" y="7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Blur10() {
  return (
    <div className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[24px]" data-name="Blur" style={{ maskImage: `url('${imgBlur}')` }}>
      <div aria-hidden="true" className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Shadow10() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Blur10 />
    </div>
  );
}

function GlassEffect10() {
  return <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 mix-blend-screen rounded-[24px]" data-name="Glass Effect" />;
}

function Blur11() {
  return (
    <div className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[24px]" data-name="Blur" style={{ maskImage: `url('${imgBlur1}')` }}>
      <div aria-hidden="true" className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Shadow11() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Blur11 />
    </div>
  );
}

function GlassEffect11() {
  return <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 mix-blend-screen rounded-[24px]" data-name="Glass Effect" />;
}

function Blur12() {
  return (
    <div className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[24px]" data-name="Blur" style={{ maskImage: `url('${imgBlur2}')` }}>
      <div aria-hidden="true" className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Shadow12() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Blur12 />
    </div>
  );
}

function GlassEffect12() {
  return <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 mix-blend-screen rounded-[24px]" data-name="Glass Effect" />;
}

function Group3() {
  return (
    <div className="absolute contents left-[calc(80%+8.6px)] top-[calc(5%+29.1px)]">
      <div className="absolute left-[calc(80%+8.6px)] size-[24px] top-[calc(5%+29.1px)]" data-name="Temperature_light" />
    </div>
  );
}

function Time7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[1.5px] relative" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Frame">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p7a14d80} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels7() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pr-px pt-px relative size-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Blur13() {
  return (
    <div className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[34px]" data-name="Blur" style={{ maskImage: `url('${imgBlur3}')` }}>
      <div aria-hidden="true" className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[34px]" />
    </div>
  );
}

function Shadow13() {
  return (
    <div className="absolute inset-[-26px]" data-name="Shadow">
      <Blur13 />
    </div>
  );
}

function Fill1() {
  return (
    <div className="absolute inset-0 rounded-[34px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[34px]">
        <div className="absolute bg-[#262626] inset-0 mix-blend-color-dodge rounded-[34px]" />
        <div className="absolute bg-[rgba(250,250,250,0.7)] inset-0 rounded-[34px]" />
      </div>
    </div>
  );
}

function GlassEffect13() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[34px]" data-name="Glass Effect" />;
}

export default function IPhone1415Pro() {
  return (
    <div className="bg-white relative size-full" data-name="iPhone 14 & 15 Pro - 11">
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[27px] leading-[normal] left-[calc(30%-3.9px)] not-italic text-[#5e6e5e] text-[25px] top-[47px] w-[165px]">GRANDIFLORA</p>
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[27px] leading-[normal] left-[calc(30%-3.9px)] not-italic text-[#5e6e5e] text-[25px] top-[47px] w-[165px]">GRANDIFLORA</p>
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[27px] leading-[normal] left-[calc(30%-3.9px)] not-italic text-[#5e6e5e] text-[25px] top-[47px] w-[165px]">GRANDIFLORA</p>
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[27px] leading-[normal] left-[calc(30%-3.9px)] not-italic text-[#5e6e5e] text-[25px] top-[47px] w-[165px]">GRANDIFLORA</p>
      <div className="absolute h-[918px] left-[calc(100%+1346px)] top-[-109px] w-[616px]" data-name="Hater 3 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHater31} />
      </div>
      <StatusBar />
      <Levels />
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[calc(10%+32.45px)] text-[17px] text-black text-center top-[18.75px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
      <div className="absolute h-[918px] left-[-55px] top-0 w-[616px]" data-name="Hattrer 5 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHattrer51} />
      </div>
      <div className="absolute flex h-[1.026px] items-center justify-center left-[calc(10%+2.7px)] top-[calc(95%-17.1px)] w-[310.998px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.19deg]">
          <div className="h-0 relative w-[311px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 311 1">
                <line id="Line 3" opacity="0.3" stroke="var(--stroke-0, #758A76)" x2="311" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[195px] left-[calc(10%-18.3px)] top-[calc(15%+4.3px)] w-[351px]" data-name="Liquid Glass - Clear/Light">
        <Shadow />
        <GlassEffect />
      </div>
      <div className="absolute bg-[#5e6e5e] h-[65px] left-[calc(20%+4.4px)] rounded-[20px] top-[calc(20%+20.4px)] w-[227px]" />
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[35px] leading-[normal] left-[calc(30%+4.1px)] not-italic text-[20px] text-white top-[calc(20%+35.4px)] tracking-[0.14px] w-[148px]">Nyomon követés</p>
      <div className="absolute h-[200px] left-[calc(10%-18.3px)] top-[calc(40%+13.8px)] w-[351px]" data-name="Liquid Glass - Clear/Light">
        <Shadow1 />
        <GlassEffect1 />
      </div>
      <div className="absolute bg-[#5e6e5e] h-[64px] left-[calc(20%+4.4px)] rounded-[20px] top-[calc(50%-10px)] w-[227px]" />
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[35px] leading-[0] left-[calc(30%+7.1px)] not-italic text-[#f3edf7] text-[20px] top-[calc(50%+4px)] tracking-[0.14px] w-[144px]">
        <span className="leading-[normal] text-white tracking-[0.112px]">Időpont</span>
        <span className="leading-[normal] tracking-[0.112px]">{` `}</span>
        <span className="leading-[normal] text-white tracking-[0.112px]">foglalás</span>
      </p>
      <div className="absolute h-[195px] left-[calc(10%-17.3px)] top-[calc(70%-17.6px)] w-[350px]" data-name="Liquid Glass - Clear/Light">
        <Shadow2 />
        <GlassEffect2 />
      </div>
      <div className="absolute bg-[#5e6e5e] h-[67px] left-[calc(20%+4.4px)] rounded-[20px] top-[calc(75%+0.5px)] w-[227px]" />
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[35px] leading-[normal] left-[calc(30%+18.1px)] not-italic text-[20px] text-white top-[calc(75%+16.5px)] tracking-[0.14px] w-[121px]">Előtte - utána</p>
      <p className="absolute font-['DM_Serif_Text:Regular',sans-serif] h-[21px] leading-[normal] left-[calc(40%+7.8px)] not-italic text-[#5e6e5e] text-[20px] top-[calc(95%+2.9px)] w-[64px]">Rolunk</p>
      <div className="absolute h-[99px] left-0 top-0 w-[393px]">
        <div className="absolute inset-[-16.16%_-4.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 425 131">
            <g filter="url(#filter0_d_1_1738)" id="Rectangle 6">
              <path d="M16 16H409V115H16V16Z" fill="var(--fill-0, #F3EDF7)" fillOpacity="0.77" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="131" id="filter0_d_1_1738" width="425" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.431373 0 0 0 0 0.368627 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1738" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1738" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(80%+35.6px)] size-[24px] top-[52px]" data-name="User">
        <div className="absolute inset-[66.67%_16.67%_-16.67%_16.67%]">
          <div className="absolute inset-[-8.33%_-4.55%_54.61%_-4.55%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4554 6.44736">
              <path d={svgPaths.p137797c0} id="Ellipse 45" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[33.33%] right-[33.33%] top-[16.67%]">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" id="Ellipse 46" r="4" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inria_Serif:Regular',sans-serif] h-[14px] leading-[normal] left-[calc(10%-1.3px)] not-italic text-[#5e6e5e] text-[16px] top-[calc(5%+8.1px)] tracking-[0.112px] w-[35px]">{` 18°C`}</p>
      <Group />
      <div className="absolute h-[16px] left-[calc(10%-11.3px)] top-[calc(5%+10.1px)] w-[7px]" data-name="Union">
        <div className="absolute inset-[-3.13%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 17">
            <path d={svgPaths.p9a83c80} fill="var(--stroke-0, #5E6E5E)" id="Union" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[2px] left-[calc(10%-7.8px)] top-[calc(5%+21.1px)] w-0">
        <div className="absolute inset-[-25%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
            <path d="M0.5 2.5V0.5" id="Vector 508" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[calc(10%-4.3px)] top-[calc(5%+18.1px)] w-[2px]">
        <div className="absolute inset-[-0.5px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
            <path d="M0.5 0.5H2.5" id="Vector 509" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[calc(10%-4.3px)] top-[calc(5%+16.1px)] w-[2px]">
        <div className="absolute inset-[-0.5px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
            <path d="M0.5 0.5H2.5" id="Vector 509" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[calc(10%-4.3px)] top-[calc(5%+14.1px)] w-[2px]">
        <div className="absolute inset-[-0.5px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
            <path d="M0.5 0.5H2.5" id="Vector 509" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[calc(10%-4.3px)] top-[calc(5%+12.1px)] w-[4px]">
        <div className="absolute inset-[-0.5px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1">
            <path d="M0.5 0.5H4.5" id="Vector 512" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[154px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[24px] right-0 top-0" data-name="Status bar">
        <Time1 />
        <Levels1 />
      </div>
      <StatusBar1 />
      <Levels2 />
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[calc(10%+32.45px)] text-[17px] text-black text-center top-[18.75px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
      <div className="absolute h-[918px] left-[-55px] top-0 w-[616px]" data-name="Hattrer 5 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHattrer51} />
      </div>
      <div className="absolute flex h-[1.026px] items-center justify-center left-[calc(10%+2.7px)] top-[calc(95%-17.1px)] w-[310.998px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.19deg]">
          <div className="h-0 relative w-[311px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 311 1">
                <line id="Line 3" opacity="0.3" stroke="var(--stroke-0, #758A76)" x2="311" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[195px] left-[calc(10%-18.3px)] top-[calc(15%+4.3px)] w-[351px]" data-name="Liquid Glass - Clear/Light">
        <Shadow3 />
        <GlassEffect3 />
      </div>
      <div className="absolute bg-[#5e6e5e] h-[65px] left-[calc(20%+4.4px)] rounded-[20px] top-[calc(20%+20.4px)] w-[227px]" />
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[35px] leading-[normal] left-[calc(30%+4.1px)] not-italic text-[20px] text-white top-[calc(20%+35.4px)] tracking-[0.14px] w-[148px]">Nyomon követés</p>
      <div className="absolute h-[200px] left-[calc(10%-18.3px)] top-[calc(40%+13.8px)] w-[351px]" data-name="Liquid Glass - Clear/Light">
        <Shadow4 />
        <GlassEffect4 />
      </div>
      <div className="absolute bg-[#5e6e5e] h-[64px] left-[calc(20%+4.4px)] rounded-[20px] top-[calc(50%-10px)] w-[227px]" />
      <div className="absolute bg-[#5e6e5e] h-[64px] left-[calc(20%+4.4px)] rounded-[20px] top-[calc(50%-10px)] w-[227px]" />
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[35px] leading-[0] left-[calc(30%+7.1px)] not-italic text-[#f3edf7] text-[20px] top-[calc(50%+4px)] tracking-[0.14px] w-[144px]">
        <span className="leading-[normal] text-white tracking-[0.112px]">Időpont</span>
        <span className="leading-[normal] tracking-[0.112px]">{` `}</span>
        <span className="leading-[normal] text-white tracking-[0.112px]">foglalás</span>
      </p>
      <div className="absolute h-[195px] left-[calc(10%-17.3px)] top-[calc(70%-17.6px)] w-[350px]" data-name="Liquid Glass - Clear/Light">
        <Shadow5 />
        <GlassEffect5 />
      </div>
      <p className="absolute font-['DM_Serif_Text:Regular',sans-serif] h-[21px] leading-[normal] left-[calc(40%+7.8px)] not-italic text-[#5e6e5e] text-[20px] top-[calc(95%+2.9px)] w-[64px]">Rolunk</p>
      <div className="absolute h-[99px] left-0 top-0 w-[393px]">
        <div className="absolute inset-[-16.16%_-4.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 425 131">
            <g filter="url(#filter0_d_1_1738)" id="Rectangle 6">
              <path d="M16 16H409V115H16V16Z" fill="var(--fill-0, #F3EDF7)" fillOpacity="0.77" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="131" id="filter0_d_1_1738" width="425" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.431373 0 0 0 0 0.368627 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1738" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1738" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(80%+35.6px)] size-[24px] top-[52px]" data-name="User">
        <div className="absolute inset-[66.67%_16.67%_-16.67%_16.67%]">
          <div className="absolute inset-[-8.33%_-4.55%_54.61%_-4.55%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4554 6.44736">
              <path d={svgPaths.p137797c0} id="Ellipse 45" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[33.33%] right-[33.33%] top-[16.67%]">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" id="Ellipse 46" r="4" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Group1 />
      <div className="absolute content-stretch flex gap-[154px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[24px] right-0 top-0" data-name="Status bar">
        <Time3 />
        <Levels3 />
      </div>
      <div className="absolute h-0 left-[calc(40%+6.8px)] top-[calc(100%-20px)] w-[65px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 1">
            <line id="Line 12" stroke="var(--stroke-0, #5E6E5E)" x2="65" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[194.997px] items-center justify-center left-[calc(50%-0.5px)] top-[calc(70%-17.6px)] w-[1.016px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.7deg]">
          <div className="h-0 relative w-[195px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 195 1">
                <line id="Line 13" stroke="var(--stroke-0, white)" x2="195" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ImgAlt />
      <div className="absolute inset-[74.4%_61.07%_17.97%_21.12%]" data-name="Img_alt_">
        <div className="absolute inset-[37.5%_29.17%_20.83%_12.5%]">
          <div className="absolute inset-[-1.39%_-0.65%_-3.43%_-0.65%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.3665 30.5716">
              <path d={svgPaths.p20470e00} id="Vector 340" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_12.5%_20.83%_45.83%]">
          <div className="absolute inset-[-1.25%_-1.23%_-4.29%_-3.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.5261 24.6239">
              <path d={svgPaths.p14f42700} id="Vector 341" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_12.5%_62.5%_66.67%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5833 14.5833">
            <circle cx="7.29167" cy="7.29167" fill="var(--fill-0, #5E6E5E)" id="Ellipse 46" r="7.29167" />
          </svg>
        </div>
      </div>
      <Tree />
      <div className="absolute bg-white border border-[#5e6e5e] border-solid h-[38px] left-[calc(30%+7.1px)] rounded-[20px] top-[calc(70%-4.6px)] w-[146px]" />
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[21px] leading-[normal] left-[calc(40%+5.8px)] not-italic text-[#5e6e5e] text-[20px] top-[calc(70%+0.4px)] tracking-[0.14px] w-[66px]">Galéria</p>
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[18px] leading-[normal] left-[calc(10%+20.7px)] not-italic text-[20px] text-black top-[calc(85%+8.7px)] tracking-[0.14px] w-[93px]">Elotte</p>
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[20px] leading-[normal] left-[calc(60%+6.2px)] not-italic text-[20px] text-black top-[calc(85%+9.7px)] tracking-[0.14px] w-[104px]">Utana</p>
      <div className="absolute h-[29px] left-[10px] top-[50px] w-[36px]" data-name="Liquid Glass - Regular - Large">
        <Shadow6 />
        <Fill />
        <GlassEffect6 />
      </div>
      <div className="absolute inset-[6.54%_91.35%_92.37%_6.36%]">
        <div className="absolute inset-[-6.25%_-11.11%_-6.25%_-14.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2806 11.2494">
            <path d={svgPaths.p322cde00} fill="var(--stroke-0, #5E6E5E)" id="Vector 513" />
          </svg>
        </div>
      </div>
      <StatusBar2 />
      <Levels4 />
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[calc(10%+32.45px)] text-[17px] text-black text-center top-[18.75px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
      <div className="absolute h-[918px] left-[-55px] top-0 w-[616px]" data-name="Hattrer 5 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHattrer51} />
      </div>
      <div className="absolute flex h-[1.026px] items-center justify-center left-[calc(10%+2.7px)] top-[calc(95%-17.1px)] w-[310.998px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.19deg]">
          <div className="h-0 relative w-[311px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 311 1">
                <line id="Line 3" opacity="0.3" stroke="var(--stroke-0, #758A76)" x2="311" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[195px] left-[calc(10%-18.3px)] top-[calc(15%+4.3px)] w-[351px]" data-name="Liquid Glass - Clear/Light">
        <Shadow7 />
        <GlassEffect7 />
      </div>
      <div className="absolute bg-[#5e6e5e] h-[65px] left-[calc(20%+4.4px)] rounded-[20px] top-[calc(20%+20.4px)] w-[227px]" />
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[35px] leading-[normal] left-[calc(30%+4.1px)] not-italic text-[20px] text-white top-[calc(20%+35.4px)] tracking-[0.14px] w-[148px]">Nyomon követés</p>
      <div className="absolute h-[200px] left-[calc(10%-18.3px)] top-[calc(40%+13.8px)] w-[351px]" data-name="Liquid Glass - Clear/Light">
        <Shadow8 />
        <GlassEffect8 />
      </div>
      <div className="absolute bg-[#5e6e5e] h-[64px] left-[calc(20%+4.4px)] rounded-[20px] top-[calc(50%-10px)] w-[227px]" />
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[35px] leading-[0] left-[calc(30%+7.1px)] not-italic text-[#f3edf7] text-[20px] top-[calc(50%+4px)] tracking-[0.14px] w-[144px]">
        <span className="leading-[normal] text-white tracking-[0.112px]">Időpont</span>
        <span className="leading-[normal] tracking-[0.112px]">{` `}</span>
        <span className="leading-[normal] text-white tracking-[0.112px]">foglalás</span>
      </p>
      <div className="absolute h-[195px] left-[calc(10%-17.3px)] top-[calc(70%-17.6px)] w-[350px]" data-name="Liquid Glass - Clear/Light">
        <Shadow9 />
        <GlassEffect9 />
      </div>
      <div className="absolute bg-[#5e6e5e] h-[67px] left-[calc(20%+4.4px)] rounded-[20px] top-[calc(75%+0.5px)] w-[227px]" />
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[35px] leading-[normal] left-[calc(30%+18.1px)] not-italic text-[20px] text-white top-[calc(75%+16.5px)] tracking-[0.14px] w-[121px]">Előtte - utána</p>
      <div className="absolute h-[99px] left-0 top-0 w-[393px]">
        <div className="absolute inset-[-16.16%_-4.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 425 131">
            <g filter="url(#filter0_d_1_1738)" id="Rectangle 6">
              <path d="M16 16H409V115H16V16Z" fill="var(--fill-0, #F3EDF7)" fillOpacity="0.77" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="131" id="filter0_d_1_1738" width="425" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.431373 0 0 0 0 0.368627 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1738" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1738" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(80%+35.6px)] size-[24px] top-[52px]" data-name="User">
        <div className="absolute inset-[66.67%_16.67%_-16.67%_16.67%]">
          <div className="absolute inset-[-8.33%_-4.55%_54.61%_-4.55%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4554 6.44736">
              <path d={svgPaths.p137797c0} id="Ellipse 45" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[33.33%] right-[33.33%] top-[16.67%]">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" id="Ellipse 46" r="4" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inria_Serif:Regular',sans-serif] h-[14px] leading-[normal] left-[calc(10%-1.3px)] not-italic text-[#5e6e5e] text-[16px] top-[calc(5%+8.1px)] tracking-[0.112px] w-[35px]">{` 18°C`}</p>
      <Group2 />
      <div className="absolute h-[16px] left-[calc(10%-11.3px)] top-[calc(5%+10.1px)] w-[7px]" data-name="Union">
        <div className="absolute inset-[-3.13%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 17">
            <path d={svgPaths.p9a83c80} fill="var(--stroke-0, #5E6E5E)" id="Union" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[2px] left-[calc(10%-7.8px)] top-[calc(5%+21.1px)] w-0">
        <div className="absolute inset-[-25%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
            <path d="M0.5 2.5V0.5" id="Vector 508" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[calc(10%-4.3px)] top-[calc(5%+18.1px)] w-[2px]">
        <div className="absolute inset-[-0.5px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
            <path d="M0.5 0.5H2.5" id="Vector 509" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[calc(10%-4.3px)] top-[calc(5%+16.1px)] w-[2px]">
        <div className="absolute inset-[-0.5px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
            <path d="M0.5 0.5H2.5" id="Vector 509" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[calc(10%-4.3px)] top-[calc(5%+14.1px)] w-[2px]">
        <div className="absolute inset-[-0.5px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
            <path d="M0.5 0.5H2.5" id="Vector 509" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[calc(10%-4.3px)] top-[calc(5%+12.1px)] w-[4px]">
        <div className="absolute inset-[-0.5px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1">
            <path d="M0.5 0.5H4.5" id="Vector 512" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[154px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[24px] right-0 top-0" data-name="Status bar">
        <Time5 />
        <Levels5 />
      </div>
      <StatusBar3 />
      <Levels6 />
      <p className="-translate-x-1/2 absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[calc(10%+32.45px)] text-[17px] text-black text-center top-[18.75px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
      <div className="absolute h-[918px] left-[-55px] top-0 w-[616px]" data-name="Hattrer 5 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHattrer51} />
      </div>
      <div className="absolute flex h-[1.026px] items-center justify-center left-[calc(10%+2.7px)] top-[calc(95%-17.1px)] w-[310.998px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.19deg]">
          <div className="h-0 relative w-[311px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 311 1">
                <line id="Line 3" opacity="0.3" stroke="var(--stroke-0, #758A76)" x2="311" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[195px] left-[calc(10%-18.3px)] top-[calc(15%+4.3px)] w-[351px]" data-name="Liquid Glass - Clear/Light">
        <Shadow10 />
        <GlassEffect10 />
      </div>
      <div className="absolute bg-[#5e6e5e] h-[65px] left-[calc(20%+4.4px)] rounded-[20px] top-[calc(20%+20.4px)] w-[227px]" />
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[35px] leading-[normal] left-[calc(30%+4.1px)] not-italic text-[20px] text-white top-[calc(20%+35.4px)] tracking-[0.14px] w-[148px]">Nyomon követés</p>
      <div className="absolute h-[200px] left-[calc(10%-18.3px)] top-[calc(40%+13.8px)] w-[351px]" data-name="Liquid Glass - Clear/Light">
        <Shadow11 />
        <GlassEffect11 />
      </div>
      <div className="absolute bg-[#5e6e5e] h-[64px] left-[calc(20%+4.4px)] rounded-[20px] top-[calc(50%-10px)] w-[227px]" />
      <div className="absolute bg-[#5e6e5e] h-[64px] left-[calc(20%+4.4px)] rounded-[20px] top-[calc(50%-10px)] w-[227px]" />
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[35px] leading-[0] left-[calc(30%+7.1px)] not-italic text-[#f3edf7] text-[20px] top-[calc(50%+4px)] tracking-[0.14px] w-[144px]">
        <span className="leading-[normal] text-white tracking-[0.112px]">Időpont</span>
        <span className="leading-[normal] tracking-[0.112px]">{` `}</span>
        <span className="leading-[normal] text-white tracking-[0.112px]">foglalás</span>
      </p>
      <div className="absolute h-[195px] left-[calc(10%-17.3px)] top-[calc(70%-17.6px)] w-[350px]" data-name="Liquid Glass - Clear/Light">
        <Shadow12 />
        <GlassEffect12 />
      </div>
      <div className="absolute h-[99px] left-0 top-0 w-[393px]">
        <div className="absolute inset-[-16.16%_-4.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 425 131">
            <g filter="url(#filter0_d_1_1738)" id="Rectangle 6">
              <path d="M16 16H409V115H16V16Z" fill="var(--fill-0, #F3EDF7)" fillOpacity="0.77" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="131" id="filter0_d_1_1738" width="425" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.431373 0 0 0 0 0.368627 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1738" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1738" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[16.447px] left-[calc(90%+0.57px)] top-[calc(5%+10.1px)] w-[15.455px]" data-name="Vector">
        <div className="absolute inset-[-6.08%_-6.47%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4554 18.4474">
            <path d={svgPaths.p3bb4070} id="Vector" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Group3 />
      <div className="absolute content-stretch flex gap-[154px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[24px] right-0 top-0" data-name="Status bar">
        <Time7 />
        <Levels7 />
      </div>
      <div className="absolute flex h-[194.997px] items-center justify-center left-[calc(50%-0.5px)] top-[calc(70%-17.6px)] w-[1.016px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.7deg]">
          <div className="h-0 relative w-[195px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 195 1">
                <line id="Line 13" stroke="var(--stroke-0, white)" x2="195" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[74.95%_63.1%_17.43%_19.08%]" data-name="Img_alt_">
        <div className="absolute inset-[37.5%_29.17%_20.83%_12.5%]">
          <div className="absolute inset-[-1.39%_-0.65%_-3.43%_-0.65%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.3665 30.5716">
              <path d={svgPaths.p20470e00} id="Vector 340" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_12.5%_20.83%_45.83%]">
          <div className="absolute inset-[-1.25%_-1.23%_-4.29%_-3.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.5261 24.6239">
              <path d={svgPaths.p14f42700} id="Vector 341" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_12.5%_62.5%_66.67%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5833 14.5833">
            <circle cx="7.29167" cy="7.29167" fill="var(--fill-0, #5E6E5E)" id="Ellipse 46" r="7.29167" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[74.95%_19.08%_17.43%_63.1%]" data-name="Img_alt_">
        <div className="absolute inset-[37.5%_29.17%_20.83%_12.5%]">
          <div className="absolute inset-[-1.39%_-0.65%_-3.43%_-0.65%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.3665 30.5716">
              <path d={svgPaths.p20470e00} id="Vector 340" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_12.5%_20.83%_45.83%]">
          <div className="absolute inset-[-1.25%_-1.23%_-4.29%_-3.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.5261 24.6239">
              <path d={svgPaths.p14f42700} id="Vector 341" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_12.5%_62.5%_66.67%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5833 14.5833">
            <circle cx="7.29167" cy="7.29167" fill="var(--fill-0, #5E6E5E)" id="Ellipse 46" r="7.29167" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(60%+25.2px)] size-[24px] top-[calc(80%-12.4px)]" data-name="Tree">
        <div className="absolute h-[3px] left-[12px] top-[17px] w-0">
          <div className="absolute inset-[-33.33%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
              <path d="M1 1V4" id="Vector 575" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[7px] left-[6.04px] top-[10px] w-[11.914px]" data-name="Subtract">
          <div className="absolute inset-[-14.29%_-8.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9188 9">
              <path d={svgPaths.p3ee76800} fill="var(--stroke-0, #5E6E5E)" id="Subtract" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[6px] left-[6px] top-[4px] w-[12px]">
          <div className="absolute inset-[-16.67%_3.42%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1796 8">
              <path d={svgPaths.pccc3e00} id="Vector 573" stroke="var(--stroke-0, #5E6E5E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#5e6e5e] border border-[#5e6e5e] border-solid h-[38px] left-[calc(30%+7.1px)] rounded-[20px] top-[calc(70%-4.6px)] w-[146px]" />
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[21px] leading-[normal] left-[calc(40%+5.8px)] not-italic text-[20px] text-white top-[calc(70%+0.4px)] tracking-[0.14px] w-[66px]">Galéria</p>
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[21px] leading-[normal] left-[calc(20%+0.4px)] not-italic text-[#5e6e5e] text-[20px] top-[calc(85%-7.3px)] tracking-[0.14px] w-[55px]">Előtte</p>
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[21px] leading-[normal] left-[calc(60%+24.2px)] not-italic text-[#5e6e5e] text-[20px] top-[calc(85%-7.3px)] tracking-[0.14px] w-[59px]">Utána</p>
      <div className="absolute h-[29px] left-[10px] top-[50px] w-[36px]" data-name="Liquid Glass - Regular - Large">
        <Shadow13 />
        <Fill1 />
        <GlassEffect13 />
      </div>
      <div className="absolute inset-[6.54%_91.35%_92.37%_6.36%]">
        <div className="absolute inset-[-6.25%_-11.11%_-6.25%_-14.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2806 11.2494">
            <path d={svgPaths.p322cde00} fill="var(--stroke-0, #5E6E5E)" id="Vector 513" />
          </svg>
        </div>
      </div>
    </div>
  );
}