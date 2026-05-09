import { MessageSquare, Users} from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";


const useNavigation = () => {

  const pathname = usePathname();

  // This is used to determine the paths that will be shown in the sidebar, it will be an array of objects that contains the name, href, icon and active state of the path
  const paths = useMemo(() => [
    {
      name: "Conversations",
      href: "/conversations",
      icon: <MessageSquare />,
      active: pathname.startsWith("/conversations"),
    },
    {
      name: "Friends",
      href: "/friends",
      icon: <Users />,
      active: pathname === "/friends",
    }

  ], [pathname])

  return  paths ;
}
 
export default useNavigation;