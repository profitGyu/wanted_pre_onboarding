import styles from "./Tab.module.css";
import { LavList } from "../atom/globalList";
import { useState } from "react";

export const Tab = () => {
  const [tab, segTab] = useState(999);

  function ClickTab(e, index) {
    const horizontalUnderline = document.getElementById("horizontal_underline");
    horizontalUnderline.style.left = e.currentTarget.offsetLeft - 10 + "px";
    horizontalUnderline.style.width = e.currentTarget.offsetWidth + 20 + "px";
    horizontalUnderline.style.top =
      e.currentTarget.offsetHeight + e.currentTarget.offsetTop + 1+ "px";

    segTab(index);
  }
  return (
    <div>
      <h2>Tab</h2>
      <nav className={styles.tab}>
        <div id="horizontal_underline" className={styles.underline}></div>
        <div className={styles.tab_border}>
        {LavList.map((prop, index) => {
          return (
            <a
              key={index}
              href="#"
              style={
                tab === index
                  ? {
                      color: "#000",
                    }
                  : { color: "#8f8f8f8f" }
              }
              onClick={(e) => {
                ClickTab(e, index);
              }}
            >
              {prop.title}
            </a>
          );
        })}
        </div>
      </nav>
    </div>
  );
};
