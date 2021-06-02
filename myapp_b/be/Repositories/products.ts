import { Repository } from "./Repository";
import { queries } from "../DbPg/queries/productQueries";
import { myPgPoolUtils } from "../DbPg/myPgUtils";


class RepoProducts extends Repository {

    queries: typeof queries
    constructor (pgDbConnection: myPgPoolUtils) {
        super(pgDbConnection)
        this.queries = queries
    }

    
}


const objTest = new RepoProducts(new myPgPoolUtils());

console.log(objTest.getAllRecords(objTest.queries));



type product = {
    u_type: string, 
    u_name: string,
    u_image_url: string, 
    u_price: number,
    u_description: string,
    u_stars: number,
    u_active: boolean, 
    u_nb_of_sell: number, 
    u_qty: number
}

export {
    RepoProducts,
    product
}