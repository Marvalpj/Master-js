import {Injectable} from '@angular/core'
import {HttpClientModule, HttpHeaders, HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable()
export class PeticionesService{
    public url:string
    
    constructor(
        public _http:HttpClient
    ){
        this.url = "https://reqres.in"
    }

    getUser(userId):Observable<any>{
        // console.log(this.url + '/api/users/2')
        return this._http.get(this.url + '/api/users/'+userId)
    }
}