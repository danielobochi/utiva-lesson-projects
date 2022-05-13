import MyOwn from "./components/MyOwn";
import HelloWorld from "./components/HelloWorld";
// import CardComponent from "./components/CardComponent";

const name = "AJ";

function App() {
  return (
    <div>
      {/* <CardComponent title="1" description="Card 1" />
      <CardComponent title="2" description="Card 2" />
      <CardComponent title="3" description="Card 3" /> */}
      <MyOwn theName={name} />
      <HelloWorld theName="Owonikoko" />
    </div>
  );
}

export default App;
