import { useState, useEffect, useRef } from 'react'
import styles from './Inicio.module.css'
import { useNavigate } from 'react-router-dom'
import {
  SpeakerHigh,
  Play,
  EnvelopeOpen,
  WhatsappLogo,
  SpotifyLogo,
  SoundcloudLogo,
  InstagramLogo,
  AsteriskSimple,
  YoutubeLogo
} from '@phosphor-icons/react'

export default function Inicio() {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false) // Estado para controlar a visibilidade
  const musicRef = useRef(null) // Referência à div .music

  function handleDiscografia() {
    navigate('/discografia')
  }

  useEffect(() => {
    const handleScroll = () => {
      if (musicRef.current) {
        const rect = musicRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Verifica se a metade da div .music está visível na janela de visualização
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const contatoRef = useRef(null)

  const handleScrollToContato = (event) => {
    event.preventDefault()
    contatoRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section>
      <article className={styles.bannerHero}></article>
      <article className={styles.teste}>
        <div className={styles.extra}>
          <img
            src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1725774495/dirty/graphics/gc3voukixodr0sdhjb45.png"
            alt=""
          />
          <div className={styles.cardzin}>
            <div className={styles.head}>
              <p>Me siga</p>

              <div className={styles.sociais}>
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
            <div className={styles.button}>
              <a
                href="#contato"
                onClick={handleScrollToContato}
              >
                ENTRAR EM CONTATO
              </a>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1725774339/dirty/graphics/pyvpmhylfm8mchqd4ujj.png"
            alt=""
          />
        </div>
      </article>
      <article className={styles.content}>
        <div className={styles.bgFixed}>
          <div className={styles.circleBlue}></div>
          <div className={styles.circlePurple}></div>
        </div>
        <div className={styles.panel}>
          <p>Oficial Website</p>
          <p>©</p>
          <p>2024</p>
          <p>PsyTrance</p>
          <p>|</p>
          <p>Progressive Dark</p>
        </div>

        {/* Adiciona a classe 'visible' condicionalmente */}
        <div
          className={`${styles.music} ${isVisible ? styles.visible : ''}`}
          ref={musicRef}
        >
          <div className={styles.card}>
            <div className={styles.firstColumn}>
              <div className={styles.descriptions}>
                <div className={styles.head}>
                  <h2>Lançamento</h2>
                  <p>Ouça aqui minha prévia!</p>
                  <p>music</p>
                </div>
                <div className={styles.mid}>
                  <p>Acesse minhas plataformas musicais e encontre muito mais!</p>
                  <div className={styles.images}>
                    <a href="https://soundcloud.com/dirty-distortion">
                      <img src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1725774567/dirty/graphics/tnksqzynkxusedahluv5.png" />
                    </a>
                    <a href="https://open.spotify.com/intl-pt/artist/2a8tqbHESJJc33xwGQ6bLA?si=de9e122d7a1d42d3">
                      <img src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1725774531/dirty/graphics/d0jkvpen8kkrmeyqzgd7.png" />
                    </a>
                  </div>
                </div>
              </div>

              <button onClick={handleDiscografia}>Ver discografia</button>
            </div>
            <div className={styles.secondColumn}>
              <div className={styles.boxMusic}></div>

              <audio
                src="https://res.cloudinary.com/dio2dnpmn/video/upload/v1725775711/dirty/sounds/mgdps1m3w9grxhgyitzm.mp3"
                controls
              ></audio>
            </div>
          </div>
        </div>

        {/* <div className={styles.bio}>
          <div className={styles.logoOne}>
            <img src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1725775445/dirty/graphics/vgv9moarfxjnfcibzzhs.png" />
          </div>
          <div className={styles.bioDescription}>
            <h2>Biografia</h2>
            <p>
              Como marca de psytrance, a filosofia do Dirty Distortion é uma fusão de
              profundidade psicológica e sofisticação musical. Inspirado pela psicologia
              de Carl Jung, ele concebe sua música como um veículo para explorar os
              recantos mais sombrios da mente humana. Sua abordagem transcende a mera
              criação de música de dança, tornando-se um convite para uma jornada
              interior.
            </p>
            <p>
              Cada batida pulsante e cada melodia hipnótica são cuidadosamente elaboradas
              para evocar uma experiência transformadora, desafiando os ouvintes a
              confrontar seus próprios arquétipos da sombra. Este não é apenas
              entretenimento, mas uma busca séria pela autoconsciência e crescimento
              pessoal.
            </p>
            <p>
              Cada faixa é um produto exclusivo, elaborado com atenção meticulosa aos
              detalhes, destinado a criar um espaço sagrado onde a música se funde com a
              psique. Neste domínio sombrio e sofisticado, os ouvintes são convidados a
              explorar os abismos de suas próprias mentes, enfrentando seus medos mais
              profundos e descobrindo a luz na escuridão. Assim, Dirty não apenas define
              novos padrões no mundo do psytrance, mas também desafia os limites da música
              eletrônica, elevando-a a uma expressão de arte e transformação.
            </p>
          </div>
        </div> */}
        <div className={styles.bio}>
          <div className={styles.firstRow}>
            <div className={styles.img}>
              <img
                src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1732758145/dirty/graphics/bvjxln020lpmlvkifqyz.jpg"
                alt=""
              />
            </div>

            <div className={styles.text}>
              <div className={styles.title}>
                <img
                  src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1732758668/dirty/graphics/t5vvfiryyxhszmf5nrts.png"
                  alt=""
                />
                <div className={styles.subtitle}>
                  <p>VICTOR HUGO</p>
                  <p>-</p>
                  <p>BRAZILIAN</p>
                </div>
              </div>

              <div className={styles.description}>
                <p>
                  Como marca de psytrance, a filosofia do Dirty Distortion é uma fusão de
                  profundidade psicológica e sofisticação musical. Inspirado pela
                  psicologia de Carl Jung, ele concebe sua música como um veículo para
                  explorar os recantos mais sombrios da mente humana. Sua abordagem
                  transcende a mera criação de música de dança, tornando-se um convite
                  para uma jornada interior.
                  <br />
                  Cada batida pulsante e cada melodia hipnótica são cuidadosamente
                  elaboradas para evocar uma experiência transformadora, desafiando os
                  ouvintes a confrontar seus próprios arquétipos da sombra. Este não é
                  apenas entretenimento, mas uma busca séria pela autoconsciência e
                  crescimento pessoal.
                  <br />
                  Cada faixa é um produto exclusivo, elaborado com atenção meticulosa aos
                  detalhes, destinado a criar um espaço sagrado onde a música se funde com
                  a psique. Neste domínio sombrio e sofisticado, os ouvintes são
                  convidados a explorar os abismos de suas próprias mentes, enfrentando
                  seus medos mais profundos e descobrindo a luz na escuridão. Assim, Dirty
                  não apenas define novos padrões no mundo do psytrance, mas também
                  desafia os limites da música eletrônica, elevando-a a uma expressão de
                  arte e transformação.
                </p>
              </div>
            </div>
          </div>

          {/* <div className={styles.secondRow}>
            <img
              src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1730802432/dollmaker/newUpgrade/s11bjve9r7wd6ftavcx3.png"
              alt=""
            />
          </div> */}
        </div>

        {/* <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <div className={styles.colOne}>
              <h2>Vamos Conversar?</h2>
              <p>
                Se você está pronto para levar seu próximo evento a um novo patamar ou
                deseja discutir uma parceria que vai marcar a cena do Techno, entre em
                contato comigo! Estou ansioso para ouvir suas ideias e colaborar para
                criar momentos realmente especias.
              </p>
            </div>

            <div className={styles.colTwo}>
              <div
                ref={contatoRef}
                className={styles.contacts}
              >
                <h2>Contatos</h2>
                <div className={styles.contact}>
                  <div className={styles.wpp}>
                    <WhatsappLogo size={24} />
                    <p>WhatsApp</p>
                  </div>
                  <p>(41) 99999-9999</p>
                </div>

                <div className={styles.contact}>
                  <div className={styles.wpp}>
                    <EnvelopeOpen size={24} />
                    <p>E-mail</p>
                  </div>
                  <p>email@dirty.com.br</p>
                </div>
              </div>

              <div className={styles.icons}>
                <p>Redes sociais/Plataformas Musicais</p>
                <div className={styles.icon}>
                  <a
                    href="https://www.instagram.com/dirty_distortionprog/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <InstagramLogo size={32} />
                  </a>
                  <a
                    href="https://soundcloud.com/dirty-distortion/tracks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <SoundcloudLogo size={32} />
                  </a>
                  <a
                    href="https://open.spotify.com/intl-pt/artist/2a8tqbHESJJc33xwGQ6bLA?si=94ced59a902d40c0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <SpotifyLogo size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div
          ref={contatoRef}
          className={styles.contact}
          >
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
      </article>
    </section>
  )
}
