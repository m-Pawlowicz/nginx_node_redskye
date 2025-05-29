import './App.css';
import { useEffect, useState } from 'react';

export function App() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  console.log(users)

  return (
    <>
      <h1>Parcel React App</h1>
      <p>Edit <code>src/App.tsx</code> to get started!</p>
    </>
  );
}
