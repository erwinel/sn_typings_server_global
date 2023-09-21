# sn_typings_server_global

TypeScript definitions for globally-scoped ServiceNow server-side development.

See [Using Class.create with TypeScript](./dist/$$class.md) for API class creation.

## Usage

Until the first version is published, you can reference these types using git submodules.

Example:

```powershell
git submodule add https://github.com/erwinel/sn_typings_server_global.git types/snc
git commit -m "Added global-scoped SNC typings"
```

To update submodules, use `submodule update --init --recursive`.

## Dev Setup

This is intended to be developed using VS Code.

Run `npm install` from the root folder of this repository to install dependencies.
