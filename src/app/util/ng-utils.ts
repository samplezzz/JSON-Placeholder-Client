import { TrackByFunction } from '@angular/core';

type ObjectWithIdentity = { id: number | string };

type TrackByIdFunction<T extends ObjectWithIdentity> = TrackByFunction<T>;

export const trackById: <
  T extends ObjectWithIdentity
>() => TrackByIdFunction<T> = () => (_index, object) => object.id;
