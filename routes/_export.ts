// Re-imports route modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.

import * as $0 from "./index.ts";
import * as $1 from "./users/index.ts";
import * as $2 from "./todos/index.ts";
import * as $3 from "./users/$uid.ts";
import * as $4 from "./todos/$id.ts";

export default {
  "/": $0,
  "/users/index": $1,
  "/todos/index": $2,
  "/users/:uid": $3,
  "/todos/:id": $4,
};
