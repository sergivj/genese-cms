// config/database.ts (Strapi v5)
export default ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'postgres'), // default postgres
    connection: {
      // Usa la Internal URL de Render aquí
      connectionString: env('DATABASE_URL'),
      ssl: env.bool('DATABASE_SSL', false)
        ? {
            // pon esto en false SOLO si ves un error de certificado en External URL
            rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
          }
        : false,
      schema: env('DATABASE_SCHEMA', 'public'),
    },
    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    },
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  },
});
