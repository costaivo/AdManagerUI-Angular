import  {Component} from 'angular2/core';

@Component({
    selector:'my-app',
    template:`<div>
                Hello
                </div>`
})
export class AppComponent{
    pageTitle:string = 'Add Manager';
    
}