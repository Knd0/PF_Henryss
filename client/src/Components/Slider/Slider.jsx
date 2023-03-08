import { useEffect } from "react";
import { useState } from "react";
import styles from "./Slider.module.css";

export default function Slider({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 3000);
    return () => clearInterval(interval);
  });

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  return (
    <div className={styles.all}>
      <img
        src={selectedImage}
        className={styles.image}
        onLoad={() => setLoaded(true)}
        alt="..."
      />
    </div>
  );
}
