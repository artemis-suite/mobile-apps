import { default as ItemBase } from "./item";
import { default as ItemIcon } from "./icon";
import { default as ItemChevron } from "./chevron";
import { default as ItemContent } from "./content";
import { default as ItemAvatar } from "./avatar";

export const Item = Object.assign(ItemBase, {
    Icon: ItemIcon,
    Chevron: ItemChevron,
    Content: ItemContent,
    Avatar: ItemAvatar
});