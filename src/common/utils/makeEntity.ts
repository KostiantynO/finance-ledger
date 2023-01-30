import type { EntityState } from '@types';

const init = Object.freeze({ ids: [], entities: {} });

export const makeEntity = <T>(arr: T[]): EntityState<T> =>
  arr.reduce<EntityState<T>>(({ ids, entities }, item, i) => {
    const id = `${i}`;

    const objOrStr = typeof item === 'object' ? { id, ...item } : item;

    return {
      ids: [...ids, id],
      entities: { ...entities, [id]: objOrStr },
    };
  }, init);

export const makeEntityFromKey = <T>(
  arr: T[],
  selectId: keyof T
): EntityState<T> =>
  arr.reduce<EntityState<T>>(({ ids, entities }, item) => {
    const id = item[selectId];

    if (typeof id !== 'string') {
      throw new Error('id is not a string ');
    }

    return {
      ids: [...ids, id],
      entities: { ...entities, [id]: { id, ...item } },
    };
  }, init);
