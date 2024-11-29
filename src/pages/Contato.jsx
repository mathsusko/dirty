import {
  Envelope,
  WhatsappLogo,
  InstagramLogo,
  SpotifyLogo,
  SoundcloudLogo
} from '@phosphor-icons/react'
import styles from './Contato.module.css'

export default function Contato() {
  return (
    <div className={styles.bg}>
      <div className={styles.content}>
      <div className={styles.contact}>
          <div className={styles.rows}>
            <div className={styles.rowOne}>
              <img
                src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1732815104/contato_pwvqpv.png"
                alt=""
              />
            </div>
            <div className={styles.rowTwo}>
              <div className={styles.colOne}>
                <div className={styles.desc}>
                  <p>
                    Se você está pronto para levar seu próximo evento a um novo patamar ou
                    deseja discutir uma parceria que vai marcar a cena do Psy Trance,
                    entre em contato comigo! Estou ansioso para ouvir suas ideias e
                    colaborar para criar algo realmente especial.
                  </p>
                </div>
                <div className={styles.img}>
                  <img
                    src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1732815104/dirtyTexture_1_wfo9wt.png"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.colTwo}>
                <img
                  src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1732815103/card_alesra.png"
                  alt=""
                />
                <div className={styles.sociaiss}>
                  <p>Redes sociais/Plataformas músicais</p>
                  <div className={styles.icones}>
                    <a
                      href="https://www.instagram.com/dirty_distortionprog/"
                      target="_blank"
                    >
                      <InstagramLogo size={32} />
                    </a>
                    <a
                      href="https://soundcloud.com/dirty-distortion/tracks"
                      target="_blank"
                    >
                      <SoundcloudLogo size={32} />
                    </a>
                    <a
                      href="https://open.spotify.com/artist/2a8tqbHESJJc33xwGQ6bLA?si=94ced59a902d40c0&nd=1&dlsi=47e94d31e29f4940"
                      target="_blank"
                    >
                      <SpotifyLogo size={32} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
