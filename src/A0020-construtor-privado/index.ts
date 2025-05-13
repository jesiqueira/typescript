// Singleton - GoF | Factory Method - GoF
class Database {
  private static instance: Database

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {
    console.log('Database instance created')
  }

  // Factory Method
  public static getInstance(host: string, user: string, password: string): Database {
    if (!Database.instance) {
      console.log('Creating a new instance of Database')
      Database.instance = new Database(host, user, password)
      return Database.instance
    }
    console.log('Returning the existing instance of Database');
    return Database.instance
  }

  public connect(): void {
    console.log('Connected to the database')
  }
}


const db1 = Database.getInstance('localhost', 'root', 'password')
const db2 = Database.getInstance('localhost', 'admin', 'admin')
console.log(db1 === db2) // true
db1.connect() // Connected to the database
db2.connect() // Connected to the database
// db1 and db2 are the same instance
