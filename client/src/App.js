import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import Footer from "./component/Footer";
import Navigation from "./component/Navigation";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function App() {
    const listContact = useSelector(
        (state) => state.contactReducer.listContact
    );
    return (
        <div className="App">
            <Navigation />
            <Link to="/">
                <Button>Contact List</Button>
            </Link>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/add" component={Add} />
                <Route
                    path="/edit/:id"
                    render={(props) => (
                        <Edit {...props} contact={listContact} />
                    )}
                />
                <Route path="/*" component={Error} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
