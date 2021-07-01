import React, { useState, useMemo, useEffect } from 'react'
import { UserContext } from './hooks/Contexts';
import Layout from './components/pages/Layout';
import { apiFtech } from './utils/api';


function App() {

  /**
   * DATA
   */
  const [authorization, setAuthorization] = useState(false);
  const [user, setUser] = useState(null);

  /**
   * INIT USER CONTEXT
   */
  const UserContextValue = useMemo(function () {
    return {
      user,
      setUser,
      authorization,
      setAuthorization
    }
  }, [user, setUser, authorization, setAuthorization])

  /**
   * FETCH USER
  */
  useEffect(() => {
    apiFtech("/buyer/")
      .then(data => mountUser(data))
      .catch(() => setUser(null))

    async function mountUser(data) {
      setUser(await data);
    }
  }, [authorization])



  return (
    <UserContext.Provider value={UserContextValue}>
      {console.log('render')}
      <Layout />
    </UserContext.Provider>
  );
}

export default App;
