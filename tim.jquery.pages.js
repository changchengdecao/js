/**
 * 分页
 * $.pages(number,baseUrl,prePageNumber,currentPage)
 * number 		 总数
 * baseUrl 		 基础url
 * prePageNumber 每页数量
 * currentPage	 当前页
 * 
 * @author TimZhang
 * 
 */
(function($){
	$.extend({
		pages:function(number,baseUrl,prePageNumber,currentPage){
			if(null ==prePageNumber || "undefined" == typeof(prePageNumber) || isNaN(prePageNumber)) prePageNumber = 6;
			if(null == currentPage || "undefined" == typeof(currentPage) || isNaN(currentPage)) currentPage = 1;
			var pages = Math.ceil(number/prePageNumber);
			number = Number(number);
			prePageNumber = Number(prePageNumber);
			currentPage = Number(currentPage);
			
			var start;
			var end;
			if(number < 6){
				start = 1
				end = pages
			}else if(currentPage <= 3){
				start = 1;
				end = start + 6;
			}else if(currentPage >= pages - 3){
				end =pages;
				start = end - 6;
			}else{
				start = currentPage - 3;
				end = currentPage + 3;
			}
			
			var result = "<ul>";
			if(currentPage-1 >= 1){
				result += "<li><a  class=\"pre\" page-id=\""+(currentPage-1)+"\" href=\""+baseUrl+"?page="+(currentPage-1)+"\">上一页</a></li>";
			}
			for(var i=1;i<=pages;i++){
				if(i < start || i > end )
					continue;
				
				var tag;
				if(i == currentPage){
					tag = "<li class=\"now\">"+i+"</li>";
				}else{
					tag = "<li><a page-id=\""+i+"\" href=\""+baseUrl+"?page="+i+"\">"+i+"</a></li>";
				}
				result += tag;
			}
			if(currentPage+1 <= pages){
				result += "<li><a class=\"next\" page-id=\""+(currentPage+1)+"\" href=\""+baseUrl+"?page="+(currentPage+1)+"\">下一页</a></li>";
			}
			
			result += "<div class=\"clear\"></div></ul>";
			return result;
		}
	});
})(jQuery);
