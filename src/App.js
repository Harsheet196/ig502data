import { useState } from 'react';
import './App.css';

 

function App() {

  const [data, setData] = useState('')
  let ws = new WebSocket("wss://ig502pubsub.webpubsub.azure.com/client/hubs/hub1?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ3c3M6Ly9pZzUwMnB1YnN1Yi53ZWJwdWJzdWIuYXp1cmUuY29tL2NsaWVudC9odWJzL2h1YjEiLCJpYXQiOjE3MTA0OTM5MzMsImV4cCI6MTcxMDQ5NzUzMywicm9sZSI6WyJ3ZWJwdWJzdWIuc2VuZFRvR3JvdXAiLCJ3ZWJwdWJzdWIuam9pbkxlYXZlR3JvdXAiXX0.Pi3bteQXyoBZoFZoyk9ZDap7PU9VffsETvh87o07kHE");
  ws.addEventListener('open', () => console.log('connected'));
  ws.addEventListener('message', data => {/*console.log('Message received: %s', data.data);*/ setData(data.data)});

  return (
    <div className="App">      
        <p> Test data : {data}</p>
    </div>
  );
}

export default App;
