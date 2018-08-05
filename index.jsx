import React from 'react';
import {render} from 'react-dom';
import './css/index.css';

let test = <div className="lessDiv">hello</div>;
render(test, document.getElementById("root"));