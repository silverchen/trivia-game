import {
	API_ROOT_URLS
} from './api';

const Global = {
	APP_ENV_TYPE: Object.freeze({
		"development": 'development',
		"staging": 'staging',
		"production": 'production'
	}),
	environment: 'production',
	setEnvironment: function (env) {
		Global.environment = env;
	},
	getEnvironment: function () {
		return Global.environment ? Global.environment : Global.APP_ENV_TYPE.production;
	},
	getApiRootUrl: function () {
		return API_ROOT_URLS[Global.getEnvironment()];
	}
}

module.exports = Global;
