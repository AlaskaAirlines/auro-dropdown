// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { createPopper } from '@popperjs/core/dist/esm/popper';

// build the component class
const POPOVER_OFFSET_skidding = 0,
  POPOVER_OFFSET_distance = 18;

export default class Popover {

  constructor(anchor, popover, placement) {
    this.anchor = anchor;
    this.popover = popover;
    this.options = {
      placement,
      visibleClass: 'data-show'
    };
    this.popover.classList.remove(this.options.visibleClass);
  }

  show() {
    if (this.popper) {
      this.popper.destroy();
    }

    this.popper = createPopper(this.anchor, this.popover, {
      tooltip: this.anchor,
      placement: this.options.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [
              POPOVER_OFFSET_skidding,
              POPOVER_OFFSET_distance
            ]
          }
        },
        {
          name: 'preventOverflow',
          options: {
            rootBoundary: 'document',
            padding: 16,
          },
        },
      ]
    })
  }

  triggerUpdate() {
    this.popper.update();
  }

  hide() {
    this.popover.classList.remove(this.options.visibleClass);
  }
}
