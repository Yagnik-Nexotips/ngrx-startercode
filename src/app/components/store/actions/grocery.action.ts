import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { Grocery } from '../../../../models/grocery.model';

// export const initGroceries = createAction('[Grocery] Load Groceries')
// export const componentGroceries = createAction('[Grocery] Load Groceries success')

export const groceryAction = createActionGroup({
  source: 'Grocery Api',
  events: {
    'Load groceries': emptyProps(),
    'Load groceries Success': props<{ payload: Grocery[] }>(),
    'Load groceries Failure': emptyProps(),
  },
});
