import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app-component.tpl.html'
})

export class AppComponent {
    title = 'Tour of Heroes';
    heroes = [];
    
    addHero(newHero:string) {
        if (newHero) {
            this.heroes.push(newHero);
        }        
    }
}