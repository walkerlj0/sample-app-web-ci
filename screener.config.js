/**
 * Default configs
 */
const config  = {
  projectRepo: 'saucelabs/sample-app-web',
  storybookConfigDir: '.storybook',
  apiKey: process.env.SCREENER_SL_STORYBOOK,
  resolution: '1024x768'
};

/**
 * Browsers
 */
config.browsers = [
  {
    browserName: 'chrome',
  },
  {
    browserName: 'firefox',
  },
  {
    browserName: 'internet explorer',
    version: '11',
  },
  {
    browserName: 'microsoftedge',
    version: '17.17134',
  },
  {
    browserName: 'safari',
    version: '11.1',
  }
];
/**
 * Add Sauce config
 */
config.sauce = {
  username: process.env.SAUCE_USERNAME,
  accessKey: process.env.SAUCE_ACCESS_KEY,
  maxConcurrent: 100,
};

module.exports = config;
