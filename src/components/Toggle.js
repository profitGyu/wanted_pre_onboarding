import { useState } from "react";
import styles from "./Toggle.module.css";

export const Toggle = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <h2>토글</h2>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider}>
          <div>기본</div>
          <div>상세</div>
        </span>
      </label>
    </div>
  );
};
