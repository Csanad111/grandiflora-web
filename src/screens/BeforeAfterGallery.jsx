import React from 'react';
import GlassEffectLayers from '../components/ui/GlassEffectLayers';
import Header from '../components/ui/Header';

// Mock data for the scrollable gallery feed with realistic images
const MOCK_GALLERY_PROJECTS = [
  {
    id: 'p1',
    name: 'Elvadult telek rendbetétele',
    date: '2025. október 12.',
    before_url: 'https://images.unsplash.com/photo-1598463991276-88ab89781ce5?auto=format&fit=crop&w=600',
    after_url: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=600'
  },
  {
    id: 'p2',
    name: 'Térkőzés és növényesítés',
    date: '2025. augusztus 03.',
    before_url: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=600', // Dirt/construction
    after_url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600' // Beautiful patio
  },
  {
    id: 'p3',
    name: 'Tavaszi metszés & gyepszőnyeg',
    date: '2025. május 21.',
    before_url: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600',
    after_url: 'https://images.unsplash.com/photo-1588602652618-f23554aa50aa?auto=format&fit=crop&w=600'
  }
];

export default function BeforeAfterGallery({ project, onBack }) {
  let displayProjects = [...MOCK_GALLERY_PROJECTS];
  
  if (project?.before_after_media?.length > 0) {
    const userMedia = project.before_after_media[0];
    displayProjects.unshift({
      id: 'current-user',
      name: 'A te kerted',
      date: 'Folyamatban...',
      before_url: userMedia.before_url,
      after_url: userMedia.after_url
    });
  }

  const handleShare = async (title, text) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      alert('A megosztás nem támogatott ezen a böngészőn. Másold ki a linket!');
    }
  };

  return (
    <div className="absolute inset-0 z-20 flex flex-col bg-transparent animate-in slide-in-from-right duration-300">
      <Header onBack={onBack} showProfile={false} />

      <div className="mt-[6px] px-[35px] mb-4 text-center">
        <h1 className="text-primary text-[30px] font-display leading-tight mb-2 tracking-wide">
          Galéria
        </h1>
        <p className="text-black text-[16px] font-body">
          Valós átalakulások, gyönyörű kertek
        </p>
      </div>

      {/* Scrollable Feed */}
      <div className="flex-1 px-[22px] overflow-y-auto no-scrollbar pb-10 flex flex-col gap-6">
        {displayProjects.map((p) => (
          <div key={p.id} className="relative group rounded-[24px]">
            <GlassEffectLayers />
            <div className="relative z-10 p-5 flex flex-col gap-4">
              
              {/* Header: Name and Date */}
              <div className="flex justify-between items-end border-b border-primary/10 pb-2">
                <h3 className="text-primary text-[17px] font-display tracking-wide leading-tight max-w-[65%]">{p.name}</h3>
                <span className="text-primary/60 text-[12px] font-body">{p.date}</span>
              </div>

              {/* Side-by-side Images Container */}
              <div className="flex flex-row gap-3">
                {/* Before Image */}
                <div className="relative flex-1 aspect-[3/4] rounded-[16px] overflow-hidden shadow-sm">
                  <img src={p.before_url} alt="Előtte" className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/50 backdrop-blur-md text-white rounded-md text-[10px] font-bold tracking-widest uppercase">
                    Előtte
                  </div>
                </div>

                {/* After Image */}
                <div className="relative flex-1 aspect-[3/4] rounded-[16px] overflow-hidden shadow-sm">
                  <img src={p.after_url} alt="Utána" className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-accent/90 backdrop-blur-md text-white rounded-md text-[10px] font-bold tracking-widest uppercase shadow-[0_2px_8px_rgba(137,156,133,0.5)]">
                    Utána
                  </div>
                </div>
              </div>

              {/* Share Button for this project */}
              <button
                onClick={() => handleShare(p.name, 'Nézd meg ezt a csodás kert átalakítást a Grandiflorától!')}
                className="w-full h-[45px] mt-1 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-[20px] flex items-center justify-center gap-2 font-display text-[15px] transition-all duration-300 active:scale-95"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 6L12 2L8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Megosztás
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
