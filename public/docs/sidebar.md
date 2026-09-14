# Sidebar

A hand-drawn sidebar that floats inside the page layout, styled with shadcn conventions. It is a set of parts rather than one component, so the shell is yours to compose.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/sidebar.json
```

## Usage

```tsx
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>Sketchcn</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>Home</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <SidebarTrigger />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
```

## Props

| Component | Prop | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `SidebarProvider` | `defaultOpen` | `boolean` | `true` | Uncontrolled initial open state. |
| `SidebarProvider` | `open` | `boolean` | — | Controlled open state. |
| `SidebarProvider` | `onOpenChange` | `(open: boolean) => void` | — | Fires on every change. |
| `Sidebar` | `side` | `"left" \| "right"` | `"left"` | Edge the sidebar sits on. |
| `Sidebar` | `collapsible` | `"offcanvas" \| "icon" \| "none"` | `"offcanvas"` | Offcanvas slides out, icon shrinks to icons only, none stays fixed. |

## Parts

Layout: `SidebarProvider`, `Sidebar`, `SidebarInset`, `SidebarHeader`, `SidebarContent`, `SidebarFooter`, `SidebarRail`, `SidebarSeparator`, `SidebarInput`.

Grouping: `SidebarGroup`, `SidebarGroupLabel`, `SidebarGroupAction`, `SidebarGroupContent`.

Menus: `SidebarMenu`, `SidebarMenuItem`, `SidebarMenuButton`, `SidebarMenuAction`, `SidebarMenuBadge`, `SidebarMenuSkeleton`, `SidebarMenuSub`, `SidebarMenuSubItem`, `SidebarMenuSubButton`.

Control: `SidebarTrigger`, and the `useSidebar` hook for the open state.

## Examples

Nested, collapsible sections:

```tsx
<SidebarMenuItem collapsible defaultOpen>
  <SidebarMenuButton>Components</SidebarMenuButton>
  <SidebarMenuSub>
    <SidebarMenuSubItem>
      <SidebarMenuSubButton isActive>Button</SidebarMenuSubButton>
    </SidebarMenuSubItem>
  </SidebarMenuSub>
</SidebarMenuItem>
```

Render a menu button as a router link:

```tsx
<SidebarMenuButton render={<Link to="/docs" />}>Docs</SidebarMenuButton>
```

## Notes

- `useSidebar` throws outside a `SidebarProvider`, so a missing wrapper fails loudly.
- Width comes from `--sidebar-width`, `--sidebar-width-icon` and `--sidebar-gap`; override them on the provider.
- On mobile the sidebar switches to an overlay, driven by the same open state.
