import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const about = sqliteTable('about', {
  id: integer('id').primaryKey(),
  description: text('description').notNull(),
  executionDateOperation: integer('execution_date_operation').notNull(),
})

export const sync = sqliteTable('sync', {
  id: integer('id'),
  date: text('description').notNull(),
})

export const verbete = sqliteTable('verbete', {
  id: integer('id').primaryKey(),
  description: text('description').notNull(),
  foreing: integer('foreing', {
    mode: "boolean"
  }).notNull().default(false),
  soundex: text('soundex'),
})

//(id INTEGER PRIMARY KEY NOT NULL, description TEXT NOT NULL, execution_date_operation INTEGER);

/*   CREATE TABLE IF NOT EXISTS verbete (id INTEGER PRIMARY KEY NOT NULL, code INTEGER NOT NULL, description TEXT NOT NULL, estrangeira BOOLEAN);
  CREATE TABLE IF NOT EXISTS about (id INTEGER PRIMARY KEY NOT NULL, description TEXT NOT NULL, execution_date_operation INTEGER);
  CREATE TABLE IF NOT EXISTS sync (id INTEGER PRIMARY KEY NOT NULL, date TEXT NOT NULL); */