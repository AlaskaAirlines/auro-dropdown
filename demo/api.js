/* eslint-disable jsdoc/require-jsdoc, no-magic-numbers, no-param-reassign */

import { showExample } from './../apiExamples/programmaticallyShow.js';
import { hideExample } from './../apiExamples/programmaticallyHide.js';

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    // javascript example function calls to be added here upon creation to test examples
    showExample();
    hideExample();
  } catch (err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}

