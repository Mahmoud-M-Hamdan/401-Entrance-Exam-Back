'use strice'
class ApiModel{
    constructor(data){
this.name=data.title,
this.image=data.image_url,
this.price =data.toUSD,
this.description=data.description
    }
}


module.exports=ApiModel