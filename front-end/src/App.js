import React from 'react';

import './global.css';

import Routes from './routes';

//JSX Javascript XML

function App() {
  return (
    <Routes />
  );
}

export default App;



// import React, { useState } from 'react';
// import Header from './Header';

// //JSX Javascript XML

// function App() {
// const [ counter, setCounter ] = useState(0);

// //Conceito da Imutalidade de React
// //Array {valor, funçãoDeAtualização}

// function increment() {
//   setCounter(counter + 1);
// }

//   return (
//   <div>
//     <Header>Contador: {counter}</Header>
//     <button onClick={increment}>Incrementar</button>
//   </div>
//   );
// }

// export default App;
