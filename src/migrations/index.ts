import * as migration_20250512_140919 from './20250512_140919';
import * as migration_20250512_141209 from './20250512_141209';

export const migrations = [
  {
    up: migration_20250512_140919.up,
    down: migration_20250512_140919.down,
    name: '20250512_140919',
  },
  {
    up: migration_20250512_141209.up,
    down: migration_20250512_141209.down,
    name: '20250512_141209'
  },
];
