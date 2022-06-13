import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Nav from "./components/Nav";
import Box from "./components/Box";
import useSound from 'use-sound';

import music from '../src/music/music.mp3';

import lost from '../src/music/lost.mp3';

import win from '../src/music/win.mp3';



function App() {




  var list = [
    "dread",
    "glasses",
    "mouth",
    "cherry",
    "quartz",
    "sister",
    "carrot",
    "book",
    "student",
    "mascot",
    "assignment",
    "cranes",
    "worker",
    "glue",
    "boring",
    "mill",
    "snowman",
    "strike",
    "elephant",
    "grandmother",
    "pain",
    "spider",
    "ocean",
    "detention",
    "fish",
    "dance",
    "fountain",
    "surfing",
    "man",
    "eraser",
    "moon",
    "eye",
    "ladybug",
    "suit",
    "rainbow",
    "trace",
    "charge",
    "chair",
    "corn",
    "falling",
    "planets",
    "ears",
    "dusting",
    "nurse",
    "wheels",
    "pancakes",
    "nose",
    "desk",
    "postal",
    "cry",
    "drinking",
    "failing",
    "laugh",
    "happy",
    "scrape",
    "panic",
    "cricket",
    "spaghetti",
    "homework",
    "clock",
    "snow",
    "donut",
    "pickle",
    "fireman",
    "company",
    "lawyer",
    "father",
    "cape",
    "giraffe",
    "mother",
    "keys",
    "garbage",
    "flower",
    "mailbox",
    "mad",
    "calendar",
    "dictionary",
    "tackle",
    "communication",
    "computer",
    "doctor",
    "pollen",
    "baseball",
    "night",
    "pearls",
    "hearts",
    "terrific",
    "rock",
    "column",
    "furnace",
    "exam",
    "pilates",
    "sprout",
    "closet",
    "magic",
    "sandwich",
    "lion",
    "terrace",
    "cheese",
    "crane",
    "rattle",
    "imagination",
    "alarm",
    "popsicle",
    "headset",
    "pumpkin",
    "date",
    "bookshelf",
    "taco",
    "grandfather",
    "blinds",
    "egg",
    "rain",
    "police",
    "eyes",
    "teacher",
    "face",
    "peace",
    "chains",
    "cobbler",
    "park",
    "left",
    "air",
    "band",
    "arms",
    "rock",
    "tender",
  ];

  const [soundUrl, setSound] = useState(music);
  const [word, setWord] = useState("");
  const [imageUrls, setUrls] = useState([]);
  const [guessLeft, manageGuess ] = useState(3);
  const [level ,setLevel] = useState(1);
  const [ans, setAns] = useState('');

  const [play] = useSound(soundUrl);

  useEffect(() => {
    play();
    let len = list.length;
    let randomIndex = Math.floor(Math.random() * 100);

    let randomIndexes = new Set();

    while (randomIndexes.size < 4) {
      let i = Math.floor(Math.random() * 20);
      randomIndexes.add(i);
    }

    let randomIndexArr = Array.from(randomIndexes);
    console.log(randomIndexArr.length);
    console.log(randomIndexArr);

    setWord(list[randomIndex]);

    let images = fetch(
      `https://pixabay.com/api/?key=27970311-7e51639eb64990c633d80fa26&q=${list[randomIndex]}&image_type=photo&pretty=true&per_page=20`
    )
      .then((res) => res.json())
      .then((data) => {
        let temp = data.hits.map((i) => {
          return i.largeImageURL;
        });
        console.log(temp);
        let temparr = [];
        randomIndexArr.map((i) => {
          console.log(temp[i]);
          temparr.push(temp[i]);
        });
        setUrls(temparr);
      });
  }, []);

  const nextLevel = () =>
  {
    let len = list.length;
    let randomIndex = Math.floor(Math.random() * 100);

    let randomIndexes = new Set();

    while (randomIndexes.size < 4) {
      let i = Math.floor(Math.random() * 20);
      randomIndexes.add(i);
    }

    let randomIndexArr = Array.from(randomIndexes);
    console.log(randomIndexArr.length);
    console.log(randomIndexArr);

    setWord(list[randomIndex]);

    let images = fetch(
      `https://pixabay.com/api/?key=27970311-7e51639eb64990c633d80fa26&q=${list[randomIndex]}&image_type=photo&pretty=true&per_page=20`
    )
      .then((res) => res.json())
      .then((data) => {
        let temp = data.hits.map((i) => {
          return i.largeImageURL;
        });
        console.log(temp);
        let temparr = [];
        randomIndexArr.map((i) => {
          console.log(temp[i]);
          temparr.push(temp[i]);
        });
        setUrls(temparr);
      });
  }


  const checkAns = () =>
  {

if (ans.includes('-') ){
  window.alert("fill all the letters");
} else if (ans == word) {

 window.alert("you won !!!!!");

} 
else{

  for(let i =0;i<ans.length;i++)
  {
    if(ans.charAt(i)== word.charAt(i))
    {
      let ele = document.getElementById(`i-${i}`);
      ele.disabled = true;
      ele.className= "fixed";

    }

  }



}
  }



  return (
    <>
      <Nav guessLeft={guessLeft} level={level} />
      <Box urls={[...imageUrls]} />
      <Button word={word} checkAns={checkAns} setAns={setAns} />
    </>
  );
}

export default App;
