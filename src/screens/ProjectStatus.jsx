import React from 'react';
import GlassEffectLayers from '../components/ui/GlassEffectLayers';
import Header from '../components/ui/Header';

export default function ProjectStatus({ project, onBack }) {
  if (!project) return null;

  return (
    <div className="absolute inset-0 z-20 flex flex-col bg-transparent animate-in slide-in-from-right duration-300">
      <Header onBack={onBack} showProfile={false} />

      {/* Page Title */}
      <div className="mt-[6px] px-[35px] mb-8">
        <h1 className="text-primary text-[30px] font-display leading-tight mb-2 tracking-wide">
          Nyomon követés
        </h1>
        <p className="text-black text-[16px] font-body">
          A kerted építésének folyamata
        </p>
      </div>

      {/* Main Status Glass Card */}
      <div className="px-[22px] mb-8">
        <div className="relative w-full rounded-[24px]">
          <GlassEffectLayers />
          <div className="relative z-10 w-full p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-primary font-semibold">Aktuális állapot:</span>
            <span className="px-3 py-1 bg-accent/20 text-primary rounded-full text-sm font-medium">
              {project.status === 'in_progress' ? 'Folyamatban' : project.status}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[24px] font-display text-primary">{project.progress_percentage}%</span>
              <span className="text-sm text-primary/70">Készültségi fok</span>
            </div>
            <div className="w-full h-3 bg-white/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${project.progress_percentage}%` }}
              />
            </div>
          </div>

          <div className="space-y-2 text-primary">
            <div className="flex justify-between border-t border-black/5 pt-2">
              <span className="opacity-70">Helyszín:</span>
              <span className="font-medium text-right">{project.address}</span>
            </div>
            <div className="flex justify-between border-t border-black/5 pt-2">
              <span className="opacity-70">Várható befejezés:</span>
              <span className="font-medium">{new Date(project.estimated_completion_date).toLocaleDateString('hu-HU')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Timeline Updates */}
      <div className="flex-1 overflow-y-auto px-[35px] pb-10 custom-scrollbar">
        <h3 className="text-primary font-display text-[20px] mb-4">Legutóbbi értesítések</h3>
        <div className="relative border-l-2 border-accent/30 pl-6 space-y-8">
          {project.updates?.map((update) => (
            <div key={update.id} className="relative">
              <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm" />
              <span className="text-xs text-primary/60 mb-1 block">
                {new Date(update.created_at).toLocaleDateString('hu-HU')}
              </span>
              <p className="text-primary font-body">
                {update.message}
              </p>
              {update.media_url && (
                <div className="mt-3 rounded-xl overflow-hidden border border-white/50 shadow-md">
                  <img src={update.media_url} alt="Update" className="w-full h-32 object-cover" />
                </div>
              )}
            </div>
          ))}
          {(!project.updates || project.updates.length === 0) && (
            <p className="text-primary/50 italic">Hamarosan érkeznek az első frissítések...</p>
          )}
        </div>
      </div>
    </div>
  );
}
