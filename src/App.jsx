import React, { useState, useMemo, useEffect } from 'react'
import { UserContext } from './hooks/Contexts';
import Layout from './components/pages/Layout';
import { apiFtech } from './utils/api';


function App() {

  /**
   * DATA
   */
  const [user, setUser] = useState(null);
  /**
   * INIT USER CONTEXT
   */
  const UserContextValue = useMemo(function () {
    return {
      user,
      setUser,
    }
  }, [user, setUser])

  /**
   * FETCH USER
   * 
  */
  useEffect(() => {
    apiFtech("/buyer/")
      .then((data) => setUser(data))
      .catch(() => setUser(null))
  }, [])


  return (
    <UserContext.Provider value={UserContextValue}>
      <Layout />
    </UserContext.Provider>
  );
}

export default App;
