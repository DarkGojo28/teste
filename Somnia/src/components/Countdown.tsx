import { useState, useEffect } from 'react';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 50,
    seconds: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              // Reset to 24h if it reaches zero for demo purposes
              hours = 23;
              minutes = 59;
              seconds = 59;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center gap-2 font-mono text-gold">
      <div className="flex flex-col items-center">
        <div className="bg-gold/10 border border-gold/20 rounded-lg px-2 py-1 text-xl font-bold">
          {formatNumber(timeLeft.hours)}
        </div>
        <span className="text-[8px] uppercase tracking-widest mt-1 opacity-60">Horas</span>
      </div>
      <span className="text-xl font-bold mb-5">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-gold/10 border border-gold/20 rounded-lg px-2 py-1 text-xl font-bold">
          {formatNumber(timeLeft.minutes)}
        </div>
        <span className="text-[8px] uppercase tracking-widest mt-1 opacity-60">Minutos</span>
      </div>
      <span className="text-xl font-bold mb-5">:</span>
      <div className="flex flex-col items-center">
        <div className="bg-gold/10 border border-gold/20 rounded-lg px-2 py-1 text-xl font-bold">
          {formatNumber(timeLeft.seconds)}
        </div>
        <span className="text-[8px] uppercase tracking-widest mt-1 opacity-60">Segundos</span>
      </div>
    </div>
  );
};
