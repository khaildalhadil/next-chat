


import ConversationFallback from "@/components/shared/conversation/ConversationFallback.tsx";
import ItemList from "@/components/shared/item-list/ItemList";

const FriendsPage = () => {
  return ( <div>
    <ItemList title="Friends">Friends Page</ItemList>
    <ConversationFallback />
  </div> );
}
 
export default FriendsPage;