import "./App.css";
import Navbar from "./Components/Navbar";
import ArjunCodes from "./Components/ArjunCodes";
import AllUsers from "./Components/AllUsers";
import AddUsers from "./Components/AddUsers";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./Components/NotFound";


function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path={"/"} component={ArjunCodes}/>
                <Route exact path={"/all"} component={AllUsers}/>
                <Route exact path={"/add"} component={AddUsers}/>
                <Route component={NotFound}/>
            </Switch>

        </BrowserRouter>
    );
}

export default App;
