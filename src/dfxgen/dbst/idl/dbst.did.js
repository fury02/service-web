export const idlFactory = ({ IDL }) => {
  const definite_canister_settings = IDL.Record({
    'freezing_threshold' : IDL.Nat,
    'controllers' : IDL.Vec(IDL.Principal),
    'memory_allocation' : IDL.Nat,
    'compute_allocation' : IDL.Nat,
  });
  const canister_status_type = IDL.Record({
    'status' : IDL.Variant({
      'stopped' : IDL.Null,
      'stopping' : IDL.Null,
      'running' : IDL.Null,
    }),
    'memory_size' : IDL.Nat,
    'cycles' : IDL.Nat,
    'settings' : definite_canister_settings,
    'module_hash' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const DB_TABLES_SERVICE = IDL.Service({
    'canister_status' : IDL.Func([IDL.Text], [canister_status_type], []),
    'clear_column' : IDL.Func([IDL.Text, IDL.Text], [IDL.Bool], []),
    'clear_table' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'credit' : IDL.Func([], [], []),
    'cycles_available' : IDL.Func([], [IDL.Nat], []),
    'cycles_balance' : IDL.Func([], [IDL.Nat], []),
    'cycles_savings' : IDL.Func([], [IDL.Nat], []),
    'delete_column' : IDL.Func([IDL.Text, IDL.Text], [IDL.Bool], []),
    'delete_table' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'delete_table_cell_value' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text],
        [IDL.Bool],
        [],
      ),
    'delete_table_entity' : IDL.Func([IDL.Text, IDL.Text], [IDL.Bool], []),
    'deposit' : IDL.Func([], [], []),
    'exist_table' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'find_table_cell' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text],
        [IDL.Text],
        [],
      ),
    'find_table_value' : IDL.Func([IDL.Text, IDL.Text], [IDL.Text], []),
    'get_rts_memory_size' : IDL.Func([], [IDL.Nat], []),
    'get_table_entityes' : IDL.Func([IDL.Text], [IDL.Vec(IDL.Text)], []),
    'get_table_entityes_json' : IDL.Func([IDL.Text], [IDL.Text], []),
    'get_table_keys' : IDL.Func([IDL.Text], [IDL.Vec(IDL.Text)], []),
    'get_table_keys_json' : IDL.Func([IDL.Text], [IDL.Text], []),
    'get_tables' : IDL.Func([], [IDL.Vec(IDL.Text)], []),
    'get_tables_json' : IDL.Func([], [IDL.Text], []),
    'ping' : IDL.Func([], [IDL.Text], []),
    'print_buckets' : IDL.Func([], [], []),
    'replace_value' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [IDL.Opt(IDL.Text)],
        [],
      ),
    'ui_service_canister_id' : IDL.Func([], [IDL.Text], []),
    'ui_service_compute_allocation' : IDL.Func([], [IDL.Text], []),
    'ui_service_created_tables' : IDL.Func([], [IDL.Text], []),
    'ui_service_freezing_threshold' : IDL.Func([], [IDL.Text], []),
    'ui_service_generated_buckets' : IDL.Func([], [IDL.Text], []),
    'ui_service_max_buckets' : IDL.Func([], [IDL.Text], []),
    'ui_service_memory_allocation' : IDL.Func([], [IDL.Text], []),
    'ui_service_using_memory_size' : IDL.Func([], [IDL.Text], []),
  });
  return DB_TABLES_SERVICE;
};
export const init = ({ IDL }) => { return []; };
