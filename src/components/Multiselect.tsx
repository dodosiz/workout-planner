import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface SelectItem {
  value: string | number;
  label: string;
}

interface MultiSelectProps {
  id: string;
  label: string;
  disabled?: boolean;
  value: string | number | null;
  items: SelectItem[];
  onChange: (value: number | string) => void;
}

export function MultiSelect(props: MultiSelectProps) {
  const handleChange = (event: SelectChangeEvent<string | number>) => {
    props.onChange(event.target.value);
  };
  return (
    <FormControl fullWidth disabled={props.disabled}>
      <InputLabel id={`${props.id}-label`}>{props.label}</InputLabel>
      <Select
        labelId={`${props.id}-label`}
        id={`${props.id}-select`}
        value={props.value ? props.value : ""}
        label={props.label}
        onChange={handleChange}
      >
        {props.items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
