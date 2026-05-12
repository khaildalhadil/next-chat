'use client';

import ConversationFallback from "@/components/shared/conversation/ConversationFallback";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ConversationsPage = () => {

  const data = useUser();
  if (!data.user) redirect("/sign-in");
  
  return ( <ConversationFallback /> );
}
 
export default ConversationsPage;