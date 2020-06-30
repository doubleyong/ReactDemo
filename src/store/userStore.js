/**
 * Created by doubleyong on 2020/6/30.
 */
import {observable,action} from 'mobx'
class userStore{
    @observable num = 0
    @action
    changeNum(){
        this.num++;
    }
}
export default userStore