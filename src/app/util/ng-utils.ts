import { TrackByFunction } from '@angular/core';

export type ObjectWithIdentity = { id: number | string };

export type TrackByIdFunction<T extends ObjectWithIdentity> =
  TrackByFunction<T>;

export const trackById: <
  T extends ObjectWithIdentity
>() => TrackByIdFunction<T> = () => (_index, object) => object.id;
