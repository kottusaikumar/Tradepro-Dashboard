# TradePro Dashboard

A professional, real-time trading dashboard built with React and Flask that provides comprehensive market analysis, interactive charting, and technical indicators for local dataset analysis.

## 📊 Features

### 🎯 Core Features
- **Interactive Charting**: Multiple chart types (Candlestick, Line, Area, Scatter)
- **Technical Indicators**: VWAP, RSI, EMA with toggle controls
- **Multi-Pane Layout**: Dual-pane charting with customizable features
- **Dynamic Feature Loading**: Excel-based configuration for chart features
- **Local Dataset Support**: Process CSV and RAR files from local directories
- **Real-time Data Processing**: Support for multiple timeframes (1m to 1M)

### 🔧 UI/UX Features
- **Responsive Design**: Mobile-first approach with collapsible sidebar
- **Theme Toggle**: Dark/Light mode with smooth transitions
- **Zoom & Pan**: Synchronized chart interactions
- **Search & Filter**: Symbol search with real-time filtering
- **Chart Tools**: Drawing tools and analysis features (placeholder)
- **Bottom Panel**: Collapsible information panel with multiple tabs

### 📈 Trading Features
- **Symbol Management**: Local dataset symbol discovery
- **OHLC Data**: Full candlestick chart support with volume
- **Price Indicators**: Current price, change, and percentage display
- **Volume Analysis**: Color-coded volume bars based on price movement
- **Time Range Selection**: Multiple timeframe support

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Plotly.js** - Interactive charting library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

### Backend
- **Python Flask** - Lightweight web framework
- **Pandas** - Data manipulation and analysis
- **NumPy** - Numerical computing
- **openpyxl** - Excel file processing
- **rarfile** - RAR archive support
- **Flask-CORS** - Cross-origin resource sharing

### Data Processing
- **Excel Configuration**: Feature mapping via Charts_dataset.xlsx
- **CSV Processing**: Local dataset file reading
- **Time Series Analysis**: Multi-timeframe data resampling

## 🔌 Frontend-Backend Connection

The application uses a RESTful API architecture:

```
Frontend (React) ←→ HTTP API ←→ Backend (Flask)
     ↓                           ↓
  Plotly.js Charts          Pandas Data Processing
     ↓                           ↓
  User Interface           Local Dataset Files
```

### API Endpoints
- `GET /api/symbols` - Retrieve available trading symbols
- `GET /api/features` - Get chart features configuration
- `GET /api/chart-data` - Fetch OHLC and feature data
- `GET /api/health` - System health check

## 📁 Project Structure

```
trading-dashboard/
├── 📄 package.json          # Node.js dependencies & scripts
├── 📄 vite.config.js        # Vite build configuration  
├── 📄 tailwind.config.js    # Tailwind CSS configuration
├── 📄 index.html            # Entry point HTML file
├── 📄 App.jsx               # Main React application component
├── 📄 utils.js              # API client & utility functions
├── 📄 icons.jsx             # SVG icon components
├── 📄 components.jsx        # UI components (Header, Sidebar, BottomPanel)
├── 📄 charts.jsx            # Chart components with Plotly.js
├── 📄 app.py                # Flask backend server
├── 📄 requirements.txt      # Python dependencies
└── 📄 Charts_dataset.xlsx   # Feature configuration mapping
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/tradepro-dashboard.git
cd tradepro-dashboard
```

2. **Install Frontend Dependencies**
```bash
npm install
```

3. **Install Backend Dependencies**
```bash
pip install -r requirements.txt
```

4. **Prepare Dataset**
   - Create a `Server/` directory in the project root
   - Add your trading data folders (e.g., `Server/SYMBOL1/`, `Server/SYMBOL2/`)
   - Place CSV files or RAR archives containing trading data
   - Ensure `Charts_dataset.xlsx` is configured with proper feature mappings

### Running the Application

1. **Start the Backend Server**
```bash
python app.py
```
The Flask server will start on `http://127.0.0.1:5000`

2. **Start the Frontend Development Server**
```bash
npm run dev
```
The React application will start on `http://localhost:3000`

3. **Access the Dashboard**
Open your browser and navigate to `http://localhost:3000`

### Environment Configuration

The application uses these default configurations:
- **Frontend Port**: 3000
- **Backend Port**: 5000
- **API Base URL**: `/api` (proxied through Vite)
- **Dataset Directory**: `./Server/`
- **Config File**: `./Charts_dataset.xlsx`

No additional environment variables are required for basic setup.

## 📊 Data Format

### Expected Directory Structure
```
Server/
├── SYMBOL1/
│   ├── data_TSD.csv
│   ├── indicators.csv
│   └── other_data.rar
├── SYMBOL2/
│   └── market_data.csv
└── ...
```

### CSV File Requirements
- **Date/Time Column**: Any column containing 'time', 'date', or 'timestamp'
- **OHLC Data**: Open, High, Low, Close columns
- **Volume Data**: AllExchangesVolume or Volume columns
- **Custom Features**: As defined in Charts_dataset.xlsx

### Excel Configuration
The `Charts_dataset.xlsx` file should contain:
- **VariableName**: Feature identifier
- **Draw**: Boolean (TRUE/FALSE) for chart display
- **PaneNumber**: Chart pane assignment (1 or 2)
- **File Name**: Source file for the feature
- **Axis_X/Axis_Y**: Axis configuration

## 🔧 File Connections & Architecture

### Component Hierarchy
```
App.jsx (Main Application)
├── Header.jsx (Symbol info, timeframe selection)
├── Sidebar.jsx (Symbol list, feature selection)
├── ChartComponent.jsx (Main charting area)
│   ├── Main Chart (OHLC/Line/Area/Scatter)
│   ├── Volume Chart (Secondary pane)
│   └── Indicator Charts (RSI, etc.)
└── BottomPanel.jsx (Dataset info, analysis tools)
```

### Data Flow
```
app.py (Flask Backend)
├── Excel Config Loading → Features mapping
├── Local Dataset Discovery → Symbol list
├── Data Processing → OHLC & feature data
└── API Endpoints → JSON responses

utils.js (Frontend Utilities)
├── APIClient → HTTP requests to Flask
├── DataProcessor → Price/volume formatting
└── Storage → User preferences

charts.jsx (Chart Logic)
├── Plotly.js Integration → Interactive charts
├── Technical Indicators → VWAP, RSI, EMA calculations
└── Chart Synchronization → Zoom/pan coordination
```

### Key Connections
- **App.jsx** ↔ **utils.js**: API calls and data processing
- **App.jsx** ↔ **components.jsx**: UI state management
- **charts.jsx** ↔ **Plotly.js**: Chart rendering and interactions
- **app.py** ↔ **Local Dataset**: File system data access
- **Frontend** ↔ **Backend**: HTTP API communication via Vite proxy
  
### Code Structure & File Connections Analysis
### Frontend Architecture

### App.jsx (Main Application Controller)

**Connects to:** utils.js, components.jsx, charts.jsx
**Purpose:** Central state management, API orchestration, user preferences
**Key Dependencies:** React hooks, APIClient, Storage utilities


### components.jsx (UI Components)

**Contains:** Header, Sidebar, BottomPanel components
**Connects to:** icons.jsx, utils.js (DataProcessor)
**Purpose:** User interface elements, symbol selection, feature configuration


### charts.jsx (Chart Rendering)

**Connects to:** icons.jsx, Plotly.js, React
**Purpose:** Interactive chart rendering, technical indicators, chart synchronization
**Key Features:** Multi-pane layout, indicator calculations, zoom/pan coordination


### utils.js (Utility Functions)

**Contains:** APIClient, DataProcessor, Storage, helper functions
**Purpose:** Backend communication, data formatting, local storage management
**API Endpoints:** /symbols, /features, /chart-data, /health


### icons.jsx (SVG Components)

**Purpose:** Scalable vector icons for UI elements
**Used by:** All UI components for consistent iconography



### Backend Architecture

### app.py (Flask Server)

**Dependencies:** pandas, numpy, openpyxl, rarfile, Flask-CORS
**Purpose:** API server, data processing, file system access
**Key Functions:**

Excel configuration loading
Local dataset discovery
Dynamic feature data loading
OHLC data processing





### Configuration & Data

### Charts_dataset.xlsx (Feature Configuration)

**Purpose:** Maps chart features to data files
**Structure:** VariableName, Draw, PaneNumber, File Name columns
**Used by:** Backend for dynamic feature loading


### Server/ Directory (Data Source)

**Structure:** Symbol folders containing CSV/RAR files
**Purpose:** Local dataset storage
**Supported Formats:** CSV files, RAR archives



### Build & Configuration

**vite.config.js** - Frontend build configuration with API proxy
**tailwind.config.js** - Styling configuration with custom themes
**package.json** - Frontend dependencies and scripts
**requirements.txt** - Backend Python dependencies
## 🎨 Customization

### Adding New Indicators
1. Update the `calculateIndicators()` function in `charts.jsx`
2. Add indicator toggle in the UI
3. Configure chart traces and layouts

### Adding New Chart Types
1. Extend the `chartTypes` array in `App.jsx`
2. Implement chart logic in `getMainChartData()` in `charts.jsx`

### Custom Data Sources
1. Modify the file discovery logic in `app.py`
2. Update the Excel configuration format
3. Extend the data processing pipeline

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow React hooks patterns for frontend components
- Use Pandas for all backend data processing
- Maintain responsive design principles
- Add proper error handling and logging
- Write clear component and function documentation

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Plotly.js** for powerful charting capabilities
- **React** ecosystem for modern UI development
- **Flask** for lightweight backend architecture
- **Tailwind CSS** for utility-first styling

👨‍🎓 Author
Kottu Saikumar

📧 Email: kottusaikumar2003@gmail.com

📞 Phone: +91 6304830339

📍 Location: Hyderabad, Telangana

🎓 B.Tech in Electronics and Communication Engineering (2020–2024)

🏫 University College of Engineering, JNTUK

💡 Areas of Interest: Data Science, Deep Learning, NLP, Computer Vision

---
