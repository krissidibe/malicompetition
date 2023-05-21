"use client"
import React from "react";
import ButtonComponent from "./ButtonComponent";
function ModalComponent({
  title = "Title",
  content = "",

  leftButtonLabel = "",
  leftButtonAction = () => {},
  rightButtonLabel = "",
  rightButtonAction = () => {},
}) {
  return (
    <div className="fixed inset-0 top-0 left-0 right-0 z-10 flex items-center justify-center w-full h-full p-10 text-black">
      <div className="flex  flex-col w-full rounded-lg  shadow-xl  md:max-w-[400px] min-h-[250px] bg-slate-100">
        <div className="flex-1 bg-white">
          <h2 className="p-4 pb-4 mb-4 text-xl font-semibold border-b-2 border-black">
            {title}
          </h2>
          <p className="flex items-center justify-center flex-1 p-4 text-xl" >{content}</p>
        </div>
        <div className="flex w-full p-4 space-x-4 bg-white ">
          {leftButtonLabel != "" && (
            <ButtonComponent
              key={4}
              handleClick={leftButtonAction}
              label={leftButtonLabel}
              full={false}
            />
          )}
          {rightButtonLabel != "" && (
            <ButtonComponent
              key={4}
              handleClick={rightButtonAction}
              label={rightButtonLabel}
              full={true}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
