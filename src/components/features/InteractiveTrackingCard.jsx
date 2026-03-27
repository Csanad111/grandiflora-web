import React, { useState } from 'react';
import GlassEffectLayers from '../ui/GlassEffectLayers';

export default function InteractiveTrackingCard({ project }) {
  const [stage, setStage] = useState('idle'); // 'idle', 'summary', 'detailed'

  const handleCardClick = () => {
    if (stage === 'idle') {
      setStage('summary');
    } else {
      setStage('idle');
    }
  };

  const handleToggleDetails = (e) => {
    e.stopPropagation();
    if (stage === 'summary') {
      setStage('detailed');
    } else if (stage === 'detailed') {
      setStage('summary');
    }
  };

  const progressVal = project?.progress_percentage ?? 65;

  return (
    <div
      onClick={handleCardClick}
      className={`relative w-full rounded-[24px] cursor-pointer overflow-hidden transition-all ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm ${
        stage === 'detailed' ? 'duration-[2000ms]' : 'duration-[1500ms]'
      }`}
      style={{
        minHeight: stage === 'idle' ? '195px' : '140px',
        height: stage === 'detailed' ? '700px' : (stage === 'idle' ? '195px' : '140px'),
        maxHeight: stage === 'detailed' ? '700px' : (stage === 'idle' ? '195px' : '140px'),
      }}
    >
      <GlassEffectLayers />

      {/* --- SCROLL MASKS (HEADER & FOOTER) --- */}
      <div 
        className={`absolute top-0 left-0 right-0 h-[135px] z-20 transition-all duration-[2000ms] bg-white/80 backdrop-blur-[24px] ${
          stage === 'detailed' ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'
        }}
      />
      <div 
        className={`absolute bottom-0 left-0 right-0 h-[80px] z-20 transition-all duration-[2000ms] bg-white/80 backdrop-blur-[24px] ${
          stage === 'detailed' ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          WebkitMaskImage: 'linear-gradient(to top, black 0%, black 70%, transparent 100%)',
          maskImage: 'linear-gradient(to top, black 0%, black 70%, transparent 100%)'
        }}
      />

      {/* --- GREY PROGRESS TRACK BACKGROUND --- */}
      <div 
        className={`absolute z-30 transition-all duration-[750ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden shadow-sm top-[78px] left-[26px] w-[calc(100%-52px)] h-[10px] rounded-[24px] bg-white/70 shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)] ${
          stage === 'idle' ? 'opacity-0 delay-0' : 'opacity-100 delay-[300ms]'
        }`}
      />

      {/* --- MORPHING GREEN PILL (BUTTON <-> PROGRESS FILL) --- */}
      <div 
        className={`absolute z-30 transition-all ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden shadow-sm ${
          stage === 'idle' 
            ? 'top-[65px] left-[calc(50%-113.5px)] w-[227px] h-[65px] rounded-[24px] bg-primary hover:bg-primary-dark hover:shadow-xl active:scale-95 duration-[750ms]' 
            : 'top-[78px] left-[26px] h-[10px] rounded-[24px] bg-accent duration-[1000ms]'
        }`}
        style={{ width: stage === 'idle' ? '227px' : `calc((100% - 52px) * ${progressVal} / 100)` }}
      />

      {/* --- MORPHING TITLE TEXT --- */}
      <div 
        className={`absolute z-40 transition-all duration-[750ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center pointer-events-none ${
          stage === 'idle' 
            ? 'top-[79px] left-[50%] -translate-x-1/2' 
            : 'top-[30px] left-[26px] translate-x-0'
        }`}
      >
        <span 
          className={`font-display tracking-wide whitespace-nowrap transition-colors duration-[750ms] ${
            stage === 'idle' ? 'text-white text-[24px] drop-shadow-md tracking-[0.14px]' : 'text-primary text-[20px] drop-shadow-none'
          }`}
        >
          Nyomon követés
        </span>
      </div>

      {/* --- SUMMARY CONTENT & TOGGLE AREA --- */}
      {/* Percentage Text */}
      <div 
        className={`absolute z-40 top-[30px] right-[26px] font-display text-primary text-[24px] pointer-events-none transition-all duration-[700ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          stage !== 'idle' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {progressVal}%
      </div>

      {/* Clickable Toggle Area for Details (Status + Chevron) */}
      <div 
        onClick={handleToggleDetails}
        className={`absolute z-50 bottom-0 right-0 left-0 h-[60px] cursor-pointer group/toggle transition-all duration-[750ms] ${
          stage === 'idle' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Status Text Block */}
        <div 
          className={`absolute bottom-5 left-[26px] flex items-center gap-2 transition-all duration-[750ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            stage === 'summary' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-sm" />
          <span className="text-primary font-body text-[15px] opacity-80">
            {project?.status === 'in_progress' ? 'Folyamatban' : (project?.status ?? 'Folyamatban')}
          </span>
        </div>

        {/* Chevron Icon */}
        <div 
          className="absolute bottom-5 right-6 transition-all duration-[750ms]"
        >
          <svg 
            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5e6e5e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            className={`transition-transform duration-[2000ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              stage === 'detailed' ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* --- DETAILED / EXPANDED BLOCK --- */}
      <div 
        className={`absolute inset-0 z-10 w-full px-[26px] pb-[80px] pt-[140px] transition-all ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-y-auto ${
          stage === 'detailed' ? 'opacity-100 translate-y-0 duration-[2000ms] pointer-events-auto' : 'opacity-0 -translate-y-8 duration-[2000ms] pointer-events-none'
        }`}
      >
        {/* Project Info Overview */}
        <div className="space-y-3 text-primary mb-8 border-t border-primary/10 pt-6 mt-1">
          <div className="flex justify-between items-center">
            <span className="opacity-70 font-sans text-sm tracking-wide">Helyszín:</span>
            <span className="font-medium font-serif text-right">{project?.address ?? 'Budapest, Budai Vár köz 4.'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="opacity-70 font-sans text-sm tracking-wide">Várható befejezés:</span>
            <span className="font-medium font-serif">{project?.estimated_completion_date ? new Date(project.estimated_completion_date).toLocaleDateString('hu-HU') : 'Folyamatban'}</span>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-primary font-display text-[18px] mb-6">Legutóbbi értesítések</h3>
          <div className="relative border-l-2 border-accent/40 pl-6 space-y-7 ml-1">
            {project?.updates?.map((update) => (
              <div key={update.id} className="relative">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-accent border-[3px] border-surface shadow-sm" />
                <span className="text-[11px] text-primary/60 mb-1 block uppercase tracking-wider font-semibold">
                  {new Date(update.created_at).toLocaleDateString('hu-HU')}
                </span>
                <p className="text-primary font-body text-[15.5px] leading-relaxed">
                  {update.message}
                </p>
                {update.media_url && (
                  <div className="mt-4 rounded-[16px] overflow-hidden border border-white/60 shadow-sm relative group bg-white/20">
                    <img src={update.media_url} alt="Update" className="w-full h-[140px] object-cover mix-blend-multiply" />
                  </div>
                )}
              </div>
            ))}
            {(!project?.updates || project?.updates?.length === 0) && (
              <p className="text-primary/50 italic font-serif text-[15px]">Hamarosan érkeznek az első frissítések...</p>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
