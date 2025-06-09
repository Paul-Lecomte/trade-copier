
# MetaTrader 5 Trade Copier

A real-time trade copier for MetaTrader 5 (MT5) accounts. This web-based application allows users to automatically mirror trades from one MT5 account to another, providing a seamless trading experience. Built using Next.js for the frontend and WebSocket for real-time communication.

## Features

- **Real-Time Trade Mirroring:** Automatically copies trades from a source MT5 account to a destination account.
- **WebSocket Communication:** Low-latency, bi-directional communication between the frontend and backend for real-time trade updates.
- **User Interface:** Built with Next.js, providing an intuitive interface for monitoring and managing trades.
- **Flexible Integration:** Supports multiple MT5 accounts, making it easy to scale and add more sources and destinations.

## Tech Stack

- **Frontend:** Next.js (React) 
- **Backend:** Node.js with WebSocket (for real-time communication)
- **MetaTrader 5 Integration:** MQL5 (for connecting MT5 with the backend)
- **Communication Protocol:** WebSocket (for low-latency communication)

## How It Works

1. **Frontend (Next.js):** The frontend interface is a web application built with Next.js. It allows users to manage and monitor trades in real-time. The interface connects to the backend via WebSocket to receive updates and status information about trades.

2. **Backend (Node.js):** The backend consists of a WebSocket server running on Node.js. This server listens for real-time data sent from MetaTrader 5 (via an MQL5 bridge) and forwards it to the frontend for display.

3. **MetaTrader 5 (MQL5):** The MT5 integration uses an MQL5 script that sends trade data (such as buy/sell actions, lot sizes, etc.) to the WebSocket server. The data is then relayed to the frontend, allowing users to see live trade updates.

## Installation

### Prerequisites

- **Node.js**: Ensure that you have Node.js and npm installed on your machine. You can download Node.js [here](https://nodejs.org/).
- **MetaTrader 5 (MT5)**: You will need an active MT5 account to connect and send trade data.

### Clone the Repository

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Paul-Lecomte/trade-copier
   cd trade-copier
   ```

2. Install dependencies for both the backend and frontend:
   ```bash
   npm install
   ```

### Backend Setup

1. The backend uses WebSocket to communicate with MetaTrader 5 and the frontend. It is built with Node.js and uses Express for basic server management.

2. **Start the Backend Server:**
   ```bash
   cd backend
   npm start
   ```

   This will start the WebSocket server on port 3000.

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. **Start the Frontend Server:**
   ```bash
   npm run dev
   ```

   This will start the Next.js frontend on `http://localhost:3001`.

## Usage

1. Open the frontend application in your browser (`http://localhost:3001`).
2. Log in with your MT5 account credentials (or configure the backend to authenticate via API).
3. Configure the trade copier by selecting the source and destination MT5 accounts.
4. Once set up, trades from the source account will be mirrored to the destination account in real time.

## MetaTrader 5 Integration

The MetaTrader 5 integration requires an MQL5 script to be running in the MT5 terminal. This script sends trade data (such as buy/sell, lot size, etc.) to the backend via a WebSocket connection. The backend then relays this data to the frontend for real-time updates.

## Contributing

We welcome contributions to this project! If you'd like to contribute, please fork the repository, make your changes, and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Made by
[Paul Lecomte](https://github.com/Paul-Lecomte)