import { AddonSetting } from "@storybook"
declare module '@storybook/addon-contexts/react' {
    export declare function withContexts(contexts: AddonSetting[]): unknown;
}