
import ConversationContainer from "@/components/shared/conversation/ConversationContainer";

type Props = {
  conversationsId: Promise<string>
}

const conversationsPage = async (props: Props) => {

  const id = await props.conversationsId;
  console.log(id);
  return ( <ConversationContainer>id</ConversationContainer> );
}
 
export default conversationsPage;