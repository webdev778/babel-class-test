import _ from 'lodash';
import pluralize from 'pluralize';

class Base {
    static table;
    constructor(){
        this.member = 1;
    }
    static tableName(){
        return this.table || pluralize(_.snakeCase(this.name));
    }
}

class PricingPrice extends Base {    
    // static table = 'price_configs';
}

console.log(Base.tableName());
console.log(PricingPrice.tableName());