import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const onChanges = (event) => {
    setValue(event.target.value);
  };

  const onSubmits = (event) => {
    event.preventDefault();
    setValue2(value);
  };

  return (
    <div className="back">
      <div className="div-center">
        <div className="content">
          {console.log(value)}
          {value}
          {value2}
          <form onSubmit={onSubmits}>
            <input type="text" onChange={onChanges} />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
