import { HttpClient } from '@angular/common/http';

const API = 'http://localhost:3000'

export class PhotoService{
    constructor(private http: HttpClient){}

       listFromUser(userName: string){

        return this.http
        .get<object[]>('http://localhost:3000/flavio/photos')
    }
}