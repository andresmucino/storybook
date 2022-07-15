import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ExpensesCard } from "./ExpensesCard";

export default {
  title: "ExpensesCards",
  component: ExpensesCard,
} as ComponentMeta<typeof ExpensesCard>;

export const MoculeExpensesCard: ComponentStory<typeof ExpensesCard> = (
  args
) => <ExpensesCard {...args} />;