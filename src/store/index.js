/**
 * Created by doubleyong on 2020/6/30.
 */
import userStore from './userStore'
import productStroe from './productStore'
let user = new userStore();
let product = new productStroe();
const store = {
    user,
    product
}

export  default  store