import { Link, useLocation } from 'react-router-dom'

export const CountryDetails = (props) => {
    const location = useLocation()
    return (<>
        <Link to="/">Back</Link>
        {
            (location.state) ?
            <div>
                <h2>{location.state.name.common}</h2>
            </div>
            :
            <div>
                <h2>No country selected</h2>
            </div>
        }
    </>);
};
