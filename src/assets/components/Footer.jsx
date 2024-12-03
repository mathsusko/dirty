import { useNavigate } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const navigate = useNavigate()
  const handleInicio = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' }) // Rola suavemente para o topo da página
  }
  const handleGigs = () => navigate('/gigs')
  const handleDisco = () => navigate('/discografia')
  const handleContato = () => navigate('/contato')

  // Para URLs externas, use window.location.href
  const handleInsta = () =>
    (window.location.href = 'https://www.instagram.com/dirty_distortionprog/')
  // const handleYoutube = () => (window.location.href = 'https://www.youtube.com/@dollmaker626')
  const handleSpotify = () =>
    (window.location.href =
      'https://open.spotify.com/artist/2a8tqbHESJJc33xwGQ6bLA?si=94ced59a902d40c0&nd=1&dlsi=47e94d31e29f4940')
  const handleSoundcloud = () =>
    (window.location.href = 'https://soundcloud.com/dirty-distortion/tracks')

  return (
    <div className={styles.content}>
      <div className={styles.footer}>
        <div className={styles.pages}>
          <div className={styles.brothers}>
            <div className={styles.page}>
              <h2>Páginas</h2>
              <p onClick={handleInicio}>Início</p>
              <p onClick={handleGigs}>Gigs</p>
              <p onClick={handleDisco}>Discografia</p>
              <p onClick={handleContato}>Contrate</p>
            </div>

            <div className={styles.page}>
              <h2>Redes</h2>
              <p
                onClick={handleInsta}
                target="_blank"
              >
                Instagram
              </p>
              {/* <p onClick={handleYoutube}>Youtube</p> */}
              <p
                onClick={handleSpotify}
                target="_blank"
              >
                Spotify
              </p>
              <p
                onClick={handleSoundcloud}
                target="_blank"
              >
                SoundCloud
              </p>
            </div>
          </div>

          <div className={styles.other}>
            <div className={styles.cta}>
              <h2>Digital Organism</h2>
              <p>
                Esse Web site, nasceu com a proposta de proporcionar uma melhor
                comunicação entre os envolvidos.
              </p>
              <button className={styles.button}>
                <a
                  href="https://www.instagram.com/dgorganism/"
                  target="_blank"
                >
                  CONTRATAR SERVIÇOS{' '}
                  <img
                    src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730258442/ARROW_f0fpaf.png"
                    alt=""
                  />
                </a>
              </button>
            </div>

            <div className={styles.marca}>
              <a
                href="https://www.instagram.com/dgorganism/"
                target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730258437/digitalOrganism_eyjken.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          <p>
            © Copyright 2024, Todos direitos reservados por{' '}
            <a href="https://www.instagram.com/dgorganism/">Digital Organism</a>
          </p>
        </div>
      </div>
    </div>
  )
}
