import fs from 'node:fs/promises';
import path from 'node:path';
import { PrismaClient } from '@prisma/client';

/**
 * Executes all sql statements in createSchema.sql
 */
const createSchema = async () => {
  const prisma = new PrismaClient();
  const schemaPath = path.join(__dirname, 'createSchema.sql');

  try {
    const schema = await fs.readFile(schemaPath, 'utf-8');
    console.log('- LOADING SCHEMA -');
    await prisma.$executeRawUnsafe(schema);
    console.log('Schema loaded successfully.');
  } catch (error) {
    console.error('Error loading schema:', error);
  }
};

createSchema()
  .then(() => {
    console.log('Finished OK');
  })
  .catch((e) => {
    console.error('Finished KO', e);
  });
