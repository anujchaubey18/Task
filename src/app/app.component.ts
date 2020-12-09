import { Component } from '@angular/core';
import { from } from 'rxjs';
import { AllapiserviceService } from '../app/allapiservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northcaptask';
  allDataofpopulation:any=[]

  constructor(public AllapiserviceService: AllapiserviceService) { }
  ngOnInit() {
    this.AllapiserviceService.allData().subscribe((res) => {
      this.allDataofpopulation=res['district_meta_data']
    })
  }
}
