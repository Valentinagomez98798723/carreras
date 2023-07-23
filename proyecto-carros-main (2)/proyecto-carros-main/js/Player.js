class Player {
  constructor() {
   this.name=null
   this.index=null
   this.positiox=0
   this.positioy=0
  }
  getCount(){
    var playerCountRef = database.ref("playerCount")
    playerCountRef.on("balue",(data)=>"playerCount=data.bal"())
    updateCount(count){
    batabase.ref("/"),update({
      playerCount:count
    })
  }

  }

}
