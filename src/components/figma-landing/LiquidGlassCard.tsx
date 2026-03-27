import { imgBlur } from "../../imports/svg-xg2d1";

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function LiquidGlassCard({ children, className = "" }: LiquidGlassCardProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Shadow layer */}
      <div className="absolute inset-[-26px]">
        <div
          className="absolute blur-[20px] inset-[31px_26px_21px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-47.5%_-50.63%] mask-size-[195%_195%] rounded-[24px]"
          style={{ maskImage: `url('${imgBlur}')` }}
        >
          <div
            aria-hidden="true"
            className="absolute backdrop-blur-[40px] bg-[rgba(0,0,0,0.08)] inset-0 mix-blend-hard-light pointer-events-none rounded-[24px]"
          />
        </div>
      </div>
      
      {/* Glass effect */}
      <div className="absolute bg-[rgba(255,255,255,0.07)] inset-0 mix-blend-screen rounded-[24px]" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
