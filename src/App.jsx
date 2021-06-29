import React, { useState } from 'react'
import Layout from './components/pages/Layout';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Layout />
  );
}

export default App;
