import React from "react";

const NewPasswordComponent = () => {
  return (
    <div className="w-full h-full">
      <h1 className="font-bold text-4xl text-center text-[#333740] mt-16">
        NEW PASSWORD
      </h1>

      <div className="flex flex-col m-16 justify-center items-center gap-40 mt-20">
        <div className="w-full flex gap-8 px-30">
          <input
            type="email"
            placeholder="New Password"
            className="border rounded-3xl placeholder:text-xs px-4 py-2 w-1/2"
          />

          <input
            type="email"
            placeholder="Confirm Password"
            className="border rounded-3xl placeholder:text-xs px-4 py-2 w-1/2"
          />
        </div>

        <button className="bg-[#FFBF3D] text-white rounded-3xl text-xs px-4 py-3 w-1/2">
          CHANGE PASSWORD
        </button>
      </div>
    </div>
  );
};

export default NewPasswordComponent;
