import { useEffect, useState } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.7)), url('https://cdn.poehali.dev/files/photo_5418229410483082685_y.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className={`text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 text-sm tracking-[0.5em] uppercase font-light opacity-80">
            Exclusive Event
          </div>
          <h1 className="font-display text-[5rem] md:text-[10rem] lg:text-[14rem] font-black tracking-tighter mb-8 leading-none">
            XXCLUSIVE
          </h1>
          <div className="space-y-6 text-lg md:text-xl font-light tracking-wider">
            <div className="inline-block border-2 border-white px-8 py-3 backdrop-blur-sm bg-white/5">
              <p className="font-bold text-2xl">23.01.2026</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-center items-center text-base">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏰</span>
                <span className="uppercase">Время: ?</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span className="uppercase">Место: ?</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-[2px] h-12 bg-white"></div>
          </div>
        </div>
      </div>

      <section className="relative py-32 px-6 bg-black">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://cdn.poehali.dev/files/photo_5418229410483082685_y.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="w-16 h-[2px] bg-white mx-auto mb-8"></div>
              <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tight">
                Дресс-код
              </h2>
              <div className="w-16 h-[2px] bg-white mx-auto mt-8"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-3xl md:text-4xl font-display font-bold uppercase tracking-wide">
                  Современная <br/>клубная одежда
                </div>
                <div className="w-24 h-1 bg-white"></div>
              </div>
              <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
                Элегантная и стильная
              </p>
              <p className="text-lg opacity-70 leading-relaxed">
                Только премиальные образы для тех, кто ценит эксклюзивность и статус
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[3/4] bg-gradient-to-br from-zinc-900 via-zinc-800 to-black border-2 border-white/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">👔</div>
                    <p className="text-xs uppercase tracking-wider">Look 1</p>
                  </div>
                </div>
              </div>
              <div className="aspect-[3/4] bg-gradient-to-br from-black via-zinc-900 to-zinc-800 border-2 border-white/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">👗</div>
                    <p className="text-xs uppercase tracking-wider">Look 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-white text-black overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://cdn.poehali.dev/files/photo_5418229410483082685_y.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%) contrast(150%)'
            }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="w-16 h-[2px] bg-black mx-auto mb-8"></div>
              <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tight">
                О вечеринке
              </h2>
              <div className="w-16 h-[2px] bg-black mx-auto mt-8"></div>
            </div>
          </div>
          
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-3xl md:text-4xl font-display font-bold uppercase mb-8 leading-tight">
                Незабываемая ночь, которая войдёт в легенды
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-6 group">
                <div className="text-6xl text-center group-hover:scale-110 transition-transform">🎵</div>
                <h3 className="font-display text-3xl font-bold uppercase text-center">
                  Отличная<br/>музыка
                </h3>
                <p className="text-center text-gray-600 leading-relaxed">
                  Лучшие треки и миксы, которые зарядят тебя энергией до утра
                </p>
              </div>
              
              <div className="space-y-6 group">
                <div className="text-6xl text-center group-hover:scale-110 transition-transform">🥂</div>
                <h3 className="font-display text-3xl font-bold uppercase text-center">
                  Элитный<br/>алкоголь
                </h3>
                <p className="text-center text-gray-600 leading-relaxed">
                  Премиальные напитки для искушённых гостей вечеринки
                </p>
              </div>
              
              <div className="space-y-6 group">
                <div className="text-6xl text-center group-hover:scale-110 transition-transform">⭐</div>
                <h3 className="font-display text-3xl font-bold uppercase text-center">
                  Ты —<br/>VIP персона
                </h3>
                <p className="text-center text-gray-600 leading-relaxed">
                  Эксклюзивный сервис и особое отношение к каждому
                </p>
              </div>
            </div>
            
            <div className="pt-12 space-y-8 max-w-4xl mx-auto">
              <div className="border-l-4 border-black pl-8 space-y-4">
                <p className="text-xl md:text-2xl leading-relaxed font-light">
                  XXCLUSIVE — это не просто вечеринка. Это опыт, который запомнится надолго.
                </p>
                <p className="text-xl md:text-2xl leading-relaxed font-light">
                  Здесь встречаются люди, которые ценят качество, стиль и эксклюзивность.
                </p>
                <p className="text-xl md:text-2xl leading-relaxed font-bold">
                  Приготовься к ночи, которая станет легендой.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-16 px-6 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://cdn.poehali.dev/files/photo_5418229410483082685_y.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
        <div className="relative z-10">
          <p className="font-display text-5xl font-bold tracking-wider mb-4">
            XXCLUSIVE
          </p>
          <div className="flex items-center justify-center gap-4 text-sm uppercase tracking-widest opacity-70">
            <span>23.01.2026</span>
            <span>•</span>
            <span>Be Ready</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
