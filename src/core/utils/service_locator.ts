class ServiceLocator {
   service:any[]=[];

   register(_services:any):void{
       if(Array.isArray(_services)){
           this.service.concat(_services);
       }else{
           this.service.push(_services);
       }
   }
}
export default ServiceLocator;
