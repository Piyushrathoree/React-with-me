import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);
 
  const copyPassword = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, password.length);
      window.navigator.clipboard.writeText(password);
    }
  }, [password]);
  
  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, charAllowed, generatePassword]);

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div className="h-72 w-[50%] rounded-[50px] bg-gray-700 flex flex-col items-center  gap-10 pt-6 capitalize text-xl">
        <h2 className="text-white text-3xl">password generator</h2>
        <div className="flex ">
          <input
            type="text"
            placeholder="password "
            value={password}
            className="flex  item-center text-xl h-14 w-96 rounded-l-2xl pl-4 outline-none "
            useRef={passwordRef}
          />
          <button
            className="flex justify-center items-center text-xl h-14 w-36 bg-blue-600 rounded-r-2xl outline-none hover:bg-blue-700"
            onClick={copyPassword}
          >
            copy
          </button>
        </div>
        <div className="flex ">
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="mr-10 ml-2">length:{length}</label>

          <input
            type="checkbox"
            value={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput" className="mr-10 ml-2">
            Numbers
          </label>
          <input
            type="checkbox"
            value={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput" className="ml-2">
            Numbers
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
