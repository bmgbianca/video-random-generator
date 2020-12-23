import React from 'react';
import css from './WelcomePage.module.css';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  const handleNextPage = () => {
    const audio = document.getElementById('soundtrack');
    audio.play();
  };

  return (
    <div className={css.body}>
      <h1 className={css.h1}>
        Bem-vindo à máquina de <span className={css.tedio}>Tédio Killer</span>{' '}
        do Papai!
      </h1>
      <main className={css.content}>
        <h2 className={css.h2}>O que é?</h2>
        <p className={css.paragraph}>
          A máquina de <span className={css.paragraphSpan}>tédio killer</span>{' '}
          foi desenhada para aqueles seus momentos de tédio em casa, quando,
          apesar de ter várias coisas pra fazer (como trocar lâmpadas ou arrumar
          os fios sobrando da internet), você não está a fim de fazer nada
          disso. Na verdade, o que você quer mesmo é passar um tempo largado no
          sofá ou na cama assistindo a vários vídeos inúteis no YouTube.
          <br /> O que esta máquina faz é entregar a você um dos cerca de 50
          vídeos já aprovados pela curadoria da família Moraes Gomes para que
          você possa ir direto à diversão, sem precisar ficar cavucando esses
          vídeos pelo YouTube. <br /> Bem prático, né?
        </p>
        <h2 className={css.h2}>Como funciona?</h2>
        <p className={css.paragraph}>
          Quando você estiver pronto, clique no botão que leva à próxima página
          para encontrar a grande roleta dos vídeos inúteis aleatórios! Basta um
          clique na roleta para que ela gere automatica e aleatoriamente um
          vídeo da nossa seleção pra você! Depois, é só dar o play e se
          divertir!
        </p>
        <h2 className={css.h2}>Para quem esta máquina é recomendada?</h2>
        <p className={css.paragraph}>
          A máquina <span className={css.paragraphSpan}>tédio killer</span> foi
          especialmente desenhada para Sérgios entediados e que adoram passar
          alguns (ou muitos) minutos completamente inertes assistindo a
          idiotices na internet. <br /> Se você se identificou, então esta
          máquina é para você!
        </p>

        <h2 className={css.h2}>Está pronto para começar?</h2>
        <Link
          onClick={handleNextPage}
          className={css.iniciar}
          to="/random-generator"
        >
          <button className={css.botao}>Sim, estou pronto!</button>
        </Link>
      </main>
    </div>
  );
}
