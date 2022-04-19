import styles from "./Input.module.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Input = () => {
  const [checkColor, setcheckColor] = useState("gray");
  const [eyeIcon, setEyeIcon] = useState(true);

    

  function CheckEmail(e) {
    let email = e.target.value;
    let reg_email =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!email) {
      setcheckColor("gray");
    } else {
      if (reg_email.test(email)) {
        setcheckColor("green");
      } else {
        setcheckColor("gray");
      }
    }
  }
  function ChangePasswrodType(e) {
    // childNodes, parentNode, Sibling, nextSibling , previousSibling
    let password = document.getElementById("pass_input");
    if (password?.type === "password") {
      password.type = "text";
      password.placeholder = "페스워드"
      setEyeIcon(false);
    } else {
      password.type = "password";
      password.placeholder = "password"
      setEyeIcon(true);
    }
  }

  return (
    <div>
      <h2>INPUT</h2>
      <form>
        <div className={styles.input_form}>
          <label>E-mail</label>
          <div className={styles.input_div}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => CheckEmail(e)}
            ></input>
            <i>
              <FontAwesomeIcon icon={faCircleCheck} color={checkColor} />
            </i>
          </div>
        </div>
        <div className={styles.input_form}>
          <label>password</label>
          <div className={styles.input_div}>
            <input
              type="Password"
              placeholder="password"
              id="pass_input"
            ></input>
            <i
              className={styles.password_icon}
              onClick={(e) => ChangePasswrodType(e)}
            >
              <FontAwesomeIcon
                icon={eyeIcon ? faEyeSlash : faEye}
                color={"black"}
              />
            </i>
          </div>
        </div>
      </form>
    </div>
  );
};
