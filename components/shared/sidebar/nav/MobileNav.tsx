'use client'

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import useConversation from "@/hooks/useConversation";
import useNavigation from "@/hooks/useNavigation";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const MobileNav = () => {
  const paths = useNavigation();

  const {isActive} = useConversation();

  return ( 
    <Card className={cn("fixed bottom-4 w-[calc(100vw-32px)] flex items-center h-16 p-2 lg:hidden", {
      "block": !isActive,
      "hidden": isActive,
    })}>
      <nav className="w-full">
        <ul className="flex justify-evenly items-center ">
        {paths.map((path, i) => 

          <li key={i} className="relative">
            <Link href={path.href}>
            <Tooltip>
              <TooltipTrigger>
                <Button size='icon-lg' variant={path.active? "default": 'outline'} >
                  {path.icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {path.name}
                </p>
              </TooltipContent>
            </Tooltip>
            </Link>
            
          </li>

        )}
        <ModeToggle />
        <li><UserButton /></li>
        
        </ul>
        </nav>
    </Card> );
}
 
export default MobileNav;