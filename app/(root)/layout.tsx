import SidebarWrapper from "@/components/shared/sidebar/SidebarWrapper";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return ( <SidebarWrapper >{children}</SidebarWrapper> );
}
 
export default Layout;