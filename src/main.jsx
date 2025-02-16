import './index.css'
import ReactDOM from "react-dom/client"; // Importação de 'react-dom/client' para o React 18
import App from "./App";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
