import BaseException from "../error/base_exception";

abstract class Resource<T> {
  public whenWithResult(params: {
        success?: (success: ResourceSuccess<T>) => void,
        error?: (error: ResourceError<T>) => void,
    }): void {
    if (this instanceof ResourceSuccess) {
      if (params.success != null) params.success(this as ResourceSuccess<T>);
    } else if (this instanceof ResourceError) {
      if (params.error != null) params.error(this as ResourceError<T>);
    }
  }

  public static success<T>(params: { data: T }): ResourceSuccess<T> {
    return new ResourceSuccess<T>({ data: params.data });
  }

  public static error<T>(params: { exception: BaseException }): ResourceError<T> {
    return new ResourceError<T>({ exception: params.exception });
  }
}

class ResourceSuccess<T> extends Resource<T> {
  data: T;

  constructor(params: { data: T }) {
    super();
    this.data = params.data;
  }
}

class ResourceError<T> extends Resource<T> {
  exception: BaseException;

  constructor(params: { exception: BaseException }) {
    super();
    this.exception = params.exception;
  }
}


export default Resource;
  