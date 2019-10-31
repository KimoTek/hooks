import React, { Component, useState, useEffect } from "react";
import { hot } from "react-hot-loader";

function Button() {
  const [buttonText, setButtonText] = useState("Click me, please");

  return (
    <button onClick={() => setButtonText("Thanks, been clicked!")}>
      {buttonText}
    </button>
  );
}

function DataLoader(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  // Using render props to render the data. Alternatively use
  /**
   return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
   );
  */
  return props.render(data);
}

class App extends Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <Button />
        <DataLoader
          render={data => {
            return (
              <div>
                <ul>
                  {data.map(el => (
                    <li key={el.id}>{el.name}</li>
                  ))}
                </ul>
              </div>
            );
          }}
        />
        <div>Hello {name}</div>
      </>
    );
  }
}

export default hot(module)(App);
