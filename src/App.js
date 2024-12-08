import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import PostCreation from './components/post';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <> 
    <div>
      {!isLoggedIn ? <Login onLogin={handleLogin} /> : <Home />}
    </div>
    <PostCreation/>
    </>
    
  );
};

export default App;






// import React, { useState } from 'react';
// import Login from './components/Login';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <div>
//       {!isLoggedIn ? <Login onLogin={handleLogin} /> : <h1>Welcome to Home Page</h1>}
//     </div>
//   );
// };

// export default App;


