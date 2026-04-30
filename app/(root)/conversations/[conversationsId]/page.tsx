type Props = {
  conversationsId: Promise<string>
}

const conversationsPage = async (props: Props) => {

  const id = await props.conversationsId;
  console.log(id);
  return ( <div>{id}</div> );
}
 
export default conversationsPage;