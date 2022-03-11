class ServiceLocator {
   services:any[]=[];

   register(_services:any):void{
       if(Array.isArray(_services)){
           this.services.concat(_services);
       }else{
           this.services.push(_services);
       }
   }
}
export default ServiceLocator;
