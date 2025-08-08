# Data Transformation Project

A React-based practice project that demonstrates how to transform and format JSON API data for display in a card list format. This project specifically handles trip data by grouping trips by country and sorting them by date.

## Features

- **Data Transformation**: Converts nested JSON API data into a flattened structure
- **Grouping by Country**: Organizes trips by country for better data organization
- **Date Sorting**: Sorts trips chronologically by start date
- **Card List Display**: Presents transformed data in an organized card-based layout
- **Date Formatting**: Formats dates for better readability using date-fns

## Project Structure

```
src/
├── components/
│   ├── DataTransformation.tsx  # Main component for data transformation and display
│   └── DataTransformation.css  # Styling for the transformation component
├── data.ts                     # Sample JSON data structure
└── App.tsx                     # Main application component
```

## Data Structure

The project works with JSON data that has the following structure:

```json
[
  {
    "userId": 1,
    "name": "Alice",
    "trips": [
      {
        "id": "t1",
        "country": "Japan",
        "startDate": "2024-03-15T00:00:00Z",
        "endDate": "2024-03-22T00:00:00Z",
        "description": "Cherry blossom tour in Kyoto and Tokyo"
      }
    ]
  }
]
```

## Transformation Process

1. **Flattening**: Converts nested user-trip structure into a flat array of trips
2. **Sorting**: Sorts trips by start date in ascending order
3. **Grouping**: Groups trips by country for organized display
4. **Formatting**: Formats dates for better readability

## Technologies Used

- **React 19**: Modern React with TypeScript
- **TypeScript**: For type safety and better development experience
- **date-fns**: For date formatting and manipulation
- **Vite**: Fast build tool and development server
- **CSS**: Custom styling for the card layout

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the local development URL

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Example Output

The transformed data is displayed as:
- **Country**: Japan
  - Alice: Cherry blossom tour in Kyoto and Tokyo (2024-03-15 - 2024-03-22)
  - Bob: Food and temples tour in Osaka and Nara (2025-03-10 - 2025-03-18)

This project serves as a practical example of how to handle complex JSON data transformation in React applications, focusing on data organization and user-friendly display.
