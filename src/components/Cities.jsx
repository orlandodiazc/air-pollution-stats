import PropTypes from 'prop-types';
import City from './City';

export default function Cities({ cityList }) {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 bg-blue-900
    [&>*:nth-child(4n)]:bg-blue-800 [&>*:nth-child(4n+1)]:bg-blue-800
    sm:[&>*:nth-child(4n)]:bg-blue-900 sm:[&>*:nth-child(4n+1)]:bg-blue-900
    sm:[&>*:nth-child(odd)]:bg-blue-800
     "
    >
      {cityList.map((cityLocation) => (
        <City key={cityLocation.id} cityLocation={cityLocation} />
      ))}
    </div>
  );
}

Cities.propTypes = {
  cityList: PropTypes.arrayOf(Object).isRequired,
};
