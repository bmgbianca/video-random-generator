import React, { useState, useEffect } from 'react';
import css from './RandomGeneratorPage.module.css';
import { useHistory } from 'react-router-dom';

export default function RandomGenertorPage() {
  const [img1Class, setImg1Class] = useState(css.rotate);
  const [img2Class, setImg2Class] = useState(css.wheelContent);

  const history = useHistory();

  const stopTheWheel = () => {
    setImg1Class(css.fadeImg1);
    setImg2Class(css.fadeImg2);
    const audio = document.getElementById('soundtrack');
    setTimeout(() => {
      history.push('/random-video');
      audio.pause();
    }, 2000);
  };

  useEffect(() => {
    const audio1 = document.getElementById('soundtrack');
    return () => {
      audio1.pause();
    };
  });
  return (
    <div className={css.background}>
      <h1 className={css.titulo}>
        GIRE A <span className={css.spanTitulo}>RODA...</span>
      </h1>
      <main className={css.container}>
        <img
          src="./arco.png"
          alt="seta_da_roleta"
          onClick={stopTheWheel}
          className={img1Class}
        />
        <img
          src="./wheel_content.png"
          alt="roleta"
          onClick={stopTheWheel}
          className={img2Class}
        />
        <h2 className={css.subtitulo}>
          ...e gere um vídeo bobo novinho pra{' '}
          <span className={css.lastSpan}>você!</span>
        </h2>
      </main>
    </div>
  );
}
