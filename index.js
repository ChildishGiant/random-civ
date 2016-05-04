
var civs = ["American","Arabian","Assyrian","Austrian","Aztec","Babylonian",
"Brazilian","Byzantine","Carthaginian","Celtic","Chinese","Danish","Dutch",
"Egyptian","English","Ethiopian","French","German","Greek","Hunnic","Incan",
"Indian","Indonesian","Iroquois","Japanese","Korean","Mayan","Mongolian",
"Moroccan","Ottoman","Persian","Polish","Polynesian","Portuguese","Roman",
"Russian","Shoshone","Siamese","Songhai","Spanish","Swedish","Venetian","Zulu"]

function gen(){
  randCiv = civs[Math.floor(Math.random() * civs.length)]
  $("h1#randCiv").text(randCiv)
}
