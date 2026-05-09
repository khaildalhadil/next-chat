'use client';

import { UserButton, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ConversationsPage = () => {

  const data = useUser();
  if (!data.user) redirect("/sign-in");
  
  return ( <div>
    <p>
      Conversations
    </p>
  </div> );
}
 
export default ConversationsPage;