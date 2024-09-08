import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.css'

export default function Footer() {
  const navigate = useNavigate();
  const handleInicio = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente para o topo da página
  };
  const handleGigs = () => navigate('/gigs');
  const handleDisco = () => navigate('/discografia');
  const handleContato = () => navigate('/contato');

  // Para URLs externas, use window.location.href
  const handleInsta = () => (window.location.href = 'https://www.instagram.com/dollmakerlive/');
  const handleSpotify = () => (window.location.href = 'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=dofDHcXkQMayEpcQF8DTyA');
  const handleSoundcloud = () => (window.location.href = 'https://soundcloud.com/dollmakerlive');

  return (
    <div className={styles.content}>
      <div className={styles.footer}>
        <div className={styles.pages}>
          <div className={styles.page}>
            <h2>Páginas</h2>
            <p onClick={handleInicio}>Início</p>
            <p onClick={handleGigs}>Gigs</p>
            <p onClick={handleDisco}>Discografia</p>
            <p onClick={handleContato}>Contrate</p>
          </div>
          <div className={styles.page}>
            <h2>Redes</h2>
            <p onClick={handleInsta}>Instagram</p>
            <p onClick={handleSpotify}>Spotify</p>
            <p onClick={handleSoundcloud}>SoundCloud</p> {/* Corrigido de "SoundClound" para "SoundCloud" */}
          </div>
          <div className={styles.page}></div>
        </div>

        <div className={styles.copy}>
          <p>© Copyright 2024, All Rights Reserved for <a href="https://www.instagram.com/dgorganism/">Digital Organism</a></p>
        </div>
      </div>
    </div>
  );
}
