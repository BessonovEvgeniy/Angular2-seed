import { Component } from '@angular/core';

@Component({
    selector: 'reddit',
    styleUrls: [ './app/reddit/reddit.css' ],
    template: `
        <form class="ui large form segment">
            <h3 class="ui header">Add one link</h3>
            <div class="field">
                <label for="title">Title:</label>
                <input type="text" name="title" #newtitle>
            </div>
            <div class="field">
                <label for="title">Link:</label>
                <input type="text" name="link" #newlink>
            </div>
            <button class="ui positive right floated button" (click)="addArticle(newlink, newtitle)">Submit</button>
</form>
    `
})

export class RedditAppComponent {
    addArticle(newlink: HTMLInputElement, newtitle: HTMLInputElement){
        console.log("Our link:" + newlink.value);
        console.log("Our title:" + newtitle.value);
        return false;
    }
}