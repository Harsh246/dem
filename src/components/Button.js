import React from "react";
import { useEffect, useState } from "react";
import "../styles/buttons.css";

export default function Button(props) {
  const [inputState, setInputState] = useState([]);

  //dynamic form inputs

  useEffect(() => {
    props.word.split().map((val, i) => {
      let newar = [];

      for (let i = 0; i < props.word.length; i++) {
        newar.push("");
      }

      setInputState([...newar]);
    });
  }, [props.word]);

  // const handleChange = (e) => {
  //   let newArr = [...inputState];

  //   newArr[e.target.name] = e.target.value;

  //   setInputState([...newArr]);

  //   console.log(inputState);
  // };


  const checkDisabled = (element,num) =>
  {

    console.log(element.disabled);
    while(num>=0&& element.disabled )
    {
num--;
    }

    return document.getElementById(`i-${num}`);
  }

  const checkEnter = (inp, e) => {
    let query;
    if (e.key == "Enter") {
      if (inp < props.word.length) query = inp + 1;
      const ele = document.getElementById(`i-${query}`);

      if (ele) ele.focus();
    } else if (e.keyCode == 8) {
      return;
    } else if (e.keyCode == 37) {
      console.log("arrow pressed");

      if (inp > 0) query = inp - 1;
      let ele = document.getElementById(`i-${query}`);

     
      if (ele) 
      
      { 
        
       ele =  checkDisabled(ele, query);

        ele.focus();
      }
    } else if (e.keyCode == 39) {
      if (inp < props.word.length) query = inp + 1;
      const ele = document.getElementById(`i-${query}`);

      if (ele) ele.focus();
    } else if (e.keyCode == 32) {
      if (inp < props.word.length) query = inp + 1;
      const ele = document.getElementById(`i-${query}`);

      if (ele) ele.focus();
    } else if (
      (e.keyCode >= 65 && e.keyCode <= 90) ||
      (e.keyCode >= 97 && e.keyCode <= 122)
    ) {
      const ele = document.getElementById(`i-${inp}`);
      ele.value = e.key;
      var event = new Event("input", { bubbles: true });
      ele.dispatchEvent(event);
    }
  };

  const maintainWords = () => {
    let word = "";

    for (let i = 0; i < props.word.length; i++) {
      let el = document.getElementById(`i-${i}`);

      if (el.value == "") word += "-";
      else word += el.value;
    }
    console.log(word);

    props.setAns(word);
  };

  return (
    <>
      {/* <h1>{props.word}</h1> */}

      <form className="buttons">
        <img src="https://img.icons8.com/cotton/48/undefined/innovation.png" />
        {props.word.split("").map((i, key) => (
          <input
            name={key}
            id={`i-${key}`}
            type="text"
            autoComplete="off"
            maxLength={1}
            key={key}
            onChange={maintainWords}
            onKeyUp={(event) => checkEnter(key, event)}
            onFocus={() => {
              let ele = document.getElementById(`i-${key}`);
              let val = ele.value;
              ele.value = null;
              ele.value = val;
            }}
          />
        ))}
        <button type="button" className="check-btn"  onClick={props.checkAns}>GO</button>
      </form>
    </>
  );
}
