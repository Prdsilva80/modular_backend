import 'dotenv/config';

export const env = {
    port: process.env.PORT || 3333,
    database: {
        url: process.env.DATABASE_URL || '',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'default_secret',
    }
};