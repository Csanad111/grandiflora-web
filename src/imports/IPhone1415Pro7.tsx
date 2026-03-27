import svgPaths from "./svg-ps6oigg4jb";
import { imgBlur } from "./svg-xg2d1";
import imgHatterLandingPageVilagos1 from "figma:asset/e52242e810493c97f53f1ca1f6cfaf88889902e7.png";
import imgImage1 from "figma:asset/f852d6507b7ac42e9c5c757087bc0a4075b99b26.png";

function SignOutCircle({ className }: { className?: string }) {
  return <div className={className || "size-[24px]"} data-name="Sign_out_circle" />;
}
type StatusBarIPhoneProps = {
  className?: string;
  time?: string;
};

function StatusBarIPhone({ className, time = "9:41" }: StatusBarIPhoneProps) {
  return (
    <div className={className || "content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[24px] relative w-[402px]"} data-name="Status bar - iPhone">
      <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[1.5px] relative" data-name="Time">
        <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {time}
        </p>
      </div>
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
            <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Frame">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
                <g id="Frame">
                  <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
                  <path d={svgPaths.p7a14d80} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
                  <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LiquidGlassClearLight({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[160px]"} data-name="Liquid Glass - Clear/Light">
      <div className="absolute inset-[-26px]" data-name="Shadow">
        <div className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[24px]" data-name="Blur" style={{ maskImage: `url('${imgBlur}')` }}>
          <div aria-hidden="true" className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[24px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 mix-blend-screen rounded-[24px]" data-name="Glass Effect" />
    </div>
  );
}

export default function IPhone1415Pro({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white h-[852px] overflow-clip relative w-[393px]"} data-name="iPhone 14 & 15 Pro - 7">
      <div className="absolute h-[852px] left-[-2px] top-0 w-[395px]" data-name="Hatter landing page vilagos 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHatterLandingPageVilagos1} />
      </div>
      <LiquidGlassClearLight className="absolute h-[195px] left-[21px] top-[328px] w-[351px]" />
      <div className="absolute bg-[#5e6e5e] h-[65px] left-[83px] rounded-[20px] top-[390px] w-[227px]" />
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[35px] leading-[normal] left-[141px] not-italic text-[20px] text-white top-[408px] tracking-[0.14px] w-[125px]">Bejelentkezes</p>
      <LiquidGlassClearLight className="absolute h-[195px] left-[21px] top-[549px] w-[351px]" />
      <div className="absolute bg-[#f3edf7] h-[65px] left-[83px] rounded-[20px] top-[611px] w-[227px]" />
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[35px] leading-[normal] left-[141px] not-italic text-[#5e6e5e] text-[20px] top-[629px] tracking-[0.14px] w-[112px]">Regisztráció</p>
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] h-[21px] leading-[normal] left-[176px] not-italic text-[#5e6e5e] text-[16px] top-[759px] tracking-[0.112px] w-[41px]">ugrás</p>
      <StatusBarIPhone className="absolute content-stretch flex gap-[154px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[24px] right-0 top-0" />
      <SignOutCircle className="absolute left-[24px] size-[24px] top-[72px]" />
      <div className="absolute h-[572px] left-[-309px] top-[1468px] w-[858px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}