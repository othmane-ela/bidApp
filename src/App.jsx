import React, { useState } from 'react'
import Layout from './components/App/Layout';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Layout />
  );
}

export default App;
