export interface RadioInputProps {
    value: string;
    label: string;
    checked: boolean;
    onChange: () => void;
}

export interface RadioInputListProps {
    options: RadioInputProps[];
    selectedValue: string;
    onChange: (value: string) => void;
}