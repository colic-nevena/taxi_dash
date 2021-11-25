import { TextField } from "@material-ui/core";
import { Stack, Autocomplete } from "@mui/material";

export interface MultiSelectProps {
  data: any[];
  label: string;
  handleChange: (event: any, data: any) => void;
}

export default function MultiSelect(props: MultiSelectProps) {
  const { data, label, handleChange } = props;

  return (
      <Stack spacing={3}>
        <Autocomplete
          onChange={handleChange}
          multiple
          id="tags-outlined"
          options={data}
          size="medium"
          getOptionLabel={(option) => option[label]}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Select vehicles"
            />
          )}
        />
      </Stack>
    );
}