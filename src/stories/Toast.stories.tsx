import { Toast } from "../components/Toast/Toast";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
  argTypes: {
    type: {
      options: ["success", "error", "info", "warning"],
      control: { type: "select" },
    },
    duration: {
      control: { type: "number", min: 1000, max: 10000, step: 1000 },
    },
    showCloseButton: {
      control: { type: "boolean" },
    },
    position: {
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
      control: { type: "select" },
    },
  },
  args: {
    position: "bottom-right",
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

const Template: Story = {
  render: (args) => {
    const [visible, setVisible] = React.useState(true);

    return (
      <div>
        <button
          onClick={() => setVisible((prev) => !prev)}
          style={{
            marginBottom: 10,
            padding: "6px 12px",
            borderRadius: 4,
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          {visible ? "Hide Toast" : "Show Toast"}
        </button>

        {visible && (
          <div
            style={{
              position: "fixed",
              [args.position.includes("right") ? "right" : "left"]: "20px",
              [args.position.includes("top") ? "top" : "bottom"]: "20px",
              zIndex: 1000,
            }}
          >
            <Toast {...args} onClose={() => setVisible(false)} />
          </div>
        )}
      </div>
    );
  },
};

// Story Variants
export const Success: Story = {
  ...Template,
  args: {
    id: "1",
    message: "Operation completed successfully!",
    type: "success",
    duration: 5000,
    showCloseButton: true,
  },
};

export const Error: Story = {
  ...Template,
  args: {
    id: "2",
    message: "Failed to save changes. Please try again.",
    type: "error",
    duration: 3000,
    showCloseButton: true,
  },
};

export const Info: Story = {
  ...Template,
  args: {
    id: "3",
    message: "New update available. Click here to learn more.",
    type: "info",
    duration: 6000,
    showCloseButton: true,
  },
};

export const Warning: Story = {
  ...Template,
  args: {
    id: "4",
    message: "Your session will expire in 5 minutes.",
    type: "warning",
    duration: 4000,
  },
};

export const LongDuration: Story = {
  ...Template,
  args: {
    id: "5",
    message: "This toast will stay for 10 seconds",
    type: "info",
    duration: 10000,
    showCloseButton: true,
  },
};

export const ShortDuration: Story = {
  ...Template,
  args: {
    id: "6",
    message: "Quick notification",
    type: "success",
    duration: 1000,
  },
};

export const TopLeft: Story = {
  ...Template,
  args: {
    id: "7",
    message: "Toast in top-left position",
    type: "info",
    position: "top-left",
  },
};

export const BottomLeft: Story = {
  ...Template,
  args: {
    id: "8",
    message: "Toast in bottom-left position",
    type: "info",
    position: "bottom-left",
  },
};

export const TopRight: Story = {
  ...Template,
  args: {
    id: "9",
    message: "Toast in top-right position",
    type: "info",
    position: "top-right",
  },
};
