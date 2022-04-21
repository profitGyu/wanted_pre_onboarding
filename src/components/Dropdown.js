import { useEffect, useState } from "react";
import styles from "./DropDown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export const DropDown = () => {
  const [inputValue, setInputValue] = useState("선택하세요");
  const [coins, setCoin] = useState([]);
  const [iconState, SetIconState] = useState(true);

  const getCoinTracker = async () => {
    const json = await (
      await fetch("https://api.coinpaprika.com/v1/tickers")
    ).json();
    setCoin(json);
  };
  useEffect(() => {
    getCoinTracker();
  }, []);

  const DropDown = (e) => {
    let next = e.currentTarget.nextSibling;
    let drop_list = document.querySelector("#drop_item_container");
    drop_list.style.left = e.currentTarget.offsetLeft + "px";
    drop_list.style.width = e.currentTarget.offsetWidth -2 + "px";
    if (next.style.display === "none") {
      next.style.display = "block";
      SetIconState(false);
    } else {
      next.style.display = "none";
      SetIconState(true);
    }
  };

  const ClickDopDownValue = (e) => {
    let value = e.target.outerText;
    let dropdown_container = document.getElementById('dropdown_container')
    setInputValue(value);
    dropdown_container.style.display = "none";
    SetIconState(true);
  };

  const FilterDropDown = (e) => {
 
    let input = e.target.value;
    let filter = input.toUpperCase();
    let div = document.getElementById("drop_item_container")
    let div_props = div.getElementsByTagName("div")

    for(let i=0; i < div_props.length; i++){
      let textValue = div_props[i].textContent || div_props[i].innerHTML;
      if (textValue.toUpperCase().indexOf(filter) > -1){
        div_props[i].style.display = "";
      }else{
        div_props[i].style.display = "none";
      }
    }
  };

  return (
    <div>
      <h2>DropDown</h2>
      <div
        className={styles.dropdown__container}
        onClick={(e) => {
          DropDown(e);
        }}
      >
        <input type="text" value={inputValue} readOnly />
        <i>
          <FontAwesomeIcon
            icon={iconState ? faCaretDown : faCaretUp}
            color={"black"}
          />
        </i>
      </div>
      <div
        className={styles.dropdown__container}
        style={{
          display: "none",
        }}
        id="dropdown_container"
      >
        <input
          type="text"
          placeholder="Search..coin"
          onKeyUp={(e) => {
            FilterDropDown(e);
          }}
        />
        <i>
          <FontAwesomeIcon icon={faMagnifyingGlass} color={"black"} />
        </i>
        <div id="drop_item_container" className={styles.drop_item_container}>
          {coins.slice(0, 20).map((coin, index) => {
            return (
              <div
                key={index}
                onClick={(e) => {
                  ClickDopDownValue(e);
                }}
              >
                {coin.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
