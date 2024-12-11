# Repro for issue 8054

## Versions

firebase-tools: v13.28.0<br>
node: v22.12.0<br>
functions:

```
├── firebase-admin@12.7.0
├── firebase-functions-test@3.3.0
└── firebase-functions@6.1.2
```

## Steps to reproduce

1. Install dependencies
   - Run `cd functions`
   - Run `npm i`
   - Run `cd ../`
2. Run `firebase deploy --project <PROJECT_ID>`
   - Successful deployment

```
$ firebase deploy --project PROJECT_ID
(node:62867) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
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
i  functions: Loading and analyzing source code for codebase default to determine what to deploy
Serving at port 8388

i  extensions: ensuring required API firebaseextensions.googleapis.com is enabled...
✔  extensions: required API firebaseextensions.googleapis.com is enabled
i  functions: preparing functions directory for uploading...
i  functions: packaged /Users/PATH/issues/8054/functions (61.34 KB) for uploading
i  functions: ensuring required API run.googleapis.com is enabled...
i  functions: ensuring required API eventarc.googleapis.com is enabled...
i  functions: ensuring required API pubsub.googleapis.com is enabled...
i  functions: ensuring required API storage.googleapis.com is enabled...
✔  functions: required API eventarc.googleapis.com is enabled
✔  functions: required API run.googleapis.com is enabled
✔  functions: required API pubsub.googleapis.com is enabled
✔  functions: required API storage.googleapis.com is enabled
i  functions: generating the service identity for pubsub.googleapis.com...
i  functions: generating the service identity for eventarc.googleapis.com...
✔  functions: functions folder uploaded successfully
i  functions: updating Node.js 18 (2nd Gen) function helloWorld(us-central1)...
✔  functions[helloWorld(us-central1)] Successful update operation.
Function URL (helloWorld(us-central1)): https://FUNCTION_LINK
i  functions: cleaning up build files...
⚠  functions: Unhandled error cleaning up build images. This could result in a small monthly bill if not corrected. You can attempt to delete these images by redeploying or you can delete them manually at https://console.cloud.google.com/gcr/images/PROJECT_ID/us/gcf

✔  Deploy complete!
```
