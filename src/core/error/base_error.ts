abstract class BaseError implements Error {
    name: string;
    message: string;
    stack?: string | undefined;
  
    constructor(params: { name: string; message: string; stack?: string | undefined }) {
      this.name = params.name;
      this.message = params.message;
      this.stack = params.stack;
    }
  }
  
  export default BaseError;
  