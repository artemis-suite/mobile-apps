// if you use expo remove this line
import {
	getStorybookUI,
	configure,
	addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
// @ts-ignore
import { withContexts } from '@storybook/addon-contexts/react';
import { useFonts } from "expo-font";

import { fonts } from "@artemis-mobile/elements";

import "./rn-addons";
import { contexts } from "./contexts";

// enables knobs for all stories
addDecorator(withKnobs);
addDecorator(withContexts(contexts));
// import stories
configure(() => {
	require("./stories")
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
	asyncStorage: null,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
//AppRegistry.registerComponent("%APP_NAME%", () => StorybookUIRoot);

export default () => {
	const [loaded] = useFonts(fonts);

	if (!loaded) {
		return null;
	}

	return <StorybookUIRoot />;
};
