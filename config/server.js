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
    url: env('ADMIN_URL'),
  },
});
