import {
  MongoClient,
  Database,
} from 'https://deno.land/x/mongo@v0.31.1/mod.ts';

let db: Database;

export async function connect() {
  try {
    const client = new MongoClient();

    const connectionResult = await client.connect(
      'mongodb+srv://andt_learning:F5zDpHO6ZROiSZUT@cluster0.l89rk.mongodb.net/deno-todos?authMechanism=SCRAM-SHA-1'
    );

    console.log(connectionResult);

    db = client.database('deno-todos');
  } catch (err) {
    console.log('Connect Database failed!', err);
  }
}

export function getDb() {
  return db;
}
