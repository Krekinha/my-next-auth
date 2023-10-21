import { createLogger, format, transports } from "winston";

const getLogger = (fileName = "log") => {

  const fileLogger = new transports.File({ filename: "app.log" });

  const consoleLogger = new transports.Console({
    level: process.env.LOG_LEVEL,
    handleExceptions: false,
    format: format.printf((i) => `${i.message}`),
  });

  const logger = createLogger({
    level: "info",
    format: format.combine(
      format.timestamp({
        format: "DD-MM-YYYY HH:mm:ss",
      }),
      format.errors({ stack: true }),
      format.splat(),
      format.printf(
        ({ level, message, ambient = process.env.NODE_ENV, timestamp, url }) =>
          `${timestamp} [${ambient}] [${level}: ${message}] url: ${url}`
      )
    ),
    defaultMeta: { service: "logger" },
    transports: [consoleLogger],
  });

  logger.add(fileLogger);
  return logger;
};

export default getLogger();
