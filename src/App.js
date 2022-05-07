import "./App.css";
import TopBar from "./components/TopBar";
import BackGround from "./components/BackGround";
import StoreListings from "./components/StoreListings";
function App() {
  return (
    <div className="App">
      <TopBar />
      <BackGround />
      <StoreListings />
    </div>
  );
}

export default App;
