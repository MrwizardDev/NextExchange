# 🚀 Crypto Exchange System

## 📌 Overview
This is a **centralized cryptocurrency exchange system** with **real-time WebSocket support**. It allows users to:
✅ Create accounts & authenticate securely 🔒  
✅ Deposit & withdraw funds 💰  
✅ Trade crypto assets 📊  
✅ View live order book updates 📈  

---

## 🎯 Features
- 🔐 **User Authentication** (JWT-based login & signup)
- 💼 **Wallet System** (Deposit, Withdraw, Balance Tracking)
- ⚡ **Order Matching Engine** (Buy/Sell Orders Processing)
- 🌐 **Real-Time WebSocket Support** (Live Trade Updates & Order Book)
- 🖥️ **Trading Dashboard** (React Frontend)
- 🔧 **Admin Panel** (User & Transaction Management)
- 🛡️ **Security** (Rate limiting, Encryption, API Protection)
- 🐳 **Docker & CI/CD** for smooth deployment

---

## 🏗️ Tech Stack
- **Backend:** Node.js (Express.js), WebSocket, PostgreSQL/MongoDB
- **Frontend:** React.js, Tailwind CSS
- **Security:** JWT Authentication, Data Encryption
- **Deployment:** Docker, CI/CD

---

## ⚙️ Installation
### Prerequisites
Ensure you have the following installed:
- **Node.js**
- **PostgreSQL** or **MongoDB**
- **Docker** (optional for containerized deployment)

### 🚀 Setup Backend
```bash
cd backend
npm install
cp .env.example .env  # Configure environment variables
npm start
```

### 🎨 Setup Frontend
```bash
cd frontend
npm install
npm start
```

### 🐳 Running with Docker
```bash
docker-compose up --build
```

---

## 📡 API Endpoints
| Method | Endpoint               | Description            |
|--------|------------------------|------------------------|
| 🆕 POST | `/api/auth/signup`       | User Signup           |
| 🔑 POST | `/api/auth/login`        | User Login            |
| 💰 GET  | `/api/user/wallet`       | Get Wallet Balance    |
| 📈 POST | `/api/trade/order`       | Place Buy/Sell Order  |
| 📊 GET  | `/api/trade/orders`      | Get Open Orders       |
| 🔄 WS   | `/ws/orderbook`          | Live Order Book Data  |

---

## 🔥 WebSocket Usage
The WebSocket server provides **real-time updates** for trades and the order book.

Example usage:
```js
const socket = new WebSocket('ws://localhost:3000/ws/orderbook');
socket.onmessage = (event) => {
  console.log('📡 New order book update:', event.data);
};
```

---

## 🤝 Contributing
Feel free to **fork the repo** and submit **pull requests**. Make sure to:
- Follow coding guidelines 📝
- Test your code thoroughly ✅
- Keep contributions clean & structured 🏗️

---

## 📜 License
📄 MIT License

