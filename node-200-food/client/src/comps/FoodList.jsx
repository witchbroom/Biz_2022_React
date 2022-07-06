const FoodList = ({ foodList }) => {
  const foodBody = foodList.map((food) => {
    return (
      <tr>
        <td>{food.b_date}</td>
        <td>{food.b_food}</td>
        <td>{food.b_intake}</td>
        <td>{food.b_cal}</td>
      </tr>
    );
  });

  return (
    <table className="w3-table w3-table-all">
      <tbody>{foodBody}</tbody>
    </table>
  );
};

export default FoodList;
