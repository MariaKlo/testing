import React from 'react';
import ReactDOM from 'react-dom/client';

import { restaurants } from './constants/fixtures'

import './index.css';
import {Restaurant} from "./components/Restaurant/Restaurant";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <div>
        {restaurants.map((restaurant) =>
            <Restaurant restaurant={restaurant} />
        )}
    </div>
);


// root.render(React.createElement('div', {
//     children: [
//         React.createElement('h1', { children: restaurant.name }),
//         React.createElement('ul', {children: restaurant.menu.map(
//             ({ name}) => React.createElement('li', {children: name}))
//         })
//         React.createElement(Restaurant, {name: 'Name', menu: []})
//     ]
// }));
