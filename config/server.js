module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT'),
  url: env('URL'),
  proxy: env.bool('PROXY'),
  cron: {
    enabled: env.bool('CRON_ENABLED'),
  },
  admin: {
    auth: {
      secret: env('ADMIN_AUTH_SECRET'),
    },
    host: env('HOST'),
    port: env.int('ADMIN_PORT'),
    url: env('ADMIN_URL'),
  },
});
