import { CountryColumn } from '../../hooks/CountryColumn.types';
import { CountryRow } from '../../hooks/CountryRow.types';

interface Properties {
    columns: CountryColumn[];
    row: CountryRow;
}

export const CountryTableRow = ({ columns, row }: Properties): JSX.Element => {
    const parseField = (field: string) => {
        if (isObject(field)) return objectToString(field);
        if (isImage(field)) return createImage(field);
        return field;
    };

    const isObject = (value: string): boolean => {
        return typeof value === 'object' && value !== null;
    };

    const objectToString = (obj: string | Record<string, string>): string => {
        return Object.values(obj)
            .reduce((acc: string, value: string): string => {
                acc += parseField(value) + ', ';
                return acc;
            }, '')
            .slice(0, -2);
    };

    const isImage = (value: string): boolean => {
        return value.toString().endsWith('.svg');
    };

    const createImage = (value: string): JSX.Element => {
        return <img src={value} className="flag-img" alt="img" />;
    };

    const columnVisibility = (isVisible: boolean): string => {
        return isVisible ? 'table-cell' : 'none';
    };

    const getValueByPath = (path: string): string => {
        return path.split('.').reduce((object: any, key: string) => {
            return object && object[key] ? object[key] : '-';
        }, row);
    };

    return (
        <tr>
            {columns.map(
                ({ name, isVisible, field }: CountryColumn): JSX.Element => (
                    <td
                        key={name}
                        style={{ display: columnVisibility(isVisible) }}
                    >
                        {parseField(getValueByPath(field))}
                    </td>
                )
            )}
        </tr>
    );
};
