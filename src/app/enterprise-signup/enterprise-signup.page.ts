import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
@Component({
  selector: 'app-enterprise-signup',
  templateUrl: './enterprise-signup.page.html',
  styleUrls: ['./enterprise-signup.page.scss'],
})
export class EnterpriseSignupPage implements OnInit {

  constructor(private crudService : CrudService,) { }

  ngOnInit() {
  }

}
