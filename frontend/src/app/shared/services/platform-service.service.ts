import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Platform } from 'src/app/components/admin-dash/admin-products/Platform.module';

@Injectable({providedIn: 'root'})
export class PlatformServiceService {
    constructor(private http: HttpClient) { }
    

    getPlatforms(){
        return this.http.get(`${environment.serverUrl}/getAllPlatforms`);
    }

    addPlatform(platform:Platform){
         return this.http.post(`${environment.serverUrl}/addPlatform`,platform);
    }

    deletePlatform(id:number){
        return this.http.delete(`${environment.serverUrl}/deletePlatform/${id}`);
    }

    updatePlatform(product:any){
        return this.http.put(`${environment.serverUrl}/updatePlatform/${product.id}`,product);
    }

    countPlatform(){
        return this.http.get(`${environment.serverUrl}/allPlatforms`);
    }
}