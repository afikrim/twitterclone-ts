const normalizePort = (port: any) => parseInt(port, 10);

export const PORT = normalizePort(process.env.PORT || 3000);
