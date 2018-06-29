import { Injectable } from '@angular/core';
import { Malls } from './malls';
import { Observable, of, throwError } from 'rxjs';        // need to import additional 'of'
import { catchError, map, tap } from 'rxjs/operators';    // need to handle http errors
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MallsService {

    malls: Malls[];

// method to handle errors
    private handleError(error: HttpErrorResponse) {

                        // client-side or network error
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred: ', error.error.message);
                        // additional action to handle error goes here:

      } else {          // backend error
        console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
                        // additional action to handle error goes here:
      }

      return throwError ('Something bad happened!');
    }

    // method to retrieve array of objects (Malls)
    //Fetching data from the API
    
  getMalls(mall?:Malls): Observable<Malls[]> {
    // return of(this.malls);
    if(mall){
      return this.http.get<Malls[]>('http://api.jadeto.com/malls.php?api_key=qwertyuiop&name='+mall.name).pipe( // pipe method, contains catchError
      catchError(this.handleError));
    }
    return this.http.get<Malls[]>('http://api.jadeto.com/malls.php?api_key=qwertyuiop').pipe( // pipe method, contains catchError
      catchError(this.handleError) // handleError defined above
    );
  }
   
  constructor(
    private http: HttpClient
  ) { }
}
