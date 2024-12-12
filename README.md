# Repro for issue 8054

## Versions

firebase-tools: v13.28.0<br>
node: v22.12.0<br>
functions:

```
├── firebase-admin@12.7.0
├── firebase-functions-test@3.3.0
└── firebase-functions@6.1.1
```

## Steps to reproduce

1. Install dependencies
   - Run `cd functions`
   - Run `npm i`
   - Run `cd ../`
2. Run `firebase deploy --project PROJECT_ID`
   - Successful deployment
   - Note:
     - if you don't wanna risk deployment, try using `--dry-run`
     - Run `firebase deploy --project PROJECT_ID --dry-run`

```
$ firebase deploy --dry-run
(node:37185) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)

=== Deploying to 'PROJECT_ID'...

i  deploying functions
i  functions: preparing codebase default for deployment
i  functions: ensuring required API cloudfunctions.googleapis.com is enabled...
i  functions: ensuring required API cloudbuild.googleapis.com is enabled...
i  artifactregistry: ensuring required API artifactregistry.googleapis.com is enabled...
✔  functions: required API cloudbuild.googleapis.com is enabled
✔  artifactregistry: required API artifactregistry.googleapis.com is enabled
✔  functions: required API cloudfunctions.googleapis.com is enabled
⚠  functions: package.json indicates an outdated version of firebase-functions. Please upgrade using npm install --save firebase-functions@latest in your functions directory.
i  functions: Loading and analyzing source code for codebase default to determine what to deploy
Serving at port 8411

Error [ERR_REQUIRE_ASYNC_MODULE]: require() cannot be used on an ESM graph with top-level await. Use import() instead. To see where the top-level await comes from, use --experimental-print-required-tla.
    at ModuleJobSync.runSync (node:internal/modules/esm/module_job:392:13)
    at ModuleLoader.importSyncForRequire (node:internal/modules/esm/loader:329:47)
    at loadESMFromCJS (node:internal/modules/cjs/loader:1414:24)
    at Module._compile (node:internal/modules/cjs/loader:1547:5)
    at Object..js (node:internal/modules/cjs/loader:1677:16)
    at Module.load (node:internal/modules/cjs/loader:1318:32)
    at Function._load (node:internal/modules/cjs/loader:1128:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:219:24)
    at Module.require (node:internal/modules/cjs/loader:1340:12) {
  code: 'ERR_REQUIRE_ASYNC_MODULE'
}


Error: Functions codebase could not be analyzed successfully. It may have a syntax or runtime error
```

## Notes

Downgrading to node `v22.11.0` works around the issue. Running `firebase deploy --dry-run` results in:

```
$ firebase deploy --dry-run
(node:37719) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)

=== Deploying to 'PROJECT_ID-testproj'...

i  deploying functions
i  functions: preparing codebase default for deployment
i  functions: ensuring required API cloudfunctions.googleapis.com is enabled...
i  functions: ensuring required API cloudbuild.googleapis.com is enabled...
i  artifactregistry: ensuring required API artifactregistry.googleapis.com is enabled...
✔  functions: required API cloudbuild.googleapis.com is enabled
✔  functions: required API cloudfunctions.googleapis.com is enabled
✔  artifactregistry: required API artifactregistry.googleapis.com is enabled
⚠  functions: package.json indicates an outdated version of firebase-functions. Please upgrade using npm install --save firebase-functions@latest in your functions directory.
i  functions: Loading and analyzing source code for codebase default to determine what to deploy
Serving at port 8089

i  extensions: ensuring required API firebaseextensions.googleapis.com is enabled...
✔  extensions: required API firebaseextensions.googleapis.com is enabled
i  functions: preparing ./functions directory for uploading...
i  functions: packaged /Users/PATH/firebase-tools/issues/8054/functions (64.59 KB) for uploading
i  functions: ensuring required API run.googleapis.com is enabled...
i  functions: ensuring required API eventarc.googleapis.com is enabled...
i  functions: ensuring required API pubsub.googleapis.com is enabled...
i  functions: ensuring required API storage.googleapis.com is enabled...
✔  functions: required API run.googleapis.com is enabled
✔  functions: required API eventarc.googleapis.com is enabled
✔  functions: required API pubsub.googleapis.com is enabled
✔  functions: required API storage.googleapis.com is enabled
i  functions: generating the service identity for pubsub.googleapis.com...
i  functions: generating the service identity for eventarc.googleapis.com...

✔  Dry run complete!
```
