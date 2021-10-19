import Joinus from "./components/Joinus.js";
// import Mobile from "./components/Mobile.js";
import Search from "./components/Search.js";
import Home from "./components/Home.js";

import Login from "./components/Login.js";
import Setting from "./components/Settings.js";
import Contact from "./components/Contact.js";
import Help from "./components/Help.js";
import Download from "./components/Download.js";
import "./App.css";
import Button from "./components/Button.js";





function App() {
  return (
    <div>
    <div className = "flex">
      <Joinus />
      <Setting />
      <Login />
      <Contact />
      <Search />
      <Help />
      <Home />
      <Download />
    </div>
      <div className = "flex">
          <Button classA = "join" name = "JOIN US" />
          <Button classA = "setting" name = "SETTINGS" />
          <Button classA = "joina" name = "LOGIN" />
          <Button classA = "contact" name = "CONTACT US" />
          <Button classA = "search" name = "SEARCH" />
          <Button classA = "help" name = "HELP" />
          <Button classA = "home" name = "HOME" />
          <Button classA = "download" name = "DOWNLOAD" />

      </div>
    </div>
  );
}

export default App;
