<img src="https://img.shields.io/npm/v/dotenv-rs-parse?color=c95f8b"/>
<img src="https://img.shields.io/nycrc/PengBoUESTC/dotenv-rs-parse"/>

## dotenv-rs-parse

parse dotenv file by `rust`, supproted platforms: `darwin-x64`, `linux-x64-gnu`, `win32-x64-msvc`

### dotParseBase

get the vars in dot files with target `prefix`

```javascript
const env = dotenv_rs_arse.dotParseBase(envPath, 'Test')
```

### dotParse

get the vars in dot files

```javascript
const env = dotenv_rs_arse.dotParse(dotTestPath)
```

### getEnv