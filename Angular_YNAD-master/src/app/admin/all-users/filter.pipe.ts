import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterArrayPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        //checks if there is nothing in the search input. If that is true: 
        if(!args){
            //show all the values
            return value;
        }
        //else get the matches
        else{
            args = args;
        } 
        //and compare the first names and show them
        return value.filter(items=>{
            return items.firstname.startsWith(args)==true;
        })
    }
}