import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  status! : boolean

  constructor(private loader : LoaderService) { }

  ngOnInit(): void {
    this.loader.showLoader.subscribe(
      res =>{
        this.status = res['show'];
      }
    )
  }

}
