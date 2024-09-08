import { motion } from 'framer-motion'
import styles from './Discografia.module.css'

// Define o conteúdo das músicas com URL de áudio
const musicData = [
  {
    title: 'Destruction',
    production: 'Dirty Distortion',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725775581/dirty/coverMusic/sbassq0j7qjchrcrkqbi.png',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725774531/dirty/graphics/d0jkvpen8kkrmeyqzgd7.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725774567/dirty/graphics/tnksqzynkxusedahluv5.png',
    audioUrl: '../src/assets/audio/Dollmaker - On My Time (original Mix).mp3',
    spotify:
      'https://open.spotify.com/intl-pt/artist/2a8tqbHESJJc33xwGQ6bLA?si=b9fa2df4257e4a74',
    sound:
      'https://soundcloud.com/dirty-distortion/destruction-master-8-1?si=e929d1be894b499d8720ed3046c124ba&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
  },
  {
    title: 'Trick Reality',
    production: 'Dirty Distortion',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725775602/dirty/coverMusic/gkdaccxnpf1e4ikte17d.png',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725774531/dirty/graphics/d0jkvpen8kkrmeyqzgd7.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725774567/dirty/graphics/tnksqzynkxusedahluv5.png',
    audioUrl: '../src/assets/audio/Dezko-Ascend-DollmakerBootleg.mp3',
    spotify:
      'https://open.spotify.com/intl-pt/artist/2a8tqbHESJJc33xwGQ6bLA?si=b9fa2df4257e4a74',
    sound:
      'https://soundcloud.com/dirty-distortion/trick-reality-original-mix?si=ed1553a10e0440d5aec18e0cd4d87e45&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
  },
  {
    title: 'Witchcraft',
    production: 'Dirty Distortion',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725775635/dirty/coverMusic/o4zfcwh1simtz67hfmdo.png',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725774531/dirty/graphics/d0jkvpen8kkrmeyqzgd7.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725774567/dirty/graphics/tnksqzynkxusedahluv5.png',
    audioUrl: '../src/assets/audio/Dollmaker - Just Sound - Complete Version.mp3',
    spotify:
      'https://open.spotify.com/intl-pt/artist/2a8tqbHESJJc33xwGQ6bLA?si=b9fa2df4257e4a74',
    sound:
      'https://soundcloud.com/dirty-distortion/dirty-distortion-witchcraft-original-mix?si=6ad689b3dff7481fa6612675de04c26f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
  },
  {
    title: 'Switching Sides',
    production: 'Dirty Distortion',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725775619/dirty/coverMusic/xowpovmlifmip47ultnx.png',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725774531/dirty/graphics/d0jkvpen8kkrmeyqzgd7.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725774567/dirty/graphics/tnksqzynkxusedahluv5.png',
    audioUrl: '../src/assets/audio/Dollmaker - No Light (Mashup Project).mp3',
    spotify:
      'https://open.spotify.com/intl-pt/artist/2a8tqbHESJJc33xwGQ6bLA?si=b9fa2df4257e4a74',
    sound:
      'https://soundcloud.com/dirty-distortion/dirty-distortion-switching-sides-preview?si=239c13dc378145e9bf6af668ed57663e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
  }

  // Adicione mais músicas conforme necessário
]

export default function Discografia() {
  // Define a animação para os cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className={styles.content}>
      <div className={styles.hero}>
        <div className={styles.discografia}>
          <div className={styles.spotify}>
            <h2>DISCOGRAFIA</h2>

            <div className={styles.cards}>
              {musicData.map((music, index) => (
                <motion.div
                  key={index}
                  className={styles.card}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: index * 0.3 }} // Define o atraso entre os cards
                >
                  <div
                    className={styles.fotoMusic}
                    style={{ backgroundImage: `url(${music.imageUrl})` }}
                  ></div>

                  <div className={styles.descMusic}>
                    <h2>{music.title}</h2>
                    <p>{music.production}</p>
                  </div>

                  <audio controls>
                    <source
                      src={music.audioUrl}
                      type="audio/mp3"
                    />
                  </audio>

                  <div className={styles.cta}>
                    <a href={music.spotify}>
                      <img
                        src={music.spotifyUrl}
                        alt="Spotify"
                      />
                    </a>
                    <a href={music.sound}>
                      <img
                        src={music.soundcloudUrl}
                        alt="SoundCloud"
                      />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
