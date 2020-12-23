import React, { useState } from 'react';
import css from './RandomGeneratorPage.module.css';
import { useHistory } from 'react-router-dom';

export default function RandomGenertorPage() {
  const [img1Class, setImg1Class] = useState(css.rotate);
  const [img2Class, setImg2Class] = useState(css.wheelContent);

  const history = useHistory();
  const videosArray = [
    'https://www.youtube.com/embed/gt3fEn1eklY',
    'https://www.youtube.com/embed/vGT0X0D0o-g',
    'https://www.youtube.com/embed/Ju37Y1F4ylc',
    'https://www.youtube.com/embed/nQ5eUJNXrMw',
    'https://www.youtube.com/embed/x-1-gLv3aWs',
    'https://www.youtube.com/embed/S3G89K84p20',
    'https://www.youtube.com/embed/4lmEdjRK1hM',
    'https://www.youtube.com/embed/p-rSdt0aFuw',
    'https://www.youtube.com/embed/YlaWGd1cUms',
    'https://www.youtube.com/embed/j1GMYDAeyDM',
  ];

  const stopTheWheel = () => {
    setImg1Class(css.fadeImg1);
    setImg2Class(css.fadeImg2);
    const audio = document.getElementById('soundtrack');
    setTimeout(() => {
      history.push('/random-video');
      audio.pause();
    }, 2000);
  };

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
