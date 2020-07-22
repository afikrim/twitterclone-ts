const normalizePort = (port: any) => parseInt(port, 10);

export const PORT = normalizePort(process.env.PORT || 3000);

export const DB_URL =
  process.env.DB_URL || "mongodb://127.0.0.1:27017/simpleblog-ts";
