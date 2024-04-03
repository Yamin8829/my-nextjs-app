"use client";
import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function scrollToElement(id: any) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function ImageLink({ width, height, id, filename }: any) {
  return (
    <div className="flex flex-row w-full py-2 gap-2">
      <a
        href={`#${id}`}
        className="btn btn-xs"
        onClick={() => scrollToElement(id)}
      >
        1
      </a>
    </div>
  );
}
