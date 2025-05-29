import './App.css';
import { useEffect, useState } from 'react';

export function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, []);

  console.log(users)

  return (
    <>
      <h1>Parcel React App</h1>
      <p>Edit <code>src/App.tsx</code> to get started!</p>
      {loading ? <p>loading</p> : <ul>{users.map(x => <li>{x.name}</li>)}</ul>} 
    </>
  );
}
