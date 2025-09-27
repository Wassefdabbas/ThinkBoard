import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-full p-4">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
};

export default Spinner;