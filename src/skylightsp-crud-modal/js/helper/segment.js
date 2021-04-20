function getUrlSegment(number){
	if (number != null) {
		var url = window.location.href;
		// console.log(url);
		var getSegment = url.replace(base_url, '');
		var segment = getSegment.split('/');	
		// console.log(segment);
		// console.log(segment[number]);

		return segment[number];
	}
}



//---<> URL
	function generateURL(){
		var result;
		var rSegment = getUrlSegment(0);
		var oSegment = getUrlSegment(1);
		if (oSegment == 'status') {
			result = base_url+rSegment+'/'+oSegment;
			// return result;
		}else{
			result = base_url+rSegment;
			// return result;
		}
		return result;
	} 
//---<> URL