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
  const UUID = IDL.Vec(IDL.Nat8);
  const GUID = IDL.Text;
  const DB_FILES_SERVICE = IDL.Service({
    'canister_status' : IDL.Func([IDL.Text], [canister_status_type], []),
    'credit' : IDL.Func([], [], []),
    'cycles_available' : IDL.Func([], [IDL.Nat], []),
    'cycles_balance' : IDL.Func([], [IDL.Nat], []),
    'cycles_savings' : IDL.Func([], [IDL.Nat], []),
    'deposit' : IDL.Func([], [], []),
    'external_delete_file' : IDL.Func([UUID], [IDL.Bool], []),
    'external_download' : IDL.Func(
        [UUID, IDL.Nat],
        [IDL.Opt(IDL.Vec(IDL.Nat8))],
        [],
      ),
    'external_get_file_info' : IDL.Func(
        [UUID],
        [IDL.Nat, IDL.Text, IDL.Text, IDL.Nat],
        [],
      ),
    'external_set_file_info' : IDL.Func(
        [IDL.Nat, IDL.Text, IDL.Text, IDL.Nat],
        [UUID, GUID],
        [],
      ),
    'external_upload' : IDL.Func(
        [IDL.Vec(IDL.Nat8), UUID, IDL.Nat, IDL.Nat],
        [UUID],
        [],
      ),
    'external_upload_crc' : IDL.Func(
        [IDL.Vec(IDL.Nat8), UUID, IDL.Nat, IDL.Nat, IDL.Nat],
        [UUID, IDL.Bool],
        [],
      ),
    'get_real_canister_size' : IDL.Func([], [], ['oneway']),
    'get_real_canisters_size' : IDL.Func([], [], ['oneway']),
    'get_rts_memory_size' : IDL.Func([], [IDL.Nat], []),
    'guid_to_uuid' : IDL.Func([GUID], [UUID], []),
    'ping' : IDL.Func([], [IDL.Text], []),
    'print_buckets' : IDL.Func([], [], []),
    'uuid_to_guid' : IDL.Func([UUID], [GUID], []),
  });
  return DB_FILES_SERVICE;
};
export const init = ({ IDL }) => { return []; };
