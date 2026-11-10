export interface Box {
  x: number; y: number; z: number
  w: number; h: number; d: number
  type: string; biome: string
}
export interface Spawn { x: number; y: number; z: number }
export interface Poi { name: string; x: number; z: number }
export interface MapData { floor: { w: number; d: number }; boxes: Box[]; spawns: Spawn[]; pois: Poi[]; seed: number }

export const STATIC_MAP_ID = 'linktown-baseplate-1200'
export const STATIC_MAP_SEED = 3049
export const MAP_SIZE = 1200

export function groundHeight(_x: number, _z: number, _seed?: number): number { return 0 }

export function getStaticMap(): MapData {
  const half = MAP_SIZE / 2
  const boxes: Box[] = [
    { x: 0, y: 20, z: -half, w: MAP_SIZE, h: 40, d: 2, type: 'shieldwall', biome: 'neutral' },
    { x: 0, y: 20, z: half, w: MAP_SIZE, h: 40, d: 2, type: 'shieldwall', biome: 'neutral' },
    { x: -half, y: 20, z: 0, w: 2, h: 40, d: MAP_SIZE, type: 'shieldwall', biome: 'neutral' },
    { x: half, y: 20, z: 0, w: 2, h: 40, d: MAP_SIZE, type: 'shieldwall', biome: 'neutral' },
  ]
  const spawns: Spawn[] = []
  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2
    const radius = 70 + (i % 2) * 25
    spawns.push({ x: Math.cos(angle) * radius, y: 1.6, z: Math.sin(angle) * radius })
  }
  const pois: Poi[] = [
    { name: 'Center', x: 0, z: 0 },
    { name: 'North Field', x: 0, z: -450 },
    { name: 'South Field', x: 0, z: 450 },
    { name: 'East Field', x: 450, z: 0 },
    { name: 'West Field', x: -450, z: 0 },
  ]
  return { floor: { w: MAP_SIZE, d: MAP_SIZE }, boxes, spawns, pois, seed: STATIC_MAP_SEED }
}

export function generateMap(_seed?: number): MapData { return getStaticMap() }
