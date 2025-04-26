# Culvert Sizing Application

## Overview

The Culvert Sizing Application is a field-based mobile tool designed for forestry engineers working in coastal British Columbia watersheds. This application helps determine appropriate culvert sizes for forest road stream crossings based on hydrological data, stream characteristics, and regional factors.

## Features

- **Q100 Table-Based Sizing**: Uses regional flow tables for coastal BC watersheds
- **Stream Geometry Analysis**: Calculates cross-sectional area using field measurements
- **Climate Layer Integration**: Optional climate change adjustment factors
- **Transportability Matrix**: Evaluates stream bed material movement risk
- **Terrain Stability Indicators**: Simple checklist for potential issues
- **Offline Functionality**: Operates without internet connection
- **Field Card Export**: Creates documented records of assessments

## Technical Framework

### Primary Sizing Methodology
- Q100 tables pre-loaded for regional locations
- Manning's equation implementation for hydraulic calculations
- Inlet/outlet control analysis

### Required Input Parameters
- Drainage area (hectares)
- Regional location
- Stream gradient
- Culvert specifications
- Stream geometry measurements

### Key Outputs
- Recommended minimum culvert diameter
- Flow capacity calculations
- Safety factor assessment
- Controlling factor identification

## Implementation

This application is built using:
- React Native for cross-platform mobile functionality
- Local storage for saving field assessments
- SVG for visual representations
- Offline-first architecture

## Installation

```bash
# Navigate to the culvert-sizing directory
cd apps/culvert-sizing

# Install dependencies
npm install

# Start the development server
npm start
```

## Usage

1. Enter basic parameters (drainage area, region, etc.)
2. Input stream measurements using the end area method
3. Optionally enable climate change projections
4. Calculate recommended culvert size
5. Export or save the field assessment

## BC-Specific Considerations

This application is specifically designed for:
- Vancouver Island and coastal BC watersheds
- Compliance with Private Managed Forest Land requirements
- Integration with BC stream classification system
- High precipitation coastal conditions
- Fish passage considerations

## Development Roadmap

### Phase 1: Core Functionality
- Q100 table implementation
- Basic hydraulic calculations
- Simple transportability matrix
- Field-optimized UI

### Phase 2: Enhanced Methods
- Rational Method calculations
- Time of concentration calculations
- Rainfall intensity adjustments

### Phase 3: Advanced Features
- Climate change adjustment factors
- Terrain stability integration
- Enhanced fish passage design tools

## Contributing

Contributions to improve the application are welcome. Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file in the root directory for details.