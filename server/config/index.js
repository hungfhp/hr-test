export default {
  PORT: 8080,
  MONGODB_URI: "mongodb://localhost:27017/baymax_hungfhp",

  JWT_PRIVATE_KEY: "My jwt private key",

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
