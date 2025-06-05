import { ThemeProvider } from "@emotion/react";
import { themeInput } from "../../assets/theme";
import { Autocomplete, Stack, TextField, Typography } from "@mui/material";
import { isEmpty, snakeCase } from "lodash";
import { ArrowDownIcon } from "../../assets/icons";
import { useEffect, useState } from "react";
import { useReactiveVar } from "@apollo/client";
import { agentInfoErrorsVar } from "../../graphql/reactiveVars";

const SearchInput = ({
  options = [],
  label = "",
  name = "",
  onChange,
  value,
  defaultValue,
  placeholder,
  type,
}) => {
  const [showClearIcon, setShowClearIcon] = useState(false);
  const agentInfoErrors = useReactiveVar(agentInfoErrorsVar);

  useEffect(() => {
    setShowClearIcon(!!value[snakeCase(label || name)]);
  }, [value, label, name]);

  return (
    <Stack spacing={0.75}>
      <Typography variant="label">{label}</Typography>
      <ThemeProvider theme={themeInput}>
        <Autocomplete
          disablePortal
          id="search-input"
          options={options}
          onChange={onChange}
          popupIcon={<ArrowDownIcon />}
          clearIcon={
            showClearIcon ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.6875 15.3125C17.0938 15.6875 17.0938 16.3438 16.6875 16.7188C16.5 16.9062 16.25 17 16 17C15.7188 17 15.4688 16.9062 15.2812 16.7188L12 13.4375L8.6875 16.7188C8.5 16.9062 8.25 17 8 17C7.71875 17 7.46875 16.9062 7.28125 16.7188C6.875 16.3438 6.875 15.6875 7.28125 15.3125L10.5625 12L7.28125 8.71875C6.875 8.34375 6.875 7.6875 7.28125 7.3125C7.65625 6.90625 8.3125 6.90625 8.6875 7.3125L12 10.5938L15.2812 7.3125C15.6562 6.90625 16.3125 6.90625 16.6875 7.3125C17.0938 7.6875 17.0938 8.34375 16.6875 8.71875L13.4062 12.0312L16.6875 15.3125Z"
                  fill="#6E7191"
                />
              </svg>
            ) : (
              false
            )
          }
          getOptionLabel={(option) => option[snakeCase(label || name)] ?? ""}
          // disableClearable
          value={value}
          defaultValue={defaultValue}
          renderInput={(params) => (
            <TextField
              {...params}
              InputLabelProps={{ shrink: false }}
              // label={false}
              placeholder={placeholder}
              onChange={(e) => {
                const is_empty = !!isEmpty(e.target.value);
                setShowClearIcon(!is_empty);
              }}
              helperText={agentInfoErrors[snakeCase(label || name)]}
              error={!!agentInfoErrors[snakeCase(label || name)]}
              type={type}
            />
          )}
        />
      </ThemeProvider>
    </Stack>
  );
};

export default SearchInput;
