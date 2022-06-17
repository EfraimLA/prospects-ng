import {Component, OnInit} from '@angular/core';
import {ProspectService} from "../../services/prospect.service";
import {Prospect} from "../../models/prospect.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-prospects',
  templateUrl: './prospects.component.html',
  styleUrls: ['./prospects.component.scss']
})
export class ProspectsComponent implements OnInit {

  prospects: Prospect[] = [];

  constructor(private service: ProspectService,
              protected router: Router) {
  }

  ngOnInit(): void {
    this.service.getProspects()
      .subscribe((prospects: Prospect[]) => {
        console.log(prospects);
        return this.prospects = prospects;
      });
  }

}
