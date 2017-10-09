/**
 * Created by 123 on 2016/11/22.
 */
/*
 *  获取scrollTop和scrollLeft 
 */
function scroll() {
    if(window.pageYOffset !== null){ // ie9+  和 最新浏览器
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }else if(document.compatMode == 'CSS1Compat'){ // 非怪异浏览器
        return{
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return{
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}



//封装显示

function show(tagId) {
    return document.getElementById(tagId).style.display = 'block';
}

//封装隐藏
function hide(tagId) {
    return document.getElementById(tagId).style.display = 'none';
}

function $(tagId) {
    return document.getElementById(tagId);
}

