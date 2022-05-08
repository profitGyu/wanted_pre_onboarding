# wanted_pre_onbarding

온보딩 코스 첫주차 과제 페이지 입니다!
[온보딩 코스 첫주차 과제 페이지](https://github.com/silent10z/refactoring_wanted_pre_onboarding)

https://silent10z.github.io/wanted_pre_onboarding
로 접속하시면 구연된 것들을 확인 할 수 있습니다.

**아쉬 웠던 점**

기능들을 구연을 하고나니 중복 되는 input BOX는 컴포넌트 화 시킬 수 있었 던거 같았고 css를 최대한 따라하려고 했으나 많이 부족한 부분인거 같다.

**공통 사항**

css module을 사용하여 css 적용, 아이콘은 FontAwesomeIcon을 사용했습니다.

## Tab

1. 감자, 고구마, 카레라이스를 object list로 만들어서 map을 활용하여 a태그를 만들어 주었고 map의 index를 활용하여 useState값을 비교하여 클릭된 폰트 색상을 변경하도록 구연 하였다.

```javascript
    style={
                tab === index
                  ? {
                      color: "#000",
                    }
                  : { color: "#8f8f8f8f" }
              }

```

2. 슬라이드 애니메이션 기능은 버튼 클릭시 타겟의 좌표를 얻어와서 offsetLeft, offsetWidth, offsetTop 값을 매칭후 아래로 적용 후
   position: absolute;로 좌표 지정 후 transition로 구연 하였다.

슬라이드 애니메이션 기능을 구연하는데 있어서 부족한 점이 많은거 같다.

## DropDown

1. 필터링을 할 리스트 코인 정보를 openAPI에서 값을 가져와서 coins state 안에 값을 넣어줍니다.

```javascript
const [coins, setCoin] = useState([]);

const getCoinTracker = async () => {
  const json = await (
    await fetch("https://api.coinpaprika.com/v1/tickers")
  ).json();
  setCoin(json);
};
useEffect(() => {
  getCoinTracker();
}, []);
```

2. 드롭다운을 위한 input 박스와 filter를 위한 input(display:none) + coins 리스트 박스를 구연 후 첫번째 박스를 클릭시 두번째 박스가 나오도록 구연 (API에서 받아온 값들이 많아서 10개만 slice함)

-input(display:none) + coins 리스트 박스를 구연 할떄 Tab과 같이 position: absolute; 으로 구연함.

3. 검색창에 적은 text값을 가져와 filter 로 적용 후 코인 리스트에 있는지 없는지 indexOf로 확인 하여 display 값을 변경 해주어 구연하였다.

```javascript
const FilterDropDown = (e) => {
  let input = e.target.value;
  let filter = input.toUpperCase();
  let div = document.getElementById("drop_item_container");
  let div_props = div.getElementsByTagName("div");

  for (let i = 0; i < div_props.length; i++) {
    let textValue = div_props[i].textContent || div_props[i].innerHTML;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      div_props[i].style.display = "";
    } else {
      div_props[i].style.display = "none";
    }
  }
};
```

ps.. css가 매끄럽게 이쁘지 않은 것 같다.

## Input

1. email, password input dox를 flex를 활용하여 커스텀 해준다.

2. emailCheck email 란에 받아온 값을 **test()**메소드를 활용 하여 이메일 정규식과 일치하는지 검색을 수행하여 boolean에 맞게 색상을 지정 해준다.

```javaScript

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

```

3. password 옆 눈 버튼 클릭시 input 타입을 text로 변경해준다.

```javascript
function ChangePasswrodType(e) {
  let password = document.getElementById("pass_input");
  if (password?.type === "password") {
    password.type = "text";
    password.placeholder = "페스워드";
    setEyeIcon(false);
  } else {
    password.type = "password";
    password.placeholder = "password";
    setEyeIcon(true);
  }
}
```

## Slider

1. 두개의 input 박스 1.text(슬라이드 값 readOnly) 2.range 의 value 값을 같은 변수로 적용을 해준다.

2.슬라이 값이 변경 될 때 마다 변수에 값을 넣어 준다.

```javascript
const [sliderValue, setSliderValue] = useState(1);
function sliderChange(value) {
  setSliderValue(value);
}

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
```
