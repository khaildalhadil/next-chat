



import ConversationFallback from "@/components/shared/conversation/ConversationFallback";
import ItemList from "@/components/shared/item-list/ItemList";

const FriendsPage = () => {
  return ( <div className="flex gap-3 w-full">
    <ItemList title="Friends">Friends Page</ItemList>
    <ConversationFallback />
  </div> );
}
 
export default FriendsPage;