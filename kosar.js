class Kosar {
  constructor(elem, adat) {
    this.kosarTomb = [];
    this.kosarElem = $(".kosar");

    this.lefut = false;
    // konkrét elemeknek értéket adunk

    /* this.gomb = this.elem.children("table button");
    this.gomb.on("click", () => {
        console.log("+")
      this.torles();
    }); */
  }
  setElemKosarba(elem) {
    this.kosarTomb.push(elem);
    this.megjelenit();
  }

  megjelenit() {
    this.osszeg = 0;
    var txt = "<tr>";
    $("#kosaram table").empty();
    $("#osszar").empty();
    for (var i = 0; i < this.kosarTomb.length; i++) {
      txt += "<td>" + this.kosarTomb[i]["nev"] + "</td>";
      txt += "<td>" + this.kosarTomb[i]["ar"] + "</td>";
      txt += "<td><button id='torles" + i + "'>X</button></td>";
      txt += "</tr>";
      this.osszeg += this.kosarTomb[i]["ar"];
    }
    /* console.log(this.osszeg); */
    $("#kosaram table").append(txt);
    $("#osszar").append(this.osszeg + " Ft");

    this.lefut = true;
  }
  torles() {
    let esemeny = new CustomEvent("torlesEsemeny", { detail: this.adat });
    /* console.log("esemény kiváltva");  */
    window.dispatchEvent(esemeny);
  }
}
