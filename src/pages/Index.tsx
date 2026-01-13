import { useEffect, useState } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    const calculateTimeLeft = () => {
      const eventDate = new Date('2026-01-23T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const lookImages = [
    'https://cdn.poehali.dev/files/photo_5411357913781048246_y.jpg',
    'https://cdn.poehali.dev/files/photo_5411357913781048253_y.jpg',
    'https://cdn.poehali.dev/files/photo_5411357913781048247_y.jpg',
    'https://cdn.poehali.dev/files/photo_5411357913781048248_y.jpg',
    'https://cdn.poehali.dev/files/photo_5411357913781048249_y.jpg'
  ];

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
              <span className="uppercase">Время: ?</span>
              <span className="hidden md:inline">•</span>
              <span className="uppercase">Место: ?</span>
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

      <section className="relative py-32 px-6 bg-black border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-[2px] bg-white mx-auto mb-8"></div>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight mb-4">
              Обратный отсчёт
            </h2>
            <div className="w-16 h-[2px] bg-white mx-auto mt-8"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="border-2 border-white/20 p-8 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all">
              <div className="font-display text-5xl md:text-6xl font-bold mb-2">
                {timeLeft.days}
              </div>
              <div className="text-sm uppercase tracking-widest opacity-70">Дней</div>
            </div>
            <div className="border-2 border-white/20 p-8 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all">
              <div className="font-display text-5xl md:text-6xl font-bold mb-2">
                {timeLeft.hours}
              </div>
              <div className="text-sm uppercase tracking-widest opacity-70">Часов</div>
            </div>
            <div className="border-2 border-white/20 p-8 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all">
              <div className="font-display text-5xl md:text-6xl font-bold mb-2">
                {timeLeft.minutes}
              </div>
              <div className="text-sm uppercase tracking-widest opacity-70">Минут</div>
            </div>
            <div className="border-2 border-white/20 p-8 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all">
              <div className="font-display text-5xl md:text-6xl font-bold mb-2">
                {timeLeft.seconds}
              </div>
              <div className="text-sm uppercase tracking-widest opacity-70">Секунд</div>
            </div>
          </div>
        </div>
      </section>

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
          
          <div className="space-y-16">
            <div className="text-center space-y-8 max-w-3xl mx-auto">
              <div className="text-3xl md:text-4xl font-display font-bold uppercase tracking-wide">
                Современная клубная одежда
              </div>
              <div className="w-24 h-1 bg-white mx-auto"></div>
              <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
                Элегантная и стильная
              </p>
              <p className="text-lg opacity-70 leading-relaxed">
                Только премиальные образы для тех, кто ценит эксклюзивность и статус
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {lookImages.map((img, idx) => (
                <div 
                  key={idx}
                  className="aspect-[3/4] border-2 border-white/20 relative overflow-hidden group cursor-pointer"
                >
                  <img 
                    src={img} 
                    alt={`Look ${idx + 1}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-black border-t border-white/10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="w-16 h-[2px] bg-white mx-auto mb-8"></div>
              <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tight">
                О вечеринке
              </h2>
              <div className="w-16 h-[2px] bg-white mx-auto mt-8"></div>
            </div>
          </div>
          
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-3xl md:text-4xl font-display font-bold uppercase mb-8 leading-tight">
                Незабываемая ночь, которая войдёт в легенды
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-6 text-center">
                <h3 className="font-display text-3xl font-bold uppercase">
                  Отличная<br/>музыка
                </h3>
                <div className="w-16 h-1 bg-white mx-auto"></div>
                <p className="text-gray-400 leading-relaxed">
                  Лучшие треки и миксы, которые зарядят тебя энергией до утра
                </p>
              </div>
              
              <div className="space-y-6 text-center">
                <h3 className="font-display text-3xl font-bold uppercase">
                  Элитный<br/>алкоголь
                </h3>
                <div className="w-16 h-1 bg-white mx-auto"></div>
                <p className="text-gray-400 leading-relaxed">
                  Премиальные напитки для искушённых гостей вечеринки
                </p>
              </div>
              
              <div className="space-y-6 text-center">
                <h3 className="font-display text-3xl font-bold uppercase">
                  Ты —<br/>VIP персона
                </h3>
                <div className="w-16 h-1 bg-white mx-auto"></div>
                <p className="text-gray-400 leading-relaxed">
                  Эксклюзивный сервис и особое отношение к каждому
                </p>
              </div>
            </div>
            
            <div className="pt-12 space-y-8 max-w-4xl mx-auto">
              <div className="border-l-4 border-white/50 pl-8 space-y-4">
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

      <footer className="relative py-16 px-6 bg-black text-white text-center border-t border-white/10 overflow-hidden">
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
