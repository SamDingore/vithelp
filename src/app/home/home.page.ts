import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  adminForm : FormGroup;

  constructor(private crudService: CrudService, public formBuilder : FormBuilder) {  }
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  get errorCtrl()
{
  return this.adminForm.controls
}

  hideShowPassword() {
      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  addData()
  {
    var mobiPass = new FormData();
    mobiPass.append('phnNo',this.adminForm.value.mobileNo);
    mobiPass.append('pass',this.adminForm.value.password);
    this.crudService.addMobpass(mobiPass);
  }
  ngOnInit()
  {
    //Add user form validations
    this.adminForm = this.formBuilder.group({
      mobileNo: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }
}
