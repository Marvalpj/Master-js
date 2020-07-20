import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'
import { Global } from '../../services/globals'
import { ProjectService } from '../../services/project.service'
//para recoger parametros por url
import { Router , ActivatedRoute , Params} from '@angular/router'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  public url:string
  public project:Project
  public confirm:boolean

  constructor(
    private _projectService : ProjectService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.url = Global.url
    this.confirm = false
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
        console.log(this.project)
      },
      err =>{
        console.log(err)
      }
    )
  }

  deleteProject(id){
    this._projectService.deleteProject(id).subscribe(
      res =>{
        // console.log(res)
        if(res.project){
          this._router.navigate(['/proyectos'])
        }
      },
      err =>{
        console.log(err)
      }
    )
  }

  setConfirm(confirm){
    this.confirm = confirm
  }

}
