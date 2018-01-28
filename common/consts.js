import { Platform } from 'react-native';

const Consts = module.exports = {
	// Default Styles
	CONTENT_PADDING: 30,
	STATUS_BAR_SPACING: Platform.OS === 'ios' ? 20 : 0,
	THEME_COLOR: '#3b76e6',
	HIGHLIGHT_COLOR: '#00ebff',
	BORDER_COLOR: '#DCDCDC',
	PRIMARY_FONT_COLOR: '#3B3B3B',
	SECONDARY_FONT_COLOR: '#8D8C8C',
	PLACEHOLDER_FONT_COLOR: 'rgba(255, 255, 255, 0.4)',
	BG_COLOR: '#EFF2F5',
	FONT_TYPE: Platform.OS === 'android' ? 'sans-serif' : undefined,
	FONT_WEIGHT_BOLD: Platform.OS === 'ios' ? '700' : '600',
	FONT_WEIGHT_SEMIBOLD: Platform.OS === 'ios' ? '600' : '500',
	FONT_WEIGHT_MEDIUM: Platform.OS === 'ios' ? '500' : '400',
	FONT_WEIGHT_REGULAR: Platform.OS === 'ios' ? '400' : '300',
	FONT_WEIGHT_LIGHT: Platform.OS === 'ios' ? '300' : '200',

	// UI Config
	// Keyboard height
	KEYBOARD_HEIGHT: Platform.OS === 'ios' ? 258 : 300,

	// Navigation bar
	NAV_BAR_BTN_PADDING: 10,

	// Default values
	DEFAULT_ERR_MSG: 'Something went wrong',
	DEFAULT_NULL_VALUE: '-',

	// Default amount
	DEFAULT_AMOUNT: 10
}
