const View = ({ address }) => {
  const { a_name, a_tel, a_address } = address;
  return (
    <div>
      <h3>이름 : </h3>
      <span>{a_name}</span>
      <h3>전화번호 : </h3>
      <span>{a_tel}</span>
      <h3>주소 : </h3>
      <span>{a_address}</span>
    </div>
  );
};

export default View;
