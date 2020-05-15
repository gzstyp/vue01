/**
 * @作者 田应平
 * @创建时间 2020-05-15 22:58
 * @QQ号码 444141300
 * @官网 http://www.fwtai.com
*/
class Complier{
    constructor(el,vm){
        //判断el是否是一个元素
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        console.info(this.el);
    }
    isElementNode(node){
        return node.nodeType === 1;
    }
};
class Vue{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;
        if(this.$el){
            new Complier(this.$el,this);
        }
    }
}