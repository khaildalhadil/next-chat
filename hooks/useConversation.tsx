import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {

  const params = useParams();

  // This is used to get the conversationsId from the url, if there is no conversationsId in the url, then it will be an empty string
  const conversationsId = useMemo(() => 
    params?.conversationsId || ("" as string)
  , [params?.conversationsId]);

  // This is used to determine if the conversation is active or not, if there is a conversationsId in the url, then it is active
  const isActive = useMemo(() => 
  !!conversationsId, [conversationsId]);
  
  return {
    isActive, 
    conversationsId,
  }

}
 
export default useConversation;