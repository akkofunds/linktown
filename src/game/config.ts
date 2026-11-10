// 3049 Remote Age — Canon specifications from lore.md & commit e392b58b6b4981ece32cff242cbda5a07fceb0f4
import { MAP_SIZE } from './map'

export const CFG = {
  TICK_MS: 50,
  MATCH_DURATION: 600,
  MAX_PLAYERS: 16,
  VIS_RADIUS: MAP_SIZE * 1.5,

  // ── Valorant / CS style movement ────────────────────────────────
  PLAYER_SPEED: 32,          // walk (rarely used)
  RUN_SPEED: 58,             // max ground speed (CS-ish)
  GROUND_ACCEL: 220,         // how fast you reach run speed
  GROUND_FRICTION: 9.5,      // high = crisp counter-strafe stop
  AIR_ACCEL: 85,             // Source-style air control (lower = more skill)
  AIR_FRICTION: 0,           // zero air drag
  AIR_MAX_SPEED: 280,        // soft ceiling so bhop doesn’t go infinite
  BHOP_LAND_BOOST: 1.06,     // tiny reward for clean hop
  BHOP_SPEED_SCALE: 110,     // HUD only

  CROUCH_SPEED: 0,
  PLAYER_RADIUS: 0.48,
  PLAYER_HEIGHT: 2.35,
  EYE_HEIGHT: 1.92,
  CROUCH_EYE_HEIGHT: 0.92,
  AUTO_CROUCH_MS: 5000,

  MAX_HEALTH: 500,
  REGEN_DELAY: 3000,
  REGEN_RATE: 1,
  SHOT_COST_SINGLE: 2,
  FIRE_INTERVAL_MS: 95,      // ~10.5 rps Glock-ish
  CHARGE_MAX: 4,
  SUPER_COST: 50,
  SUPER_DURATION: 10000,
  RESPAWN_DELAY: 7000,
  NANITE_CACHE_AMOUNT: 100,
  NANITE_CACHE_RADIUS: 5.0,

  JUMP_PAD_COUNT: 0,
  JUMP_PAD_LIFETIME: 28,
  JUMP_PAD_WARNING_TIME: 5,
  JUMP_PAD_RADIUS: 2.2,
  JUMP_PAD_COOLDOWN_MS: 1200,
  JUMP_PAD_LAUNCH_VY: 44,
  JUMP_PAD_MOMENTUM_BOOST: 1.5,
  PORTAL_ROLL_MS: 10000,
  PORTAL_CHANCE: 0,
  PORTAL_LIFETIME: 10,
  PORTAL_RADIUS: 2.5,
  ANCHOR_LIFETIME: 30000,
  RECALL_COST: 15,

  JUMP_SPEED: 12.8,          // ~1.6–1.7u peak (feels like CS)
  GRAVITY: 42,               // snappy landing
  SUPER_JUMP_SPEED: 44,
  SUPER_JUMP_COST: 20,
  DMG_SINGLE: 20,
  SUPER_MULT: 3,
  SHIELD_COST: 80,
  SHIELD_DURATION: 10000,
  RECONNECT_GRACE_MS: 15000,
} as const

export const CHASSIS = {
  hull: CFG.MAX_HEALTH,
  speed: CFG.PLAYER_SPEED,
  superCost: CFG.SUPER_COST,
  shieldCost: CFG.SHIELD_COST,
} as const

export type CoreId =
  | 'denja'
  | 'mednix'
  | 'tank'
  | 'anchor'
  | 'telepotu'

export interface CoreInfo {
  id: CoreId
  name: string
  maker: string
  ability: string
  cooldown: number // ms
  color: string
  badge: string
  desc: string
  lore: string
}

export const CORE_DETAILS: Record<CoreId, CoreInfo> = {
  denja: {
    id: 'denja',
    name: 'Denja',
    maker: 'Kuro Racer Syndicate',
    ability: 'Overdrive',
    cooldown: 30000,
    color: '#f97316',
    badge: '🔥',
    desc: 'Overclocks chassis mobility to 2× speed for 8s.',
    lore: 'Pit-racer governor removal burst; burns raw nanite conduits.'
  },
  mednix: {
    id: 'mednix',
    name: 'Mednix',
    maker: 'Helix Med-Corps',
    ability: 'Field Repair',
    cooldown: 20000,
    color: '#10b981',
    badge: '💊',
    desc: 'Recycles waste heat to restore 1–50 Hull immediately.',
    lore: 'Rapid field fabrication protocol from frontline orbital trauma units.'
  },
  tank: {
    id: 'tank',
    name: 'Tank',
    maker: 'Bastion Siege Foundry',
    ability: 'Bulwark',
    cooldown: 35000,
    color: '#3b82f6',
    badge: '🛡️',
    desc: 'Reinforces nanite density: 50% damage reduction for 8s.',
    lore: 'Siege barrier architecture capable of withstanding direct kinetic strikes.'
  },
  anchor: {
    id: 'anchor',
    name: 'Anchor',
    maker: 'Orbital Guard',
    ability: 'Aegis',
    cooldown: 40000,
    color: '#06b6d4',
    badge: '⚓',
    desc: 'Deploys a pre-charged cell for 3s of full immunity with 0 Hull cost.',
    lore: 'Standard military guard cell designed for breaching hot drop zones.'
  },
  telepotu: {
    id: 'telepotu',
    name: 'Telepotu',
    maker: 'Vela Relay Compact',
    ability: 'Recall Relay',
    cooldown: 30000,
    color: '#f59e0b',
    badge: '📡',
    desc: 'Drops a relay anchor with Q. Press Q again within 30s to warp back for 15 Hull.',
    lore: 'Vela breakaway-freight recall beacons, tuned for hot extractions.'
  },
}

export const CORE_IDS: CoreId[] = Object.keys(CORE_DETAILS) as CoreId[]

