import { AuroDropdown } from './src/auro-dropdown.js';
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-dropdown', AuroDropdown);
