import {typeScale, prop} from './aurelia-charts';
import typer from 'typer';

/**
 * returns the dimensions definitions of an entity.
 *
 * @param {Entity} entity
 *
 * @returns {object}
 */
export function entityDimensions(entity) {
  const metadata = entity.getMeta();
  const types    = metadata.fetch('types') || {};

  return Object.keys(entity).map(key => {
    return {
      label: dimensionLabel.bind(null, key),
      data:  prop(key),
      scale: typeScale(types[key])
    };
  });
}

/**
 * creates an dimensions based on a js-object and using the npm's typer
 *
 * @param {object} object
 *
 * @returns {object}
 */
export function objectDimensions(object) {
  return Object.keys(object).map(key => {
    return {
      label : dimensionLabel.bind(null, key),
      data  : prop(key),
      scale : typeScale(typer.detect(object[key]))
    };
  });
}

/**
 * @todo: allow for this function to be overwritten so it works with the data
 * format the developer chooses to use. This is the default label function.
 *
 * @param {string} key
 * @param {object} [datum={}]
 * @returns {string} the label used for the dimension.
 */
function dimensionLabel(key, datum = {}) {
  return datum.key ? `${datum.key}${key}` : `${key}`;
}
