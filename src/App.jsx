import React, { useState, useMemo, useEffect } from 'react'
import { UserContext } from './hooks/contexts';
import Site from './components/pages/Site';
import { apiFetch } from './utils/api';


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
    apiFetch("/buyer/")
      .then(setUser)
      .catch((e) => { setUser(false) })
  }, [authorization])


  if (user === null) {
    return null;
  }


  return (
    <UserContext.Provider value={UserContextValue}>
      <Site />
    </UserContext.Provider>
  );
}

export default App;
