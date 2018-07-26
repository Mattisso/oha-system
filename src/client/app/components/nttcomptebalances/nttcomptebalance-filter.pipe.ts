import { Pipe, PipeTransform } from '@angular/core';
import { INttcomptebalance} from '../../models/nttcomptebalance';

@Pipe({
  name: 'comptebalancesFilter'
})
export class NttcomptebalanceFilterPipe implements PipeTransform {
  transform(value: INttcomptebalance[], filterBy: string): INttcomptebalance[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((comptebalances: INttcomptebalance) =>
    comptebalances._otableauposte_id.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
}

}
