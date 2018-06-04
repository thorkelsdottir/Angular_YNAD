import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterArrayPipe implements PipeTransform {
   transform(value: any, args?: any): any {
       //value is what you get out of the search
       //arg is what is put in to the input
       // the if statement checks if there is nothing in the search input
       if(!args){
           // and if so than shows all values(users)
           return value;
       }
       // and if else than shows only the ones that match
       else{
           args = args;
       }
       // returns the matches
       return value.filter(items=>{
           return items.firstname.startsWith(args)==true;
       })
   }
}