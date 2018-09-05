import { flyer } from './core.js'
import modules from './modules.js'
flyer.prototype['modules'] = modules;
window.flyer = new flyer()