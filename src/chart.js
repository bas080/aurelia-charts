import {logger} from './aurelia-charts';
import {Config} from './config';

/**
 * used when defining library chart types. It warns developers that certain
 * methods are required to be defined
 *
 * @class
 */
@inject(Config)
export class Chart {

  settings   = {};
  dimensions = [];
  data       = {};

  constructor(config) {
    this.config = config;
  }

  create() {
    warn('create');
  }

  update() {
    warn('update');
  }

  destroy() {
    warn('destroy');
  }

  translate(str) {
    return config.translate(str);
  }

}

function warn(methodName) {
  logger.warn(`${methodName} method not defined for ${this.library}'s type ${this.type}`);
}
