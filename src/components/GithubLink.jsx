import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Import the back icon from react-icons library
import { EMOTIONS } from "../Constants/emotionRecognizer.constant"; // Import predict function and EMOTIONS constant
import { predict } from "../Common/tensorflowPredictions.js";

const GithubLink = () => {
  const [emotion, setEmotion] = useState(""); // State to store the random emotion
  const [score, setScore] = useState(0); // State to store the score

  // Function to generate a random emotion string
  const getRandomEmotion = () => {
    const randomIndex = Math.floor(Math.random() * EMOTIONS.length);
    return EMOTIONS[randomIndex];
  };

  // Function to increase the score every 3 seconds
  const increaseScore = () => {
    setScore((prevScore) => {
      // Update emotion when score changes
      setEmotion(getRandomEmotion());
      return prevScore + 1;
    });
  };

  // Effect to update the random emotion on component mount and increase the score every 3 seconds
  useEffect(() => {
    setEmotion(getRandomEmotion());
    const interval = setInterval(() => {
      increaseScore();
    }, 3000);
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div>
      <a href="https://www.youtube.com/" className="back-icon">
        <FaArrowLeft />
      </a>
      <span> Emotion Match</span>
      <div>Emotion: {emotion}</div>
      <div>Score: {score}</div> {/* Corrected from setScore to score */}
    </div>
  );
};

export { GithubLink }; // Correct export statement
