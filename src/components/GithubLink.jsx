import React, { useState, useEffect, useCallback } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { EMOTIONS } from "../Constants/emotionRecognizer.constant";

const GithubLink = () => {
  const [emotion, setEmotion] = useState("");
  const [score, setScore] = useState(0);

  const getRandomEmotion = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * EMOTIONS.length);
    return EMOTIONS[randomIndex];
  }, []);

  const increaseScore = useCallback(() => {
    setScore((prevScore) => {
      setEmotion(getRandomEmotion());
      return prevScore + 1;
    });
  }, [getRandomEmotion]);

  useEffect(() => {
    setEmotion(getRandomEmotion());
    const interval = setInterval(() => {
      increaseScore();
    }, 3000);
    return () => clearInterval(interval);
  }, [getRandomEmotion, increaseScore]);

  return (
    <div>
      <a href="https://www.youtube.com/" className="back-icon">
        <FaArrowLeft />
      </a>
      <span> Emotion Match</span>
      <div>Emotion: {emotion}</div>
      <div>Score: {score}</div>
    </div>
  );
};

export { GithubLink };
