import { data } from '../data';
import { format } from 'date-fns';
import './DataTransformation.css';

interface Trip {
  id: string;
  name: string;
  country: string;
  startDate: string;
  endDate: string;
  description: string;
}

const transformedData: Trip[] = data.flatMap(user =>
  user.trips.map(trip => ({
    id: trip.id,
    name: user.name,
    country: trip.country,
    startDate: trip.startDate,
    endDate: trip.endDate,
    description: trip.description
  }))
);

const sortedData = transformedData.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

const groupedByCountry = sortedData.reduce<Record<string, Trip[]>>((acc, trip) => {
  if (!acc[trip.country]) {
    acc[trip.country] = [];
  }
  acc[trip.country].push(trip);
  return acc;
}, {});

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return format(date, 'yyyy-MM-dd');
}

export function DataTransformation() {

  return (
    <div className="data-transformation-container">
      <div className="data-transformation">
        <h2>Transformed Trip Data</h2>
        <div className="trip-list">
          {Object.entries(groupedByCountry).map(([country, trips]) => (
            <div key={country} className="trip-info">
              <h3 className="trip-location">{country}</h3>
              <ul>
                {trips.map(trip => (
                  <li key={trip.id} className="trip-item">
                    <strong>{trip.name}</strong> {trip.description} ({formatDate(trip.startDate)} - {formatDate(trip.endDate)})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}