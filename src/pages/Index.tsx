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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://cdn.poehali.dev/projects/ffcd327a-a1a0-4c41-b1b6-4ced9dd966b2/files/582bd6cd-6fc2-4b2c-9c65-5ba623523071.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className={`text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-display text-8xl md:text-9xl lg:text-[12rem] font-black tracking-wider mb-8 drop-shadow-2xl">
            XXCLUSIVE
          </h1>
          <div className="space-y-4 text-xl md:text-2xl font-light tracking-widest">
            <p className="uppercase">23.01.2026</p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-8 justify-center items-center">
              <p className="uppercase">Время: ?</p>
              <span className="hidden md:inline">|</span>
              <p className="uppercase">Место: ?</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-center mb-16 tracking-tight">
            Дресс-код
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
              <p className="font-semibold text-2xl uppercase tracking-wide">
                Современная клубная одежда
              </p>
              <p className="text-gray-700">
                Элегантная и стильная
              </p>
              <p className="text-gray-700">
                Только премиальные образы для тех, кто ценит эксклюзивность и статус
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-900 to-gray-700 rounded-sm overflow-hidden border-4 border-black">
                <div className="w-full h-full flex items-center justify-center text-white text-sm font-light">
                  Пример лука 1
                </div>
              </div>
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-600 rounded-sm overflow-hidden border-4 border-black">
                <div className="w-full h-full flex items-center justify-center text-white text-sm font-light">
                  Пример лука 2
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-center mb-16 tracking-tight">
            О вечеринке
          </h2>
          
          <div className="space-y-8 text-center">
            <p className="text-2xl md:text-3xl font-display font-semibold leading-relaxed">
              Это будет незабываемая ночь
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 py-12">
              <div className="space-y-4">
                <div className="text-5xl">🎵</div>
                <h3 className="font-display text-2xl font-bold">Отличная музыка</h3>
                <p className="text-gray-400">
                  Лучшие треки, которые заставят вас танцевать до утра
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-5xl">🥂</div>
                <h3 className="font-display text-2xl font-bold">Элитный алкоголь</h3>
                <p className="text-gray-400">
                  Премиальные напитки для искушённых гостей
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-5xl">⭐</div>
                <h3 className="font-display text-2xl font-bold">Вы — VIP персона</h3>
                <p className="text-gray-400">
                  Эксклюзивный сервис и особое отношение к каждому гостю
                </p>
              </div>
            </div>
            
            <div className="pt-8 space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                XXCLUSIVE — это не просто вечеринка. Это опыт, который запомнится надолго. 
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                Здесь встречаются люди, которые ценят качество, стиль и эксклюзивность. 
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                Приготовьтесь к ночи, которая станет легендой.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-white text-black text-center">
        <p className="font-display text-2xl font-bold tracking-wider">
          XXCLUSIVE
        </p>
        <p className="text-sm mt-2 text-gray-600">
          23.01.2026 • Будьте готовы к эксклюзиву
        </p>
      </footer>
    </div>
  );
};

export default Index;
