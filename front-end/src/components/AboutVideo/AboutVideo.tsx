import styles from './AboutVideo.module.scss';

export const AboutVideo = () => {
  return (
    <article className={styles.videoSection}>
      <h2>
        <i className="fa-solid fa-handshake"></i>
        Deixe-me apresentar
      </h2>

      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vl0eatPehLs?si=8FETU9_nNMf1bf2k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen>
        </iframe>
      </div>
    </article>
  );
}