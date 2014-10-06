/**
 * 基础公共函数
 * @author TimZhang
 */


/**
 * 获取location href 参数
 * @param para
 * @returns
 */
function getQuery(para){ 
	 var reg = new RegExp("(^|&)"+para +"=([^&]*)(&|$)"); 
	 var r = window.location.search.substr(1).match(reg); 
	 if(r!=null){ 
		 return unescape(r[2]); 
	 } 
	 return null; 
 }
