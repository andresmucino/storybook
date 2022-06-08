import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AtomCardRecolection } from "./CardRecolection";

export default {
  title: "Card Recolections",
  component: AtomCardRecolection,
} as ComponentMeta<typeof AtomCardRecolection>;

const TemplateAtomCardRecolection: ComponentStory<typeof AtomCardRecolection> =
  (args) => (
    <AtomCardRecolection>
      <img src="img_avatar.png" alt="Avatar" />
      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </AtomCardRecolection>
  );

export const CardRecolection = TemplateAtomCardRecolection.bind({});
