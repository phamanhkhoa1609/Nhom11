const UserRow = ({ user, className, onSelected }) => {
  return (
    <>
      {/* <td>
        <CustomCheckbox />
      </td> */}
      <td className={className + " rounded-l-[4px]"} onClick={onSelected}>
        <div className="py-[10px] px-[4px]">{user.name}</div>
      </td>
      <td className={className} onClick={onSelected}>
        <div className="py-[10px]">{user.email}</div>
      </td>
      <td className={className + " rounded-r-[4px]"} onClick={onSelected}>
        <div className="py-[10px]">{user.username}</div>
      </td>
    </>
  );
};

export default UserRow;
