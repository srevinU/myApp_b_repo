import { myPgPoolUtils } from "../DbPg/myPgUtils";
import { queries } from "../DbPg/queries/productQueries";

class Repository {

    pgDbConnection: myPgPoolUtils
    param: Array<string|null|undefined|number|boolean>

    constructor(pgDbConnection: myPgPoolUtils) {
        this.pgDbConnection = pgDbConnection
    }

    async getAll() {
        let results: any;
        try {
            results = await this.pgDbConnection.query(queries.SELECT_ALL);
            console.log("getAll():", results);
            return results;
        } catch(err) {
            console.error(err);
            throw err;
        }
    }

    async insertNewProduct() {
        let results: any;
        let params:Array<string|number|boolean|null|undefined> = [
            "For test form test",
            "For test form test",
            100,
            1,
            "For test form test",
            4,
            true,
            2,
            3,
            ]
            try {
                results = await this.pgDbConnection.query(queries.INSERT, params);
                console.log("insertNewProduct():", results);
                console.log(results);
            } catch(err) {
                console.error(err);
            }
        

    }

}

const myRepo = new Repository(new myPgPoolUtils());
// console.log(myRepo.getAll());
console.log(myRepo.insertNewProduct());

// let params = [
//   "u_type2",
//   "u_name2",
//   100,
//   1,
//   "u_description2",
//   4,
//   true,
//   2,
//   3,
// ]

// myPgUtilsObj.query('SELECT * FROM products');

// // myPgUtilsObj.query(queries.INSERT, params);

// myPgUtilsObj.disconnection();