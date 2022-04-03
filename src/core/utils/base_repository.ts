import BaseException from "../error/base_exception";
import Resource from "./resource";

abstract class BaseRepository {
  private errorHandler<T>(
    exception: BaseException | unknown,
    specificErrorHandler?: (E?: BaseException) => Resource<T>,
  )
    : Resource<T> {
    if (specificErrorHandler != null) {
      const spesficError = specificErrorHandler.call(exception);
      if (spesficError != null) return spesficError;
    }
    if (exception instanceof BaseException) {
      return Resource.error({ exception });
    }
    return Resource.error<T>({ exception: new BaseException({ message: "Unkown Error." }) });
  }

  public async networkOnlyCall<T>(params: {
    networkCall: () => Promise<Resource<T>>,
    specificErrorHandler?: () => Resource<T>,
  }): Promise<Resource<T>> {
    try {
      return await params.networkCall();
    } catch (error) {
      return this.errorHandler(error, params.specificErrorHandler);
    }
  }

  public async cacheOnlyCall<T>(
    params: {
      cacheCall: () => Promise<Resource<T>>,
      specificErrorHandler?: (E?: BaseException) => Resource<T>,
    },
  )
    : Promise<Resource<T>> {
    try {
      return await params.cacheCall();
    } catch (e) {
      return this.errorHandler(e, params.specificErrorHandler);
    }
  }
}

export default BaseRepository;
