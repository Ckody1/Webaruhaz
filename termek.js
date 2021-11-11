class Termek{
    constructor(elem, adat, index){
        //létrehozunk változókat az új elemhez
        this.elem=elem;
        //változókat az elem egyes grafikus
        this.cim=this.elem.children("h3");
        this.leiras=this.elem.children("p");
        this.ar=this.elem.children("span");
        this.kep=this.elem.children("img");
        this.adat = adat;
        this.adat.index = index;
        this.setAdatok(this.adat);

        this.gomb=this.elem.children("button");
        this.gomb.on("click", ()=>{
            this.kattintasTrigger();
        });
        
    }
    setAdatok(ertekek){
        this.cim.html(ertekek.nev);
        this.kep.attr("src", ertekek.kep);
        this.leiras.html(ertekek.leiras);
        this.ar.html(ertekek.ar)
    }
    kattintasTrigger(){
        let esemeny = new CustomEvent("kepValasztas", {detail:this.adat});
        /* console.log("esemény kiváltva");  */
        window.dispatchEvent(esemeny);
    }
}