import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


// test payment model
const testPaymentModel = asyncHandler(async () => {
    // const sql = 'SELECT p.*, r.rating, r.count\n' +
    //     'FROM physiotherapist p\n' +
    //     'LEFT JOIN ratings r ON p.id = r.id\n' +
    //     'WHERE p.id IN (SELECT id FROM users WHERE status IN (\'Active\', \'Inactive\'))\n' +
    //     'ORDER BY (r.rating * 1.0 / r.count) DESC;';
    // const result = await query(sql);
    //
    // return result.rows;

    console.log('test payment model');
});


export {
    testPaymentModel,
}
