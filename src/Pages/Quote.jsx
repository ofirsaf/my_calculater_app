import React, { useEffect } from "react";
import "../Styles/Quote.css";
import logo from "../assets/TeacherLogo.png";
import { useState } from "react";
const mathQuotes = [
  {
    quote:
      "Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection. Its basic elements are logic and intuition, analysis and construction, generality and individuality.",
    author: "Richard Courant, German-American mathematician.",
  },
  {
    quote:
      "The elegant symmetry of a geometric proof resonates with the inherent beauty and harmony of the mathematical universe, revealing the interplay between rigorous logic and intuitive leaps of insight.",
    author: "Unknown",
  },
  {
    quote:
      "Numbers, the fundamental building blocks of mathematics, hold the key to unlocking the secrets of the universe, allowing us to quantify, analyze, and understand the patterns that govern our world.",
    author: "Unknown",
  },
  {
    quote:
      "The intricate dance of equations and symbols in mathematics unveils the profound interconnectedness of abstract ideas, showcasing the remarkable power of human cognition and the thirst for intellectual exploration.",
    author: "Sir Isaac Newton, English mathematician and physicist.",
  },
  {
    quote:
      "The beauty of mathematics lies in its ability to transform complexity into elegant simplicity, illuminating the inherent order and structure that underlie the chaotic world we inhabit.",
    author: "Emmy Noether, German mathematician.",
  },
  {
    quote:
      "Mathematics is the poetry of logical ideas, where equations dance and numbers sing, revealing profound truths about the nature of reality and the boundless potential of the human mind.",
    author: "Shakuntala Devi, Indian mathematician and mental calculator.",
  },
];

export default function Quete() {
  const randomQuote = mathQuotes[Math.floor(Math.random() * mathQuotes.length)];
  const [quote, setQuote] = useState(randomQuote.quote);
  const [author, setAuthor] = useState(randomQuote.author);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomQuote =
        mathQuotes[Math.floor(Math.random() * mathQuotes.length)];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    }, 10000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="home-container">
      <div className="half-screen">
        <div className="ofir">
          <h1 className="title">{quote}</h1>
          <p className="paragraph">{author}</p>
        </div>
      </div>
      <div className="half-screen">
        <img className="math-image" src={logo} alt="Math" />
      </div>
    </div>
  );
}
