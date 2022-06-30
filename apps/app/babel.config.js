module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					root: ["./src/"],
					alias: {
						app: "./src/app",
						common: "./src/common",
						auth: "./src/features/authentication",
					},
					extensions: [
						".js",
						".jsx",
						".ts",
						".tsx",
						".ios.js",
						".android.js",
						".ios.ts",
						".android.ts",
						".ios.tsx",
						".android.tsx",
					],
				},
			],
		],
	};
};
