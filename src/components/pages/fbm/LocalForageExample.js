import React, { useEffect, useState } from "react";
import localforage from "localforage";
import { Stack } from "@mui/material";

function LocalForageExample() {
  const [value, setValue] = useState("");
  const [savedValue, setSavedValue] = useState(null);

  // On component mount, load saved data from localForage
  useEffect(() => {
    localforage.getItem("myKey").then((data) => {
      if (data) {
        console.log("data", data);

        setSavedValue(data);
      }
    });
  }, []);

  // Save to localForage when user clicks save
  const saveData = () => {
    localforage.setItem("myKey", value).then(() => {
      setSavedValue(value);
    });
  };

  return (
    <Stack p={3} gap={2}>
      <h2>localForage persistence demo</h2>

      <input
        type="text"
        placeholder="Type something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveData}>Save</button>

      <Stack>
        <div>Saved value (persists after refresh):</div>

        <b>{savedValue ?? "No data yet"}</b>
      </Stack>
    </Stack>
  );
}

export default LocalForageExample;
