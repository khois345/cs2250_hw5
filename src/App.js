import './App.css';
import React from "react";

const App = () => {
  const [imgs, setImgs] = React.useState([]);
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch("https://shibe.online/api/shibes?count=10")
      .then((res) => res.json())
      .then((json) => {
        setImgs(json);
        setIsDataLoaded(true);
      });
  }, []);

  if (!isDataLoaded) {
    return (
      <div>
        <h1> Loading shiba images...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Fetching images from a Shiba API in react.</h1>
      <h2>Source and reference: <a href="https://shibe.online/.">https://shibe.online/</a></h2>
      {
      imgs.map((image, index) => (
        <ul key = { index }>
          <li>
            <img src = { image } alt = ""></img>
          </li>
        </ul>
      ))
      }
    </div>
  );
}

export default App;
