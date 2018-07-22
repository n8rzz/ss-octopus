import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person, SearchService } from '../shared';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
    public query: string = null;
    public searchResults: Array<Person> = [];
    public sub: Subscription = null;

    constructor(
        private searchService: SearchService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['term']) {
                this.query = decodeURIComponent(params['term']);
            }
        });
    }

    ngOnDestroy() {
        if (!this.sub) {
            return;
        }

        this.sub.unsubscribe()
    }
}
