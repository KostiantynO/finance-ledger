export type EntityId = string;
export type Ids = EntityId[];

export type Dictionary<T> = Record<EntityId, T>;

export type EntityState<T> = {
  ids: Ids;
  entities: Dictionary<T>;
};
