import type { Principal } from '@dfinity/principal';
export interface DB_FILES_SERVICE {
  'canister_status' : (arg_0: string) => Promise<canister_status_type>,
  'credit' : () => Promise<undefined>,
  'cycles_available' : () => Promise<bigint>,
  'cycles_balance' : () => Promise<bigint>,
  'cycles_savings' : () => Promise<bigint>,
  'deposit' : () => Promise<undefined>,
  'external_delete_file' : (arg_0: UUID) => Promise<boolean>,
  'external_download' : (arg_0: UUID, arg_1: bigint) => Promise<
      [] | [Array<number>]
    >,
  'external_get_file_info' : (arg_0: UUID) => Promise<
      [bigint, string, string, bigint]
    >,
  'external_set_file_info' : (
      arg_0: bigint,
      arg_1: string,
      arg_2: string,
      arg_3: bigint,
    ) => Promise<[UUID, GUID]>,
  'external_upload' : (
      arg_0: Array<number>,
      arg_1: UUID,
      arg_2: bigint,
      arg_3: bigint,
    ) => Promise<UUID>,
  'external_upload_crc' : (
      arg_0: Array<number>,
      arg_1: UUID,
      arg_2: bigint,
      arg_3: bigint,
      arg_4: bigint,
    ) => Promise<[UUID, boolean]>,
  'get_real_canister_size' : () => Promise<undefined>,
  'get_real_canisters_size' : () => Promise<undefined>,
  'get_rts_memory_size' : () => Promise<bigint>,
  'guid_to_uuid' : (arg_0: GUID) => Promise<UUID>,
  'ping' : () => Promise<string>,
  'print_buckets' : () => Promise<undefined>,
  'uuid_to_guid' : (arg_0: UUID) => Promise<GUID>,
}
export type GUID = string;
export type UUID = Array<number>;
export interface canister_status_type {
  'status' : { 'stopped' : null } |
    { 'stopping' : null } |
    { 'running' : null },
  'memory_size' : bigint,
  'cycles' : bigint,
  'settings' : definite_canister_settings,
  'module_hash' : [] | [Array<number>],
}
export interface definite_canister_settings {
  'freezing_threshold' : bigint,
  'controllers' : Array<Principal>,
  'memory_allocation' : bigint,
  'compute_allocation' : bigint,
}
export interface _SERVICE extends DB_FILES_SERVICE {}
