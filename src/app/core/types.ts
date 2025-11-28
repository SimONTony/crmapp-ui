export enum AppHttpMethod {
    Get = 'get',
    Post = 'post',
    Put = 'put',
    Delete = 'delete',
    Patch = 'patch'
}

export interface AppHttpRequest<T = any> {
  url: string;
  method?: AppHttpMethod;
  params?: { [key: string]: any };
  headers?: { [key: string]: string | string[] };
  body?: any;
  withCredentials?: boolean;
}

export interface AppHttpResponse<T = any> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
  results: T;
}
