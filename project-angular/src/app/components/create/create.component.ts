import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project'
import {ProjectService} from '../../services/project.service'
import {UploadService} from '../../services/upload.service'
import {Global} from '../../services/globals'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title:string
  public project:Project
  public status:string
  public filesToUpload:Array<File>

  constructor(
    private _projectService:ProjectService,
    private _uploadService:UploadService
  ){ 
    this.title = 'Crear proyecto'

    this.project = new Project('', '','','','',2019)

  }

  ngOnInit(): void {
  }

  onsubmit(form){
    //guardar data
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          console.log(response)
          //subir img
          this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.project._id , [] , this.filesToUpload , 'image')
          .then((result:any)=>{
            console.log(result)
            this.status = 'succes'
            form.reset()
          })
        }else{
          this.status = 'failed'
        }
      },
      err => {
        console.log(<any>err)
        this.status = 'failed'
      }
    )
  }

  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files
    console.log( this.filesToUpload)
  }

}
