import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Upload, X } from 'lucide-react';

export default function App() {
  const [images, setImages] = useState([]);
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const startDate = new Date('2025-03-30T00:00:00');

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

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImages(prev => [...prev, event.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

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
              Nosso Tempo Juntos
            </h3>
            <p className="text-white/80">Desde 30 de março de 2025</p>
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
          
          {images.length === 0 ? (
            <div className="text-center py-12">
              <Upload className="w-16 h-16 mx-auto text-white/50 mb-4" />
              <p className="text-white/70 mb-4">Adicione nossas fotos para deixar ainda mais especial!</p>
              <label className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full cursor-pointer transition-all transform hover:scale-105">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                Adicionar Fotos
              </label>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {images.map((img, idx) => (
                  <div key={idx} className="relative group">
                    <img
                      src={img}
                      alt={`Momento ${idx + 1}`}
                      className="w-full h-48 object-cover rounded-2xl border-2 border-white/30 shadow-lg transition-transform group-hover:scale-105"
                    />
                    <button
                      onClick={() => removeImage(idx)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <label className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full cursor-pointer transition-all transform hover:scale-105">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  Adicionar Mais Fotos
                </label>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white/70">
          <p className="text-sm">Feito com muito amor por Luiz Felipe Lopes ❤️</p>
        </div>
      </div>
    </div>
  );
}