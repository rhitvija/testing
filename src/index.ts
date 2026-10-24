import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle("postgresql://neondb_owner:npg_7EevcL0GJoDu@ep-green-shape-b4uqe0ho-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
