import * as schema from '../../src/db/schema'
import { sqliteGenerate } from 'drizzle-dbml-generator'; // Using Postgres for this example

const out = './schema.png';
const relational = false;

sqliteGenerate({ schema, out, relational });