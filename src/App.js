import Navbar from "./Components/Navbar";
import "./App.css";
import TextArea from "./Components/TextArea";
import { useState } from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Alert from "./Components/Alert";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";

function App() {
  //react useState hook to  set mode of react-app, either it will be dark or light.
  const [mode, setmode] = useState("light");

  //usestate hook to set label on switch, by default it is set to 'Enable dark Mode'.
  const [labeltext, setlabeltext] = useState("Enable dark Mode");

  //useState a react hook , it is used here to set alert , and take argument object.
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      setlabeltext("Disable dark Mode"); //setting label
      document.body.style.background = "#18191A";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      setlabeltext("Enable dark Mode");
      document.body.style.background = "white";
      showAlert("Dark mode has been disabled", "success");
    }
  };

  //method to show alert if an action is taken place.
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Main>
        <Navbar
          title="TextUtils"
          aboutText="AboutTextUtils!"
          mode={mode}
          toggleMode={toggleMode}
          labeltext={labeltext}
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route
            exact
            path="/"
            element={
              <TextArea
                heading="TextUtils - Word counter , Character Counter , Remove Extra Spaces "
                showAlert={showAlert}
                mode={mode}
              />
            }
          />
        </Routes>
        <Footer mode={mode} />
      </Main>
    </>
  );
}

export default App;
