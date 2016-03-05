// Yuri's library for jQ&&js
// version:0.0.3

// @group js

// 1.基础常用函数



// 2.组件


// 打分系统
function getRating(rating) {
    if(rating > 5 || rating < 0) throw new Error('数字不在范围内');
    return '★★★★★☆☆☆☆☆'.substring(5 - rating, 10 - rating );
}
// file API
function fileReaderPermission() {
	// 检查file api 是否可用
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		// all api are supported
	}else{
		alert("The File APIs are not fully supported in this browser.")
	}
}
// input-flie 选择
function inputFileSelect() {
	document.getElementById('files').addEventListener('change', handleFileSelect, false);
	function handleFileSelect(evt) {
		// file list object
		var files = evt.target.files;
		// files is a fileslist of file objects .list some properties
		var output = [];
		    for (var i = 0, f; f = files[i]; i++) {
		    	// 文件名 MIME类型 size 最后修改时间
		      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
		                  f.size, ' bytes, last modified: ',
		                  f.lastModifiedDate.toLocaleDateString(), '</li>');
		    }
		    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
		  }		  
	}
}

// @group JQ

// 1.背景图的动画效果
function BGChange () {
	var BGNum = 2;
	setInterval(function () {	
		// 作为背景图的容器 要求 脱离文档流 z-index 不挡其他元素		
		$("#BG")
			.animate({opacity:0},500,function () {
				$(this)
					// 背景图的命名规则为 BGPic-数字.jpg
					.css('background-image', 'url(./images/BGPic-'+BGNum+'.jpg)')
					.animate({opacity:1},500)
			})
		BGNum++;
		if (BGNum > 4) {
			BGNum = 1;
		};
	},5000)
}