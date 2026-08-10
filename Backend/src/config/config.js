import dotenv from "dotenv"
dotenv.config()


if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variables")
}

if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables")
}
if (!process.env.GOOGLE_CLIENT_ID) {
    throw new Error("google client id is not defined in environment variables")
}
if (!process.env.GOOGLE_CLIENT_SECRET) {
    throw new Error("google client secret is not defined in environment variables")
}
if (!process.env.GOOGLE_CALLBACK_URL) {
    throw new Error("google callback url is not defined in environment variables")
}


export const config = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
}