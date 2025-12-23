import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function RomanticXmasPage() {
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const startDate = new Date('2025-03-30T00:00:00');

  // As fotos estão na pasta public/fotos/
  // Basta colocar as fotos lá e ajustar os nomes abaixo
  const images = [
    '/fotos/foto1.jpg',
    '/fotos/foto2.jpg',
    '/fotos/foto3.jpg',
    '/fotos/foto6.png',
    '/fotos/foto4.jpg',
    '/fotos/foto5.jpg',
  ];

  // Legendas para cada foto (opcional)
  const captions = [
    'Momento especial',
    'Juntos para sempre',
    'Te amo!',
    'Minha Mulher Maravilha',
    'Meu amor',
    'Felizes juntos',
  ];

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now - startDate;
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeElapsed({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-green-900 relative overflow-hidden">
      {/* Snowflakes Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-70 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              animation: `fall ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${10 + Math.random() * 20}px`
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
          50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.8); }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-pulse">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="text-yellow-300 w-8 h-8" style={{ animation: 'float 3s ease-in-out infinite' }} />
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              Feliz Natal & Ano Novo
            </h1>
            <Sparkles className="text-yellow-300 w-8 h-8" style={{ animation: 'float 3s ease-in-out infinite 0.5s' }} />
          </div>
          <h2 className="text-3xl md:text-4xl text-red-200 font-semibold mb-2">
            Thais ❤️
          </h2>
          <p className="text-xl text-white/90 italic">
            Meu amor, meu presente mais especial
          </p>
        </div>

        {/* Love Counter */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 border-2 border-white/20" style={{ animation: 'glow 2s ease-in-out infinite' }}>
          <div className="text-center mb-6">
            <Heart className="w-12 h-12 mx-auto text-red-400 mb-3" style={{ animation: 'heartbeat 1.5s ease-in-out infinite' }} />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Tempo desde a primeira mensagem
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: timeElapsed.days, label: 'Dias' },
              { value: timeElapsed.hours, label: 'Horas' },
              { value: timeElapsed.minutes, label: 'Minutos' },
              { value: timeElapsed.seconds, label: 'Segundos' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/20 rounded-2xl p-4 text-center backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                  {item.value}
                </div>
                <div className="text-sm md:text-base text-white/90 font-semibold">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="bg-gradient-to-r from-red-500/20 to-green-500/20 backdrop-blur-lg rounded-3xl p-8 mb-8 border-2 border-white/20">
          <p className="text-lg md:text-xl text-white text-center leading-relaxed">
            Cada dia ao seu lado é um presente especial. Você ilumina minha vida como as luzes de Natal iluminam a noite. 
            Que este Natal seja repleto de amor, e que o próximo ano nos traga ainda mais momentos inesquecíveis juntos! 
            <br /><br />
            Te amo infinitamente! 💕
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            Nossos Momentos Especiais
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="relative group"
                style={{
                  animation: `slideIn 0.6s ease-out ${idx * 0.1}s backwards`
                }}
              >
                <div className="relative overflow-hidden rounded-2xl border-2 border-white/30 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <img
                    src={img}
                    alt={`Momento ${idx + 1}`}
                    className="w-full h-70 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-center font-semibold">
                        {captions[idx]}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Heart className="w-6 h-6 text-red-400 fill-red-400 drop-shadow-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white/70">
          <p className="text-sm">Feito com muito amor ❤️</p>
          <p className="text-xs mt-2">Por Luiz Felipe Lopes</p>
        </div>
      </div>
    </div>
  );
}