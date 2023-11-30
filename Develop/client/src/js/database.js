import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  
  const jate = await openDB('jate', 1);
  
  
}

// TODO: Add logic for a method that gets all the content from the database
//function that will be used to GET to the database
export const getDb = async () => 
  console.error('getDb not implemented');
  //creates a connection to the database with the version we want to use.


//starts the database
initdb();
