import React, { useState } from "react";
import { useGetData } from "../custom-hooks/FetchData";
import html2canvas from "html2canvas";


// MemeGenerator component to generate a meme

function MemeGenerator() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImg, setRandomImg] = useState("");
  const { allMemeImgs } = useGetData();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "topText") {
      setTopText(value);
    } else if (name === "bottomText") {
      setBottomText(value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const rand =
      allMemeImgs[(Math.floor(Math.random() * allMemeImgs.length))].url;
    setRandomImg(rand);
    console.log(rand);
  };

  const takeScreenshot = () => {
    const element = document.getElementById("myContainer");
    if (!element) {
      console.error("No element found to take screenshot");
      return;
    }
  
  
    html2canvas(element, {
      allowTaint: true,
      useCORS: true, // Add this option to enable cross-origin resource sharing
    }).then((canvas) => {
      try {
        let image = canvas.toDataURL("image/png");
        const a = document.createElement('a');
        a.href = image;
        a.download = "meme.png";
        document.body.appendChild(a); // Append the 'a' element to the DOM for download
        a.click();
        document.body.removeChild(a); // Clean up by removing the 'a' element from the DOM
      } catch (error) {
        console.error("Error while taking screenshot", error);
      }
    }).catch((error) => {
      console.error("Error while taking screenshot", error);
    });
  };
  return (
    <div>
      {/* Controlled form */}
      <form className="meme-form" onSubmit={handleSubmit}>
        {/* Input field to get First text */}
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input 
          placeholder="Enter Top Text"
          type="text"
          value={topText}
          name="topText"
          onChange={handleChange}
        />&nbsp;&nbsp;&nbsp;&nbsp;
        {/* Input field to get Last text */}
        <input
          placeholder="Enter Bottom Text"
          type="text"
          value={bottomText}
          name="bottomText"
          onChange={handleChange}
        />
        <br/><br/>
        {/* Button to generate meme */}
        <div className="flex justify-center">
    <button className="flex item-center px-3 py-2 text-gray-600 border rounded border-teal-400 hover:text-black hover:border-black">
      Generate
    </button>
    
  </div>
      </form>
      <br/>
      <center><button className="flex item-center px-3 py-2 text-gray-600 
                border rounded border-teal-400 hover:text-black hover:border-black"
          onClick={takeScreenshot}>Download</button></center>
      <br />
      {/* Meme image displayed here */}
      {(randomImg && topText && bottomText) &&  (
  <div>
    <div className="container relative w-2/4 mx-auto" id="myContainer">
      <div className="meme flex flex-col items-center" id="myMeme">
        <img src={randomImg} alt="meme" className="w-full" />
        <h2 className="top text-lg md:text-xl lg:text-2xl xl:text-3xl">{topText}</h2>
        <h2 className="bottom text-lg md:text-xl lg:text-2xl xl:text-3xl">{bottomText}</h2>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
)}
    </div>
  );
};

export default MemeGenerator;