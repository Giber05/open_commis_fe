class BaseException implements Error {
    name: string;
  
    message: string;
  
    stack?: string | undefined;
  
    constructor(
      params: { message: string, name?: string | undefined, stack?: string | undefined },
    ) {
      this.message = params.message;
      this.name = params.name ?? "";
      this.stack = params.stack;
    }
  }
  
  export default BaseException;