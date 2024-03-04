import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);

export function formatAgo(date, lang = 'en_US') {
    console.log(date, lang)
    return format(date, lang);
}