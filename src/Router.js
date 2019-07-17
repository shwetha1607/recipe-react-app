import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import SelectedRecipe from './components/SelectedRecipe';

function Router(){
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/recipe/:id" component={SelectedRecipe}/>;
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Router;