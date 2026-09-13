import express from "express";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db.js";
// Import Routes
import movieRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import watchlistRoutes from "./routes/watchlistRoutes.js"

config();
connectDB();

const app = express();

//Body parsing middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Gelen verileri işlemek için zorunlu middleware
app.use(express.json());

// API Routes
app.use("/movies", movieRoutes);
app.use("/auth", authRoutes);
app.use("/watchlist", watchlistRoutes)

const PORT = 5005;

// HATA BURADAYDI: "const server =" ekledik ki aşağıdaki kapatma kodları çökmesin
const server = app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`Sunucu Başarıyla PORT ${PORT} Üzerinde Açıldı!`);
    console.log(`=========================================`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection:", err);
    if (server) {
        server.close(async () => {
            await disconnectDB();
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
});

// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
    console.error("Uncaught Exception:", err);
    await disconnectDB();
    process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
    console.log("SIGTERM received, shutting down gracefully");
    if (server) {
        server.close(async () => {
            await disconnectDB();
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
});