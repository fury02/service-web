import type { Principal } from '@dfinity/principal';
export interface DB_TABLES_SERVICE {
  'canister_status' : (arg_0: string) => Promise<canister_status_type>,
  'clear_column' : (arg_0: string, arg_1: string) => Promise<boolean>,
  'clear_table' : (arg_0: string) => Promise<boolean>,
  'credit' : () => Promise<undefined>,
  'cycles_available' : () => Promise<bigint>,
  'cycles_balance' : () => Promise<bigint>,
  'cycles_savings' : () => Promise<bigint>,
  'delete_column' : (arg_0: string, arg_1: string) => Promise<boolean>,
  'delete_table' : (arg_0: string) => Promise<boolean>,
  'delete_table_cell_value' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
    ) => Promise<boolean>,
  'delete_table_entity' : (arg_0: string, arg_1: string) => Promise<boolean>,
  'deposit' : () => Promise<undefined>,
  'exist_table' : (arg_0: string) => Promise<boolean>,
  'find_table_cell' : (arg_0: string, arg_1: string, arg_2: string) => Promise<
      string
    >,
  'find_table_value' : (arg_0: string, arg_1: string) => Promise<string>,
  'get_rts_memory_size' : () => Promise<bigint>,
  'get_table_entityes' : (arg_0: string) => Promise<Array<string>>,
  'get_table_entityes_json' : (arg_0: string) => Promise<string>,
  'get_table_keys' : (arg_0: string) => Promise<Array<string>>,
  'get_table_keys_json' : (arg_0: string) => Promise<string>,
  'get_tables' : () => Promise<Array<string>>,
  'get_tables_json' : () => Promise<string>,
  'ping' : () => Promise<string>,
  'print_buckets' : () => Promise<undefined>,
  'replace_value' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
      arg_3: string,
    ) => Promise<[] | [string]>,
  'ui_service_canister_id' : () => Promise<string>,
  'ui_service_compute_allocation' : () => Promise<string>,
  'ui_service_created_tables' : () => Promise<string>,
  'ui_service_freezing_threshold' : () => Promise<string>,
  'ui_service_generated_buckets' : () => Promise<string>,
  'ui_service_max_buckets' : () => Promise<string>,
  'ui_service_memory_allocation' : () => Promise<string>,
  'ui_service_using_memory_size' : () => Promise<string>,
}
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
export interface _SERVICE extends DB_TABLES_SERVICE {}
