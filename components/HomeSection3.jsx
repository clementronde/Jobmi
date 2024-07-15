import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

export const HomeSection3 = () => {
  const [hovered, setHovered] = useState([false, false, false]);
  const statsRef = useRef([]);

  const stats = [
    { value: 80, description: 'des reconvertis sont plus satisfaits au travail' },
    { value: 50, description: 'des reconvertis ont eu une augmentation' },
    { value: 95, description: 'des reconvertis recommandent de changer de métier' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = statsRef.current.indexOf(entry.target);
            statsRef.current.forEach((_, i) => {
              setTimeout(() => {
                setHovered((prev) => {
                  const newHovered = [...prev];
                  newHovered[i] = true;
                  return newHovered;
                });
              }, i * 800);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    statsRef.current.forEach((stat) => {
      if (stat) {
        observer.observe(stat);
      }
    });

    return () => {
      if (statsRef.current) {
        statsRef.current.forEach((stat) => {
          if (stat) {
            observer.unobserve(stat);
          }
        });
      }
    };
  }, []);

  return (
    <div className='mx-2'>
      <div className="home-section-3 bg-[#14213d] text-white mt-16 rounded-xl py-10 px-4 sm:px-8 sm:h-[400px] flex justify-center items-center">
        <div className="container max-w-screen-xl mx-auto">
          <h2 className="text-center text-4xl font-bold mb-8">
            Les <span className='underline-tilted decoration-[#a29bfe]'>chiffres</span> parlent d'eux-mêmes !
          </h2>
          <div className="stats-grid grid gap-8 mt-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={(el) => (statsRef.current[index] = el)}
                className="stat-item text-center relative"
              >
                <h3 className="text-6xl font-bold">
                  <CountUp
                    start={0}
                    end={hovered[index] ? stat.value : 0}
                    duration={2}
                  />
                  %
                  {index === 0 && (
                    <img 
                      src="/media/chiffredegauche.svg"
                      alt=""
                      className="absolute left-[120px] top-[40px] w-20 h-40"
                    />
                  )}
                  {index === 1 && (
                    <img 
                      src="/media/Chiffredumilieu.svg"
                      alt=""
                      className="absolute left-1/2 transform -translate-x-1/2 top-[-50px] w-60 h-40"
                    />
                  )}
                  {index === 2 && (
                    <img 
                      src="/media/chiffrededroite.svg"
                      alt=""
                      className="absolute right-[120px] top-[55px] w-40 h-40"
                    />
                  )}
                </h3>
                <p className="mt-4 text-lg">
                  {stat.description.split(' ').map((word, i) => {
                    if (index === 0 && word === 'satisfaits') {
                      return (
                        <React.Fragment key={i}>
                          <br />
                          <span className=" decoration-[#a29bfe] relative">
                            {word}
                          </span>{' '}
                        </React.Fragment>
                      );
                    } else if (index === 2 && word === 'recommandent') {
                      return (
                        <React.Fragment key={i}>
                          {word} <br />
                        </React.Fragment>
                      );
                    } else if (index === 2 && word === 'métier') {
                      return (
                        <React.Fragment key={i}>
                          <span className="decoration-[#a29bfe] relative">
                            {word}
                          </span>{' '}
                        </React.Fragment>
                      );
                    } else {
                      return word + ' ';
                    }
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
