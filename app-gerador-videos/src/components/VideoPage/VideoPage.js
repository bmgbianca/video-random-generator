import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './VideoPage.css';

export default function VideoPage() {
  const [videoLink, setVideoLink] = useState(null);
  const [introClass, setIntroClass] = useState('displayIntro');
  const [mainVideoClass, setMainVideoClass] = useState('hidden');

  const videosArray = [
    'https://www.youtube.com/embed/Ju37Y1F4ylc?autoplay=1',
    'https://www.youtube.com/embed/nQ5eUJNXrMw?autoplay=1',
    'https://www.youtube.com/embed/4lmEdjRK1hM?autoplay=1',
    'https://www.youtube.com/embed/p-rSdt0aFuw?autoplay=1',
    'https://www.youtube.com/embed/pldUj_UUUHI?autoplay=1',
    'https://www.youtube.com/embed/j1GMYDAeyDM?autoplay=1',
    'https://www.youtube.com/embed/sAeXskZHC2o?autoplay=1',
    'https://www.youtube.com/embed/3TnsmkZh1_Y?autoplay=1',
    'https://www.youtube.com/embed/6HSgDGLEswE?autoplay=1',
    'https://www.youtube.com/embed/7i8ARjIeM2k?autoplay=1',
    'https://www.youtube.com/embed/IcWTPFnqOLo?autoplay=1',
    'https://www.youtube.com/embed/synbV1PeNuc?autoplay=1',
    'https://www.youtube.com/embed/GD53ql5Muv8?autoplay=1',
    'https://www.youtube.com/embed/Cg8KQfaT9xY?autoplay=1',
    'https://www.youtube.com/embed/PgLOU9BrUe4?autoplay=1',
    'https://www.youtube.com/embed/eZN2q4NMCm4?autoplay=1',
    'https://www.youtube.com/embed/fd97OJtYtZw?autoplay=1',
    'https://www.youtube.com/embed/RhledfZqvew?autoplay=1',
    'https://www.youtube.com/embed/S9F-u4T7leQ?autoplay=1',
    'https://www.youtube.com/embed/aWmFMDr7y0U?autoplay=1',
    'https://www.youtube.com/embed/R2huvJ4Cy2c?autoplay=1',
    'https://www.youtube.com/embed/ZyXUzhTn0kI?autoplay=1',
    'https://www.youtube.com/embed/2k4F80NXcF8?autoplay=1',
    'https://www.youtube.com/embed/R1fy21LZkFU?autoplay=1',
    'https://www.youtube.com/embed/mjMdj81Z6Z0?autoplay=1',
    'https://www.youtube.com/embed/zGqCs2FnMUQ?autoplay=1',
    'https://www.youtube.com/embed/DYOEQLG62yQ?autoplay=1',
    'https://www.youtube.com/embed/rwA7_ZUgvns?autoplay=1',
    'https://www.youtube.com/embed/2Encp4YVrFo?autoplay=1',
    'https://www.youtube.com/embed/Epv1Im8D_T4?autoplay=1',
    'https://www.youtube.com/embed/6dZ6eVGtvME?autoplay=1',
    'https://www.youtube.com/embed/VlPdfLr1FSo?autoplay=1',
    'https://www.youtube.com/embed/rk_qLtk0m2c?autoplay=1',
    'https://www.youtube.com/embed/sxxPuBDhHTM?autoplay=1',
    'https://www.youtube.com/embed/RrZHOh77F3Q?autoplay=1',
    'https://www.youtube.com/embed/Aln9S3wEKSA?autoplay=1',
    'https://www.youtube.com/embed/vP3zJmtkhxc?autoplay=1',
    'https://www.youtube.com/embed/i19oFfW6nL8?autoplay=1',
    'https://www.youtube.com/embed/6SPLqPEczSg?autoplay=1',
    'https://www.youtube.com/embed/cOiV2ULQHcU?autoplay=1',
    'https://www.youtube.com/embed/lCUVfLdp3nU?autoplay=1',
    'https://www.youtube.com/embed/ai7ABNoi7kE?autoplay=1',
    'https://www.youtube.com/embed/SZ9332VldR8?autoplay=1',
    'https://www.youtube.com/embed/AX3yQuUakqk?autoplay=1',
    'https://www.youtube.com/embed/w39_K6kDgjE?autoplay=1',
    'https://www.youtube.com/embed/XhvR3vZcggY?autoplay=1',
    'https://www.youtube.com/embed/4SAQSNZlU9E?autoplay=1',
    'https://www.youtube.com/embed/GeDVC4dHtXE?autoplay=1',
  ];

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * videosArray.length);
    setVideoLink(videosArray[randomNumber]);
    setTimeout(() => {
      setIntroClass('hidden');
      setMainVideoClass('display');
    }, 2300);
  }, []);

  const handlePreviousPage = () => {
    const audio = document.getElementById('soundtrack');
    audio.play();
  };

  return (
    <main className="mainBackground">
      <div className="videoDiv">
        <img src="./tv.png" alt="tv_border" className="tvBorder" />
        <video
          id="video"
          className={introClass}
          type="video/mp4"
          src="./teve.mov"
          autoPlay
        ></video>
        <iframe
          className={mainVideoClass}
          title="video"
          width="615"
          height="465"
          src={videoLink}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          autoplay
        ></iframe>
      </div>
      <Link className="buttonContainer" to="/random-generator">
        <button onClick={handlePreviousPage} className="backButton">
          VOLTAR PARA A ROLETA!
        </button>
      </Link>
    </main>
  );
}
