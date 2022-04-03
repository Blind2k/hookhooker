import React from "react";
import { Pre, Line, LineNo, LineContent } from "../UI/styles";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

const exampleCode = `
import { useState } from "react";

const UsingState = () => {
   const [counter, addCounter] = useState(0);
   const [name, addName] = useState("Pedro");

   const addCounterHandler = () => {
      addCounter(counter + 1);
   };

   const addNameHandler = event => {
      addName(event.target.value);
   };

   return (
      <div>
         <p>Change the count</p>
         {counter}
         <button onClick={addCounterHandler}>+</button>
         <br />
         <lab
         <input placeholder="Write here" onChange={addNameHandler}></input>
         {name}
      </div>
   );
};

export default UsingState;

`.trim();

const WithLineNumbers = () => (
  <Highlight {...defaultProps} theme={theme} code={exampleCode} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line key={i} {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            <LineContent>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
  </Highlight>
);

export default WithLineNumbers;
