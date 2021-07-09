import Login from "./Login";
import { Switch, Route, BrowsersRouter as Router } from "react-router";
import Signup from "./Signup";

function App() {
  const isAuth = false;
  if (!isAuth) {
    return (
      <div className="auth">
        <Signup />
        {/* <Login /> */}
      </div>
    );
  } else {
    return <div>content</div>;
  }
}

export default App;
