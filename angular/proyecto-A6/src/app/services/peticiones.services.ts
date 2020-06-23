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

    addUser(user):Observable<any>{
        //enviar datos en un json string
        let parans = JSON.stringify(user)
        //indicar cabeceras
        let headers = new HttpHeaders().set('content-type', 'application/json')

        return this._http.post(this.url + '/api/users', parans, {headers : headers })
    }

}