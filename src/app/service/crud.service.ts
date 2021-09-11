import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  mobiPass: any;
  constructor(public http: HttpClient) { }

  public addMobpass(mobiPass)
  {
    return this.http.post('http://covithelp.16mb.com/WebPortalPhp/mobile_pass.php',mobiPass).subscribe((res: Response)=>{
    });
  }

  public addMob(mobiPass)
  {
    return this.http.post('http://covithelp.16mb.com/WebPortalPhp/mobile.php',mobiPass).subscribe((res: Response)=>{
    });
  }

  public enterprisedata(enterData)
  {
    return this.http.post('http://covithelp.16mb.com/WebPortalPhp/enterprise.php',enterData).subscribe((res: Response)=>{
    });
  }

  public fethMobpass(mobiPass)
  {
    return this.http.post('http://covithelp.16mb.com/WebPortalPhp/fetch.php',mobiPass).subscribe((res: Response)=>{
    });
  }

}
