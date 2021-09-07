import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  mobiPass: any;
  constructor(public http: HttpClient) { }

  public addMobpass(mobiPass)
  {
    return this.http.post('http://covithelp.16mb.com/mobile_pass.php',mobiPass).subscribe((res: Response)=>{
    });
  }

  public addMob(mobiPass)
  {
    return this.http.post('http://covithelp.16mb.com/mobile.php',mobiPass).subscribe((res: Response)=>{
    });
  }
}
