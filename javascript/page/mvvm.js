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
        var fragment = this.nodeFragment(this.el);
        //console.info(this.el);
        //console.info(fragment);
        //把节点中的内容进行替换

        //最后把替换好的内容塞到页面中
        this.el.appendChild(fragment);
    }
    isElementNode(node){//判断是不是元素节点
        return node.nodeType === 1;
    }
    //把节点移到内存中
    nodeFragment(node){
        //创建一个文档碎片
        var fragment = document.createDocumentFragment();
        var firstChild;
        while(firstChild = node.firstChild){
            fragment.appendChild(firstChild);
        }
        return fragment;























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