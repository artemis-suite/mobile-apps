import * as Image from "./components/image";
import * as Input from "./components/input";

export { ThemeProvider } from "@shopify/restyle";
export * from "./theme/assets";
export * from "./theme/default-theme";

// components
export * from "./components/box";
export * from "./components/text";
export * from "./components/button";
export * from "./components/screen";
export * from "./components/activity-indicator";
export * from "./components/icon";
export * from "./components/verification-code";

// composit components
export { Image, Input };

export type { DynamicImageProps, StaticImageProps } from "./components/image";
export type { InputPhoneProps, InputTextProps } from "./components/input";