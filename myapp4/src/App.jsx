import React, { createContext } from 'react';
import CallA from './CallA';

const FirstName = createContext();
const LastName = createContext();
const App = () => {
  return (
    <>
      <FirstName.Provider value={"alam"}>
        <LastName.Provider value={"jamal"}>
      <CallA/>
      </LastName.Provider>
      </FirstName.Provider>
    </>
  )
}

export default App;
export {FirstName , LastName};

//agar hamko direct app se c me data bhejna hai wha pe context use hoga 