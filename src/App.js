import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss'

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
