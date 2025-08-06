import { useEffect, useState } from "react";

export type MenuItem = {
  label: string;
  path?: string;
  children?: MenuItem[];
};

type SidebarMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
};

export const SidebarMenu = ({ isOpen, onClose, items }: SidebarMenuProps) => {
  const [openMenus, setOpenMenus] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!isOpen) {
      setOpenMenus({});
    }
  }, [isOpen]);

  const toggleSubmenu = (index: number) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 999,
          }}
        />
      )}

      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: 300,
          background: "#ffffff",
          padding: "20px 16px",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ marginBottom: 20 }}>📁 Menu</h2>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {items.map((item, i) => (
            <li key={i} style={{ marginBottom: 10 }}>
              <div
                onClick={() => (item.children ? toggleSubmenu(i) : undefined)}
                style={{
                  cursor: item.children ? "pointer" : "default",
                  padding: "10px 14px",
                  borderRadius: 6,
                  fontWeight: 500,
                  fontSize: 16,
                  backgroundColor: "#f7f7f7",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLDivElement).style.backgroundColor = "#eee")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLDivElement).style.backgroundColor =
                    "#f7f7f7")
                }
              >
                {item.label}
                {item.children && <span>{openMenus[i] ? "−" : "+"}</span>}
              </div>

              {item.children && openMenus[i] && (
                <ul style={{ paddingLeft: 15, marginTop: 6 }}>
                  {item.children.map((child, j) => (
                    <li
                      key={j}
                      style={{
                        padding: "8px 12px",
                        borderRadius: 4,
                        backgroundColor: "#fafafa",
                        fontSize: 15,
                        marginBottom: 6,
                        cursor: "pointer",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLLIElement).style.backgroundColor =
                          "#eaeaea")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLLIElement).style.backgroundColor =
                          "#fafafa")
                      }
                    >
                      {child.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
