// 入口文件

import * as Base from "./base";
import box from "./login";


console.log(Base.a);
Base.show();
Base.hide();
Base.get();

import {a,b,c,aa,bb,cc,show,hide,get,gs,box,ss,firstName as fname,lastName as lName,year as y} from "./base";
box.num=20000000;

function setName(element){
    element.textContent = '我是${fname},我是${lName},我的年龄是${y}'
}
setName(box);
