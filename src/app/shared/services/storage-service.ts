import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  getValueInLocalStorageByItem(item: any): string | null {
    return localStorage.getItem(item);
  }

  setValueToLocalStorageByItem(item: any, value: any): void {
    localStorage.setItem(item, value);
  }

  removeValueInLocalStorageByItem(item: any): void {
    localStorage.removeItem(item);
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  getValueInSessionStorageByItem(item: any): string | null {
    return sessionStorage.getItem(item);
  }

  setValueToSessionStorageByItem(item: any, value: any): void {
    sessionStorage.setItem(item, value);
  }

  removeValueInSessionStorageByItem(item: any): void {
    sessionStorage.removeItem(item);
  }

  clearSessionStorage(): void {
    sessionStorage.clear();
  }
}
