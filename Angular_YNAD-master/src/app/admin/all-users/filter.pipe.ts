import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterArrayPipe implements PipeTransform {
    transform(value: any, args?: any): any {

        if(!args){
            return value;
        }
        else{
            args = args;
        } 

        return value.filter(items=>{
            return items.firstname.startsWith(args)==true;
        })
    }
}