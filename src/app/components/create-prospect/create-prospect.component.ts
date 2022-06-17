import {Component, OnInit} from '@angular/core';
import {Prospect, ProspectObject} from "../../models/prospect.model";
import {ProspectService} from "../../services/prospect.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {riskLevel} from 'src/app/utils/variables';

@Component({
  selector: 'app-create-prospect',
  templateUrl: './create-prospect.component.html',
  styleUrls: ['./create-prospect.component.scss']
})
export class CreateProspectComponent implements OnInit {

  prospect: Prospect = new ProspectObject()
  editing = false

  constructor(private service: ProspectService,
              private route: ActivatedRoute,
              private location: Location,
              protected router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as any;

    if (id) {
      this.editing = true

      this.service.getProspect(id)
        .subscribe((prospect: Prospect) => this.prospect = prospect,
          (error) => this.location.back());
    }
  }

  onSubmit() {
    console.log(this.prospect);

    if (this.prospect.id && this.editing) {

      this.service.updateProspect(this.prospect)
        .subscribe((prospect: Prospect) => {
          console.log(prospect);
          this.prospect = prospect;
        })

    } else {

      this.service.createProspect(this.prospect)
        .subscribe((prospect: Prospect) => {
          console.log(prospect);
          this.prospect = prospect;
          this.router.navigate(['/edit/', prospect.id]);
        });

    }
  }

  deleteProspect() {
    if (!this.prospect.id) return;

    this.service.deleteProspect(this.prospect.id)
      .subscribe(() => this.router.navigate(['/prospects']))
  }

  riskLevel(score: any): string {
    return riskLevel(score)
  }

}
