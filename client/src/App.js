import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import Footer from "./component/Footer";
import Navigation from "./component/Navigation";

function App() {
    return (
        <div className="App">
            <h1>mern app workshop</h1>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/add" component={Add} />
                <Route path="/edit" component={Edit} />
                <Route path="/*" component={Error} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
