const Global = require('../common/global');

//environment
test('Default enviornment must be production', () => {
  expect(Global.getEnvironment()).toBe(Global.APP_ENV_TYPE.production);
})
