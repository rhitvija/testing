import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle("postgresql://neondb_owner:npg_khmR74ObqgAD@ep-shiny-art-b53o2a0b-pooler.c-7.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
