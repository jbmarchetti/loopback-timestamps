# loopback-denormalize
Add `created_at` and `updated_at` fields in loopback mongodb models

## Install
1. Add `"loopback-timestamps": "latest"` to your `package.json` file then run `npm install` OR run `npm install loopback-timestamps`
2. Set the module in your Entity.js

**Sample: Product Entity.**

     require('loopback-timestamps')(Product);

## Info

**Methods added to your entity**

1. Before Save observer who automatically update or create `created_at` and `updated_at` fields

Enjoy ;)
