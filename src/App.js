import Content from "./layout/content";
import Sidebar from "./layout/sidebar";
import "./App.css";

function App() {
  return (
    <div>
      <div className="page-content">
        <Sidebar/>
        <Content/>
      </div>

    </div>
  );
}

export default App;
