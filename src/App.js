import { Porduct } from "./components/Porduct";
import data from "./user.json";
function App() {
  return (
    <div className="App">
      {data.data.map((item) => {
        return <Porduct key={item.id} item={item} />;
      })}
    </div>
  );
}

export default App;
