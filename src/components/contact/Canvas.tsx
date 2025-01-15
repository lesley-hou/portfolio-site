import React, { useRef, useState } from "react";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import Button from "../home/Button";
import KeyWrapper from "../home/KeyWrapper";

const Canvas: React.FC = () => {
  const canvasRef = useRef<ReactSketchCanvasRef | null>(null);
  const [brushColor, setBrushColor] = useState("#000000");

  const performCanvasAction = (action: "undo" | "redo") => {
    if (canvasRef.current) {
      canvasRef.current[action]();
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrushColor(e.target.value);
  };

  return (
    <div className="text-center py-5 font-inter flex flex-col">
      <p className="text-iron">thanks for stopping by!</p>
      <p className="text-boulder">doodle something before you go? 🖌️🎨</p>
      <div className="mx-auto mt-2 border border-black rounded-xl overflow-hidden sm:w-[400px] sm:h-[250px] w-[280px] h-[180px]">
        <ReactSketchCanvas
          ref={canvasRef}
          strokeColor={brushColor}
          strokeWidth={5}
          className="w-full h-full"
        />
      </div>
      <div className="mt-2 mb-3 flex items-center justify-center space-x-4">
        <Button onClick={() => performCanvasAction("undo")} className="hover:bg-metal rounded font-vt323" hoverMovement={0}>
          <KeyWrapper>↺ undo</KeyWrapper>
        </Button>
        <Button onClick={() => performCanvasAction("redo")} className="hover:bg-metal rounded font-vt323" hoverMovement={0}>
          <KeyWrapper>redo ↻</KeyWrapper>
        </Button>
        <div className="relative group">
          <div
            className="w-6 h-6 rounded-md border border-boulder cursor-pointer"
            style={{ backgroundColor: brushColor }}
          ></div>
          <input
            type="color"
            value={brushColor}
            onChange={handleColorChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Canvas;
