// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";

document.addEventListener("DOMContentLoaded", () => {
  const handleImageLoad = (img: HTMLImageElement) => {
    img.classList.add("loaded");
  };

  const observeImages = () => {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad(img);
      } else {
        img.addEventListener("load", () => handleImageLoad(img));
      }
    });
  };

  observeImages();

  const observer = new MutationObserver(() => observeImages());
  observer.observe(document.body, { childList: true, subtree: true });
});
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <ErrorMessage>
      <App />
    </ErrorMessage>
  // </React.StrictMode>
);
