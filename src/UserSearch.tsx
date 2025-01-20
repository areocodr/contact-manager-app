import { FC, useState } from "react";
const UserSearch: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        name="searchTerm"
        value={searchTerm}
        placeholder="Type something"
        onChange={(event) => {}}
      />
      {searchTerm && <div>SearchTerm: {searchTerm}</div>}
      <hr />
    </>
  );
};

export default UserSearch;
