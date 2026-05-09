import ItemList from "@/components/shared/item-list/ItemList";
import React from "react";

const ConversationLayout = ({children}: {children: React.ReactNode}) => {
  return (<>
  <ItemList title="Conversations">Conversations Page</ItemList>
  {children} 
  </> 
  );
}
 
export default ConversationLayout;