const UserRow = ({ user, className, onSelected }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  return (
    <>
      {/* <td>
        <CustomCheckbox />
      </td> */}
      <td className={className + " rounded-l-[4px]"} onClick={onSelected}>
        <div className="py-[10px] px-[4px]">{user.name}</div>
      </td>
      <td className={className} onClick={onSelected}>
        <div className="py-[10px]">{formatDate(user.dateOfBirth)}</div>
      </td>
      <td className={className} onClick={onSelected}>
        <div className="py-[10px]">{user.gender}</div>
      </td>
      <td className={className} onClick={onSelected}>
        <div className="py-[10px]">{user.email}</div>
      </td>
      <td className={className} onClick={onSelected}>
        <div className="py-[10px]">{user.phone}</div>
      </td>
      <td className={className + " rounded-r-[4px]"} onClick={onSelected}>
        <div className="py-[10px]">{user.username}</div>
      </td>
    </>
  );
};

export default UserRow;
