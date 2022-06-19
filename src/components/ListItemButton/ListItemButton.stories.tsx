import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MoleculeListItemButton } from "./ListItemButton";

export default {
  title: "Molecules/ListItemButtons",
  component: MoleculeListItemButton,
} as ComponentMeta<typeof MoleculeListItemButton>;

const TemplateMoleculeListItemButton: ComponentStory<
  typeof MoleculeListItemButton
> = (args) => <MoleculeListItemButton {...args} />;

export const ListItemButton = TemplateMoleculeListItemButton.bind({});
ListItemButton.args = {
  title: "Titulo",
  subTitle: "subtitle",
  leftIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  ),
  rightIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
    </svg>
  ),
};
