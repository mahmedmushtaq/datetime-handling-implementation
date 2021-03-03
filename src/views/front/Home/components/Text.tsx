import React from "react";

const Text = (props: { heading: string; text: string | string[] }) => {
  return (
    <div className="flex items-center mt-2">
      <h3 className="text-2xl font-normal leading-normal mt-0 mb-2 text-black">
        {props.heading}
      </h3>
      <p className="ml-3">{JSON.stringify(props.text)}</p>
    </div>
  );
};

export default Text;
