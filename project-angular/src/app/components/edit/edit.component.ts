import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'
import { Global } from '../../services/globals'
import { ProjectService } from '../../services/project.service'
import {UploadService} from '../../services/upload.service'

//para recoger parametros por url
import { Router , ActivatedRoute , Params} from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[
    ProjectService,
    UploadService
  ]
})
export class EditComponent implements OnInit {

  public title:string
  public project:Project
  public status:string
  public filesToUpload:Array<File>
  public url:string

  constructor(
    private _projectService:ProjectService,
    private _uploadService:UploadService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.title = 'Editar proyecto'
    this.url = Global.url
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params.id
      this.getProject(id)
    })
  }

  getProject(id){
    this._projectService.getProject(id).subscribe(
      response =>{
        this.project = response.project
        // console.log(this.project)
      },
      err =>{
        console.log(err)
      }
    )
  }

  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files
    // console.log( this.filesToUpload)
  }

  onsubmit(form){

    this._projectService.updateProject(this.project).subscribe(
      response => {
        if(response.project){
          
          if(this.filesToUpload){
            //subir img
            this._uploadService.makeFileRequest(this.url+'upload-image/'+response.project._id , [] , this.filesToUpload , 'image')
              .then((result:any)=>{
                console.log(result)
                this.project = result.projects
                console.log(this.project)
                this.status = 'succes'
              })
          }else{
            this.project = response.project
            console.log(this.project)
            this.status = 'succes'
          }
          
        }else{
          this.status = 'failed'

        }
      },
      err =>{
        console.log(err)
      }
    )
  }
  
}
