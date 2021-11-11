$(function () {
	const kiskosar = new Kosar();
	const termekek = [];
	beolvas("termekek.json", termekek, megjelenit);



	function beolvas(fajl, tomb, myCallBack) {
		$.ajax({
			url: fajl,
            success:function(result){
				result.forEach((element)=>{
					tomb.push(element);
				});
				myCallBack();
				console.log(tomb);
			}
		});	
	}
    
    
    function megjelenit(){
		const galeriaSzulo = $(".termekek");
    	let sablonElem = $(".termek");

        for (let index = 0; index < termekek.length; index++) {
            let ujElem = sablonElem.clone().appendTo(galeriaSzulo);
            const ujTermek = new Termek(ujElem, termekek[index], index); 
        }
		sablonElem.remove();
    }

	$(window).on("kepValasztas", function(esemeny){
        kiskosar.setElemKosarba(esemeny.detail);
    });
	$(window).on("torlesEsemeny", function(esemeny){
        console.log("lefut");
    });
	
});
