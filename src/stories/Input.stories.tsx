import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../components/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
    clearable: false,
  },
};

export const PasswordWithToggle: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
    clearable: false,
  },
};

export const PasswordClearable: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
    clearable: true,
  },
};

export const NumberInput: Story = {
  args: {
    type: "number",
    placeholder: "Enter a number",
    clearable: true,
  },
};
