import { ComponentMeta } from "@storybook/react";
import { Title } from "./Titulo";

export default {
  title: 'Title',
  component: Title,
};

export const TitlePrimary = () => <Title child={"Hola"} ></Title>;
