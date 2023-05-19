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
      <div className="flex p-4 flex-col w-full rounded-lg  shadow-xl  md:max-w-[500px] min-h-[300px] bg-slate-100">
        <div className="flex-1 bg-red">
          <h2 className="pb-4 mb-4 text-xl font-semibold border-b-2 border-black">
            {title}
          </h2>
          <p>{content}</p>
        </div>
        <div className="flex w-full space-x-4 ">
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
