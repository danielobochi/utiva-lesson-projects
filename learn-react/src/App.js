import { useState } from "react";

import CardComponent from "./components/CardComponent";
import items from "./database";

function App() {
  let [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <div>
      <h1 className="p-4">My Shop App</h1>
      <h3 className="p-4">{cartCount} items in cart</h3>
      <div className="d-flex justify-content-evenly">
        {items.map((value, index) => {
          return (
            <CardComponent
              key={index}
              title={value.title}
              description={value.description}
              colour={value.colour}
              addToCart={() => {
                setCartCount((cartCount += 1));
                cart.push(value.title);
              }}
            />
          );
        })}
      </div>

      <h2 className="p-4">Items in cart</h2>

      <ul>
        {cart.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
