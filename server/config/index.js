export default {
  PORT: 8080,
  MONGODB_URI: "mongodb://localhost:27017/baymax",

  JWT_PRIVATE_KEY: "People don't know this key",

  USER_ROLE: {
    ADMIN: "ADMIN",
    EMPLOYEE: "EMPLOYEE"
  },
  REVIEW_STATUS: {
    ASSIGNED: "ASSIGNED",
    REVIEWED: "REVIEWED",
    FEEDBACKED: "FEEDBACKED"
  }
}
