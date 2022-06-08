import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AtomButton } from "../Buttons/Button";
import { AtomCard } from "./Card";

export default {
  title: "Cards",
  component: AtomCard,
} as ComponentMeta<typeof AtomCard>;

const TemplateAtomCard: ComponentStory<typeof AtomCard> = (args) => (
  <AtomCard {...args} />
);

export const Card = TemplateAtomCard.bind({});
Card.args = {
  details: <div>Lorem ipsum dolor sit amet, consectetur</div>,
  sortDescription: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  fab: (
    <AtomButton
      title={"hola"}
      onClick={() => console.log('hola')}
    />
  ),
};
