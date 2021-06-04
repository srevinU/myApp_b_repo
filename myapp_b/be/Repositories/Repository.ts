import { myPgPoolUtils } from "../DbPg/myPgUtils";

class Repository {

    pgDbConnection: myPgPoolUtils
    param: Array < string | null | undefined | number | boolean >

        constructor(pgDbConnection: myPgPoolUtils) {
            this.pgDbConnection = pgDbConnection
        }

    async getAllRecords(query: Array<any>) {
        let results: any;
        try {
            results = await this.pgDbConnection.query(query[0].SELECT_ALL);
            console.log("getAll()", results);
            return results;
        } catch (err) {
            console.error("getAll()", err);
            throw err;
        }
    }

    async insertRecord(query: Array<any>, params: Array < string | number | boolean | null | undefined > ) {
        let results: any;
        try {
            results = await this.pgDbConnection.query(query[0].INSERT, params);
            console.log("insertNewProduct()", results);
            console.log(results);
        } catch (err) {
            console.error("insertNewProduct()", err);
        }
    }

    async updateRecord(query: Array<any>, params: Array < string | number | boolean | null | undefined > ) {
        let results: any;
        try {
            results = await this.pgDbConnection.query(query[0].UPDATE, params);
            console.log("updateProduct()", results);
            console.log(results);
        } catch (err) {
            console.error("updateProduct()", err);
        }
    }

    async deleteRecord(query: Array<any>, uuid: Array < string > ) {
        let results: any;
        try {
            results = await this.pgDbConnection.query(query[0].DELETE, uuid);
            console.log("deleteProduct()", results);
            console.log(results);
        } catch (err) {
            console.error("deleteProduct()", err);
        }
    }

}

// const myRepo = new Repository(new myPgPoolUtils());
// // console.log(myRepo.getAll());

// const params = [
//     "For test from test 3",
//     "For test from test 3",
//     100,
//     1,
//     "For test from test 3",
//     4,
//     true,
//     2,
//     3,
//     ]

// myRepo.insertNewProduct(params);

export {
    Repository
}
