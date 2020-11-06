const oracledb = require('oracledb');
import keys from './keys';


async function initialize() {
    console.log('Database conneted');
    const pool = await oracledb.createPool(keys.database);
}

function simpleExecute(statement: any, binds = [], opts = {outFormat: null, autoCommit: false}) {
    return new Promise(async (resolve, reject) => {
      let conn;
   
      opts.outFormat = oracledb.OBJECT;
      opts.autoCommit = true;
   
      try {
        conn = await oracledb.getConnection();
        const result = await conn.execute(statement, binds, opts);
        resolve(result);
      } catch (err) {
        reject(err);
      } finally {
        if (conn) { // conn assignment worked, need to close jajaja
          try {
            await conn.close();
          } catch (err) {
            console.log(err);
          }
        }
      }
    });
  }

  

function close() {
     oracledb.getPool().close();
}

module.exports.initialize = initialize;
module.exports.close = close;
module.exports.simpleExecute = simpleExecute;