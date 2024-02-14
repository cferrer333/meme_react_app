import React, { useState } from "react";
import { useGetData } from "../custom-hooks/FetchData";

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
  };



  return (
    <div>
      {/* Controlled form */}
      <form className="meme-form" onSubmit={handleSubmit}>
        {/* Input field to get First text */}
        
        
        <input 
          placeholder="Enter Top Text"
          type="text"
          value={topText}
          name="topText"
          onChange={handleChange}
        />
        {/* Input field to get Last text */}
        <input
          placeholder="Enter Bottom Text"
          type="text"
          value={bottomText}
          name="bottomText"
          onChange={handleChange}
        />
        
        {/* Button to generate meme */}
        <center><button className="flex item-center px-3 py-2 text-gray-600 
                border rounded border-teal-400 hover:text-black hover:border-black"
          >Generate</button></center>
      </form>

      <br />
      <div className="meme">
        {/* Only show the below elements when the image is ready to be displayed */}
        {randomImg === "" ? "" : (
          <>
            <img src={randomImg} alt="meme" />
            <h2 className="top">{topText}</h2>
            <h2 className="bottom">{bottomText}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default MemeGenerator;