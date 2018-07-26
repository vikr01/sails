/**
 * Global Variable Configuration
 * (sails.config.globals)
 *
 * Configure which global variables which will be exposed
 * automatically by Sails.
 *
 * For more information on any of these options, check out:
 * https://sailsjs.com/config/globals
 */

module.exports.globals = {

  // This app was generated without the `lodash` package.
  // To use Lodash, run `npm install lodash --save` and require it in the file(s) where you need it.
  // Or, to expose it as a global, change this line to say `require('lodash')` (instead of `false`)
  _: false,

  // This app was generated without the `async` package.
  // To use `async`, run `npm install async --save` and require it in the file(s) where you need it.
  // Or, to expose it as a global, change this line to say `require('async')` (instead of `false`)
  async: false,

  /****************************************************************************
  *                                                                           *
  * Whether to expose each of your app's models as global variables.          *
  * (See the link at the top of this file for more information.)              *
  *                                                                           *
  ****************************************************************************/

  models: true,

  /****************************************************************************
  *                                                                           *
  * Whether to expose the Sails app instance as a global variable (`sails`),  *
  * making it accessible throughout your app.                                 *
  *                                                                           *
  ****************************************************************************/

  sails: true,

};
