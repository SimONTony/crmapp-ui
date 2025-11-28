import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { AppHttpMethod, AppHttpRequest, AppHttpResponse } from './types';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get<T = any>(args: AppHttpRequest): Observable<T> {
    return this.request<T>({ ...args, method: AppHttpMethod.Get });
  }

  post<T = any>(args: AppHttpRequest): Observable<T> {
    return this.request<T>({ ...args, method: AppHttpMethod.Post });
  }

  patch<T = any>(args: AppHttpRequest): Observable<T> {
    return this.request<T>({ ...args, method: AppHttpMethod.Patch });
  }

  put<T = any>(args: AppHttpRequest): Observable<T> {
    return this.request<T>({ ...args, method: AppHttpMethod.Put });
  }

  delete<T = any>(args: AppHttpRequest): Observable<T> {
    return this.request<T>({ ...args, method: AppHttpMethod.Delete });
  }

  private request<T = any>({
    url,
    method = AppHttpMethod.Get,
    params = {},
    headers = {},
    body = null,
    withCredentials = true
  }: AppHttpRequest): Observable<any> {
    return this.httpClient.request<AppHttpResponse<T>>(method, url, {
      params,
      headers,
      body,
      withCredentials
    }).pipe(
      map(response => response?.data || response?.results),
      catchError(error => error && new Error(error.error))
    );
  }
}
