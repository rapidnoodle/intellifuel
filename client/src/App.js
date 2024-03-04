import { useState, useEffect } from 'react';
import Header from './components/header';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState({
    name: "",
    age: 0,
    date: "",
    programming: "",
  });

  useEffect(() => {
    // fetch("/data").then((res) =>
    //   res.json().then((data) => {
    //     setData({
    //       name: data.Name,
    //       age: data.Age,
    //       date: data.Date,
    //       programming: data.programming,
    //     });
    //   })
    // );
  }, []);

  return (
    <div className="App">
      <Header currentPage="our team" />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React and Flask</h1>
        <p>{data.name}</p>
        <p>{data.age}</p>
        <p>{data.date}</p>
        <p>{data.programming}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
