import { useReducer } from "react";
import { I18nManager } from "react-native";
import i18n, { ModuleType, TOptions } from "i18next";
import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/en";
import "dayjs/locale/ar";
import "dayjs/locale/sv";
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from "react-native-restart";

import en from "./translations/en";
import ar from "./translations/ar";
import sv from "./translations/sv";
import { useEffect } from "react";


dayjs.extend(updateLocale);
dayjs.extend(localizedFormat);

export const languages = {
	en,
	ar,
	sv
};
export const languageCodes = Object.keys(languages);

type TranslationResource = typeof en;

const languageDetector = {
	type: "languageDetector" as ModuleType,
	async: true,
	detect: callback => {
		AsyncStorage.getItem('user-language', (err, language) => {
			// if error fetching stored data or no language was stored
			// display errors when in DEV mode as console statements
			if (err || !language) {
				if (err) {
					console.log('Error fetching Languages from asyncstorage ', err);
				} else {
					console.log('No language is set, choosing English as fallback');
				}
				dayjs.locale('en');
				callback('en');
				return;
			}
			dayjs.locale(language);
			callback(language);
		});
	},
	init: () => { },
	cacheUserLanguage: language => {
		AsyncStorage.setItem('user-language', language);
	}
};

i18n
	.use(languageDetector)
	//.use(initReactI18next)
	.init({
		resources: languages,
		react: { useSuspense: false },
		interpolation: { escapeValue: false },
		compatibilityJSON: "v3",
	});

export function translateScope<TScope extends keyof TranslationResource>(scope: TScope) {
	return function <TSubscope extends keyof TranslationResource[TScope]>(subscope: TSubscope) {
		return function usedThisInScreen$t<TKey extends (keyof TranslationResource[TScope][TSubscope])>(key: TKey, options?: TOptions) {
			return i18n.t(`${scope}:${String(subscope)}:${String(key)}`, options)
		}
	}
}

export async function changeLanguage(language: "en" | "ar" | "sv") {
	dayjs.locale(language);
	await i18n.changeLanguage(language);
	if (language === "ar") {
		I18nManager.forceRTL(true);
	}
	else {
		I18nManager.forceRTL(false);
	}
	RNRestart.Restart();
}

export function formatDate(date: string | number | any) {
	return dayjs(date).format("ll");
}

export function formatTime(date: string | number | any) {
	return dayjs(date).format("LT");
}

export function formatDateTime(date: string | number | any) {
	return dayjs(date).format("LLL");
}

export function formatNumber(number: Number) {
	return number.toLocaleString(i18n.language);
}

export const useLocal = () => {
	const [, forceRender] = useReducer((s) => s + 1, 0);
	useEffect(() => {
		i18n.on("languageChanged", forceRender);
	}, []);

	return {
		language: i18n.language,
		direction: i18n.dir()
	}
}

export default i18n;
