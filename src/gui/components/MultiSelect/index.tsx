import { TextField } from "@material-ui/core";
import { Stack, Autocomplete } from "@mui/material";

export interface MultiSelectProps<T> {
  data: T[];
  label: string;
  handleChange: (event: any, data: T[]) => void;
}

export default function MultiSelect<T>(props: MultiSelectProps<T>) {
  const { data, label, handleChange } = props;

  return (
    <Stack spacing={3}>
      <Autocomplete
        onChange={handleChange}
        multiple
        id="tags-outlined"
        options={data}
        size="medium"
        getOptionLabel={(option: any) => option[label]}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} placeholder="Select vehicles" />}
      />
    </Stack>
  );
}
