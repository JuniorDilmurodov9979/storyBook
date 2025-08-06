import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { SidebarMenu } from "../components/SidebarMenu/SidebarMenu";
import type { MenuItem } from "../components/SidebarMenu/SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

const items1Level: MenuItem[] = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Settings", path: "/settings" },
  { label: "Profile", path: "/profile" },
];

const items2Level: MenuItem[] = [
  { label: "Dashboard", path: "/dashboard" },
  {
    label: "Settings",
    children: [
      { label: "Account", path: "/settings/account" },
      { label: "Security", path: "/settings/security" },
    ],
  },
  {
    label: "Profile",
    children: [
      { label: "Edit Profile", path: "/profile/edit" },
      { label: "Privacy", path: "/profile/privacy" },
    ],
  },
];

const wrapperStyle: React.CSSProperties = {
  position: "relative",
  height: "100vh",
  backgroundColor: "#f0f2f5",
  padding: "60px 20px",
  fontFamily: "Segoe UI, sans-serif",
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  fontSize: 16,
  backgroundColor: "#4F46E5",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  transition: "background 0.2s",
};

export const OneLevelMenu: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div style={wrapperStyle}>
        <button
          onClick={() => setOpen(true)}
          style={buttonStyle}
          onMouseEnter={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#4338CA")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#4F46E5")
          }
        >
          Open Sidebar
        </button>
        <SidebarMenu
          isOpen={open}
          onClose={() => setOpen(false)}
          items={items1Level}
        />
      </div>
    );
  },
};

export const TwoLevelMenu: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div style={wrapperStyle}>
        <button
          onClick={() => setOpen(true)}
          style={buttonStyle}
          onMouseEnter={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#4338CA")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#4F46E5")
          }
        >
          Open Sidebar
        </button>
        <SidebarMenu
          isOpen={open}
          onClose={() => setOpen(false)}
          items={items2Level}
        />
      </div>
    );
  },
};
