import type { EntityState } from '@types';

export const makeEntity = <T>(arr: T[]) =>
  arr.reduce<EntityState<T>>(
    ({ ids, entities }, item, i) => {
      const id = `${i}`;

      return {
        ids: [...ids, id],
        entities: { ...entities, [id]: { id, ...item } },
      };
    },
    { ids: [], entities: {} }
  );
