import React, { createContext, ReactNode } from 'react';

import { drizzle, ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";
import {  openDatabaseSync } from 'expo-sqlite/next';




export const DbContextApi = createContext<ExpoSQLiteDatabase<Record<string, never>>>({} as ExpoSQLiteDatabase<Record<string, never>>)

interface TestProps {
  children: ReactNode
}
export function TestContext({children}: TestProps){
  const expo = openDatabaseSync("volp.db", {
    useNewConnection: true
  });
  const db = drizzle(expo);
  return(
    <DbContextApi.Provider value={db}>
      {children}
    </DbContextApi.Provider>
  )
}