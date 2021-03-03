import React, { useState } from "react";
import { semiStringManuplation } from "../../../utils";
import Text from "./components/Text";

// used tailwind css
function Home() {
  const [value, setValue] = useState({
    text: "",
    date: "",
    body: "",
    tags: [],
  });
  const onChange = (e: React.ChangeEvent<{ name: string; value: string }>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (!value.text) return;

    const { body, date, tagsArray } = semiStringManuplation(value.text);
    setValue({ ...value, body, date, tags: tagsArray });
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-center text-center">
      <div className="w-9/12">
        <input
          type="text"
          name="text"
          value={value.text}
          onChange={onChange}
          placeholder="Enter your string"
          className="focus:outline-none border-2 border-blue-300 focus:ring focus:border-blue-300 p-1.5 w-full"
        />
      </div>
      <div>
        <button
          className={"border-2 m-3 p-3.5 text-white"}
          style={{ backgroundColor: "#3498db" }}
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
      <div>
        {/* for date */}

        {value.date && <Text heading="Date" text={value.date} />}
        {value.body && <Text heading="Body" text={value.body} />}
        {value.tags.length > 0 && <Text heading="Tags" text={value.tags} />}
      </div>
    </div>
  );
}

export default Home;
