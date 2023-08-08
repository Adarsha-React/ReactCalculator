import { useState } from "react";

const Section = (props) => {
  const { title, description } = props;
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="border border-1 border-gray-500 m-2 p-2 w-1/2">
      <div className="flex justify-between">
        <h1 className="font-bold text-orange-400">{title}</h1>
        {isVisible ? (
          <button
            className="bg-green-600 px-2 rounded-md text-white text-xs font-bold"
            onClick={() => setIsVisible(false)}
          >
            hide
          </button>
        ) : (
          <button
            className="bg-green-600 px-2 rounded-md text-white text-xs font-bold"
            onClick={() => setIsVisible(true)}
          >
            Show
          </button>
        )}
      </div>

      {isVisible && <p className="">{description}</p>}
    </div>
  );
};

export default Section;
