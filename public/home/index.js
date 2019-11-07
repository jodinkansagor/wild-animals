import Component from './Component.js';
import Header from '../common/Header.js';

import App from './App.js';

const app = new App();
document.body.prepend(app.renderDOM());