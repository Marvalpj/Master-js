import { Injectable } from "@angular/core"
import {HttpClient , HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Project} from '../models/project'
import {Global} from './globals'

@Injectable()
export class ProjectService{
    public url:string
    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url
    }


    testService(){
        return 'probando el servicio de angular'
    }

    saveProject( project : Project ): Observable<any>{
        let params = JSON.stringify(project)
        //establecer cabeceras, como se van a enviar la info
        // los parametros del HttpHeaders deben ir escritos perfectamente 'Content-Type' , 'application/json' asi
        let headers = new HttpHeaders().set('Content-Type' , 'application/json')

        return this._http.post(this.url+'save-project' , params , {headers : headers})
    }

}