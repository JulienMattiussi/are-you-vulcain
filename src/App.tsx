import "./App.css";

import spokLogo from "/spok-icon.jpg";
import { useState } from "react";

const VULCAN_NAMES: string[] = [
  "Leonard",
  "Léonard",
  "Nimoy",
  "Guiom",
  "Guillaume",
  "Pierson",
  "Spok",
];

const NOT_VULCAN_NAMES: string[] = ["Billey"];

const checkVulcan = (name: string): boolean => {
  if (
    VULCAN_NAMES.find((vulcanName) =>
      name.toUpperCase().includes(vulcanName.toUpperCase())
    )
  ) {
    if (
      NOT_VULCAN_NAMES.find((notVulcanName) =>
        name.toUpperCase().includes(notVulcanName.toUpperCase())
      )
    ) {
      return false;
    }
    return true;
  }
  return false;
};

const App = () => {
  const [name, setName] = useState<string>("");
  const [isVulcan, setIsVulcan] = useState<boolean | null>(null);

  const handleChangeName = (event: any) => {
    setName(event?.target?.value);
  };

  return (
    <>
      <div>
        <img src={spokLogo} className="logo" alt="Spok logo" />
      </div>
      <h1>Are you Vulcan</h1>
      <div className="card">
        <p>
          <label>My name is : </label>
          <input type="text" value={name} onChange={handleChangeName} />
        </p>
        <button onClick={() => setIsVulcan(checkVulcan(name))}>
          Check if I'm Vulcan
        </button>
        <h2>
          {isVulcan === null
            ? ""
            : isVulcan
            ? "Yes, you are a Vulcan"
            : "No, you are probably a human"}
        </h2>
      </div>
    </>
  );
};

export default App;
