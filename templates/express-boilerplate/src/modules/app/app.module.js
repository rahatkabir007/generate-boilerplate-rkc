import express from "express";
import cors from "cors";
import { connectDB } from "../../config/database.js";
// import { logger } from "../../utils/logger.js";
import { errorMiddleware } from "../../middlewares/error.middleware.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
// Modules imports will be dynamically inserted here

const AppModule = async (app) => {
    // Connect to database
    const db = await connectDB();
    app.locals.db = db;

    // Middlewares
    app.use(cors());
    app.use(express.json());
    app.use(authMiddleware);

    // // Logger
    // app.use((req, res, next) => {
    //     logger.info(\`\${req.method} \${req.url}\`);
    //     next();
    // });

    // Modules initializations will be dynamically inserted here


    app.use(errorMiddleware);
};

export { AppModule };
