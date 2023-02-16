import React, { useState } from "react";
import JSON_DATA from "./DATA_USERS.json";
function App() {
  const [secrhItem, setSearchItem] = useState("");
  return (
    <div className="myApp">
      <input
        type="text"
        placeholder="seacrh"
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />
      {JSON_DATA.filter((val) => {
        if (secrhItem == "") {
          return val;
        }
        if (val.first_name.toLowerCase().includes(secrhItem.toLowerCase())) {
          return val;
        }
        return false;
      }).map((val) => {
        return (
          <div key={val.email} className="user">
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
