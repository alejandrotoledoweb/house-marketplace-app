import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

function Profile() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    console.log(auth.currentUser);
    setUser(auth.currentUser);
  }, [auth]);
  return user ? <h2>{user.displayName}</h2> : 'Not Found User';
}

export default Profile;
