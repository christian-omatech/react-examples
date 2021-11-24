import { Country } from '../../../Domain/Country';
import { CountryType } from '../../../Domain/Country.types';
import { CountryColumn } from './CountryColumn.types';

interface Properties {
    columns: CountryColumn[];
    row: Country;
}

export const CountryTableRow = ({ columns, row }: Properties): JSX.Element => {
    const parseField = (field: string) => {
        const value = row.getValue(field as keyof CountryType);
        if (isImage(value)) return createImage(value);
        return value;
    };

    const isImage = (value: string): boolean => {
        return value?.toString().endsWith('.svg');
    };

    const createImage = (value: string): JSX.Element => {
        return <img src={value} className="flag-img" alt="img" />;
    };

    const columnVisibility = (isVisible: boolean): string => {
        return isVisible ? 'table-cell' : 'none';
    };

    return (
        <tr>
            {columns.map(
                ({ name, isVisible, field }: CountryColumn): JSX.Element => (
                    <td
                        key={name}
                        style={{ display: columnVisibility(isVisible) }}
                    >
                        {parseField(field)}
                    </td>
                )
            )}
        </tr>
    );
};
