import { useState } from "react";
import styles from "./Slider.module.css";
import { FivePersent } from "../atom/globalList";

export const Slider = () => {
  const [sliderValue, setSliderValue] = useState(1);
  function sliderChange(value) {
    setSliderValue(value);
  }

  return (
    <div>
      <h2>Slider</h2>
      <div className={styles.slider__container}>
        <input
          type="text"
          value={sliderValue}
          className={styles.slider__container__text}
          readOnly
        />
        <input
          className={styles.slider}
          type="range"
          min="1"
          max="100"
          value={sliderValue}
          onChange={(e) => {
            sliderChange(e.target.value);
          }}
        />

        <div className={styles.slider__button__container}>
          {FivePersent.map((prop) => {
            return (
              <div
                key={prop.value}
                onClick={()=>sliderChange(prop.value)}
              >
                {prop.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
