import { Pipe, PipeTransform } from '@angular/core';

import { INttbalance } from '../../models/nttbalance';

@Pipe({
  name: 'nttbalanceFilter'
})
export class NttbalancePipe implements PipeTransform {

  transform(value: INttbalance[], filterBy: string): INttbalance[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((balances: INttbalance) =>
    balances.IntitulCompte.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
}

}
