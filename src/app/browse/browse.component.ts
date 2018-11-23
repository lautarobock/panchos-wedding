import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit, OnDestroy {

    text: string;
    interval;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;

    constructor(
        private dataService: DataService
    ) { }

    async ngOnInit() {
        const config: any = await this.dataService.config();
        const date = new Date(config.wedding);
        this.interval = setInterval(() => {
            let seconds = Math.round((date.getTime() - new Date().getTime()) / 1000);
            let minutes = Math.round(seconds / 60);
            seconds = Math.round(seconds % 60);
            let hours = Math.round(minutes / 60);
            minutes =  Math.round(minutes % 60);
            const days = Math.round(hours / 24);
            hours = Math.round(hours % 24);
            this.days = `${days} dias`;
            this.hours = `${hours} horas`;
            this.minutes = `${minutes} minutos`;
            this.seconds = `${seconds} segundos`;
            // this.text = `${days} dias ${hours} horas ${minutes} minutos y ${seconds} segundos`;
        }, 1000);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }
}
