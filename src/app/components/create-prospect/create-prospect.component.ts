import {Component, OnInit} from '@angular/core';
import {Prospect, ProspectObject} from "../../models/prospect.model";
import {ProspectService} from "../../services/prospect.service";

@Component({
  selector: 'app-create-prospect',
  templateUrl: './create-prospect.component.html',
  styleUrls: ['./create-prospect.component.scss']
})
export class CreateProspectComponent implements OnInit {

  prospect: Prospect = new ProspectObject()

  constructor(private service: ProspectService) {
  }

  ngOnInit(): void {
  }

  createProspect() {
    this.service.createProspect(this.prospect)
      .subscribe((prospect: Prospect) => {
        console.log(prospect);
      });
  }

  updateProspect() {
    this.service.updateProspect(this.prospect)
      .subscribe((prospect: Prospect) => {
        console.log(prospect);
      });
  }

  deleteProspect() {
    if (!this.prospect.id) return;

    this.service.deleteProspect(this.prospect.id)
      .subscribe(() => {
        console.log('Deleted');
      })
  }

}
