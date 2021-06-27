import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'dateAgo',
    pure: true
})

export class DateAgoPipe implements PipeTransform {

    transform(value: any): any {
        if (value) {
            
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };

            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            else if (seconds > 29 && seconds < intervals.minute)
                return seconds + 'seconds ago'
            else if (seconds > intervals.minute && seconds < intervals.hour)
                return Math.floor(seconds / intervals.minute) === 1 ? Math.floor(seconds / intervals.minute) + ' min ago' : Math.floor(seconds / intervals.minute) + ' mins ago'
            else if (seconds > intervals.hour && seconds < intervals.day)
                return Math.floor(seconds / intervals.hour) === 1 ? Math.floor(seconds / intervals.hour) + ' hour ago' : Math.floor(seconds / intervals.hour) + ' hours ago'
            else if (seconds > intervals.day && seconds < intervals.week)
                return Math.floor(seconds / intervals.day) === 1 ? Math.floor(seconds / intervals.day) + ' day ago' : Math.floor(seconds / intervals.day) + ' days ago'
            else if (seconds > intervals.week && seconds < intervals.month)
                return Math.floor(seconds / intervals.week) === 1 ? Math.floor(seconds / intervals.week) + ' week ago' : Math.floor(seconds / intervals.week) + ' weeks ago'
            else if (seconds > intervals.month && seconds < intervals.year)
                return Math.floor(seconds / intervals.month) === 1 ? Math.floor(seconds / intervals.month) + ' month ago' : Math.floor(seconds / intervals.month) + ' months ago'
        }
        return value;
    }
}

