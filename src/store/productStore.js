/**
 * Created by doubleyong on 2020/6/30.
 */
import {observable,action} from 'mobx'
import "whatwg-fetch";
class productStore{
    @observable productName = "哇哈哈"
    @observable productList = []
    @action
    changeNum(){
        this.productName="王老吉";
    }
}
export default productStore