function End(props) {
  // props 에서 name변수를
  const { name } = props;
  return (
    <>
      <h3>Sub에서 받은 name = {name}</h3>
    </>
  );
}
export default End;
