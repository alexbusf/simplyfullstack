import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import './App.css';

function App() {
  const [dataItems, setDataItems] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3010/api/data')
    .then((res) => res.json())
    .then((result) => setDataItems(result.data));
  }, []);

  return (
    <div>
      {dataItems.map((item) =>(
        <Form.Group key={item.id} className="app__data-item">
          <Form.Check type="checkbox" checked={item.published} />
          <Form.Control type="text" value={item.text} />
        </Form.Group>
      ))}
    </div>
  );
}

export default App;
