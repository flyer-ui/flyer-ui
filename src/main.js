import { flyer } from './core.js'
import { define, require } from './modules.js'
flyer.prototype['define'] = define;
flyer.prototype['require'] = require;
window.flyer = new flyer()