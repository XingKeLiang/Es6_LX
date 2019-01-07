export let a = 10;
export let b = 20;
export let c = 30;

let aa = "hello";
let bb = "world";
let cc = "Es6";
let firstName = "老王";
let lastName = "老送";
let year = 1998;
let box = {
    num:10
}
export {
    aa,
    bb,
    cc,
    getStyle as gs,
    setStyle as ss,
    firstName as fname,
    lastName as lsname,
    year as y,
    box
}
export function show(){
    console.log("111");
}
export function hide(){
    console.log("222");
}
export function get(){
    console.log("get");
}
function getStyle(){
    console.log("获取样式")
}
function setStyle(){
    console.log("设置样式")
}
import {demo,count} from "./login";



export{
    demo,count
}