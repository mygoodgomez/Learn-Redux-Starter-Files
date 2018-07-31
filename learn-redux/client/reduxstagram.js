import React from 'react';
import {render} from 'react-dom';

import css from './styles/style.styl';

import Main from './components/Main.jsx';
import Single from './components/Single.jsx';
import PhotoGrid from './components/PhotoGrid.jsx';

import {Router, Route, IndexRoute, browserHistory}  from 'react-router';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
);
render(router, document.getElementById('root'));