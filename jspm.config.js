SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "plugin-worker/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
      "systemjs-builder": "npm:systemjs-builder@0.15.23"
    },
    "packages": {
      "npm:systemjs-builder@0.15.23": {
        "map": {
          "babel-core": "npm:babel-core@6.10.4",
          "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.9.0",
          "es6-template-strings": "npm:es6-template-strings@2.0.0",
          "glob": "npm:glob@7.0.5",
          "data-uri-to-buffer": "npm:data-uri-to-buffer@0.0.4",
          "source-map": "npm:source-map@0.5.6",
          "mkdirp": "npm:mkdirp@0.5.1",
          "rollup": "npm:rollup@0.31.2",
          "uglify-js": "npm:uglify-js@2.6.4",
          "traceur": "npm:traceur@0.0.105",
          "systemjs": "npm:systemjs@0.19.31",
          "bluebird": "npm:bluebird@3.4.1"
        }
      },
      "npm:babel-core@6.10.4": {
        "map": {
          "source-map": "npm:source-map@0.5.6",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-helpers": "npm:babel-helpers@6.8.0",
          "babel-generator": "npm:babel-generator@6.10.2",
          "babel-types": "npm:babel-types@6.10.2",
          "convert-source-map": "npm:convert-source-map@1.2.0",
          "babel-traverse": "npm:babel-traverse@6.10.4",
          "babel-register": "npm:babel-register@6.9.0",
          "debug": "npm:debug@2.2.0",
          "json5": "npm:json5@0.4.0",
          "babylon": "npm:babylon@6.8.1",
          "slash": "npm:slash@1.0.0",
          "path-exists": "npm:path-exists@1.0.0",
          "private": "npm:private@0.1.6",
          "minimatch": "npm:minimatch@3.0.2",
          "path-is-absolute": "npm:path-is-absolute@1.0.0",
          "shebang-regex": "npm:shebang-regex@1.0.0",
          "lodash": "npm:lodash@4.13.1",
          "babel-code-frame": "npm:babel-code-frame@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-messages": "npm:babel-messages@6.8.0"
        }
      },
      "npm:uglify-js@2.6.4": {
        "map": {
          "source-map": "npm:source-map@0.5.6",
          "async": "npm:async@0.2.10",
          "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
          "yargs": "npm:yargs@3.10.0"
        }
      },
      "npm:traceur@0.0.105": {
        "map": {
          "glob": "npm:glob@5.0.15",
          "source-map-support": "npm:source-map-support@0.2.10",
          "rsvp": "npm:rsvp@3.2.1",
          "semver": "npm:semver@4.3.6",
          "commander": "npm:commander@2.9.0"
        }
      },
      "npm:babel-plugin-transform-es2015-modules-systemjs@6.9.0": {
        "map": {
          "babel-template": "npm:babel-template@6.9.0",
          "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:glob@7.0.5": {
        "map": {
          "minimatch": "npm:minimatch@3.0.2",
          "path-is-absolute": "npm:path-is-absolute@1.0.0",
          "inflight": "npm:inflight@1.0.5",
          "fs.realpath": "npm:fs.realpath@1.0.0",
          "inherits": "npm:inherits@2.0.1",
          "once": "npm:once@1.3.3"
        }
      },
      "npm:es6-template-strings@2.0.0": {
        "map": {
          "esniff": "npm:esniff@1.0.0",
          "es5-ext": "npm:es5-ext@0.10.11"
        }
      },
      "npm:mkdirp@0.5.1": {
        "map": {
          "minimist": "npm:minimist@0.0.8"
        }
      },
      "npm:rollup@0.31.2": {
        "map": {
          "source-map-support": "npm:source-map-support@0.4.0"
        }
      },
      "npm:systemjs@0.19.31": {
        "map": {
          "when": "npm:when@3.7.7"
        }
      },
      "npm:glob@5.0.15": {
        "map": {
          "inflight": "npm:inflight@1.0.5",
          "inherits": "npm:inherits@2.0.1",
          "minimatch": "npm:minimatch@3.0.2",
          "once": "npm:once@1.3.3",
          "path-is-absolute": "npm:path-is-absolute@1.0.0"
        }
      },
      "npm:babel-types@6.10.2": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-traverse": "npm:babel-traverse@6.10.4",
          "lodash": "npm:lodash@4.13.1",
          "to-fast-properties": "npm:to-fast-properties@1.0.2",
          "esutils": "npm:esutils@2.0.2"
        }
      },
      "npm:babel-template@6.9.0": {
        "map": {
          "babylon": "npm:babylon@6.8.1",
          "babel-traverse": "npm:babel-traverse@6.10.4",
          "babel-types": "npm:babel-types@6.10.2",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "lodash": "npm:lodash@4.13.1"
        }
      },
      "npm:babel-helpers@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-template": "npm:babel-template@6.9.0"
        }
      },
      "npm:babylon@6.8.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:babel-generator@6.10.2": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.2",
          "lodash": "npm:lodash@4.13.1",
          "source-map": "npm:source-map@0.5.6",
          "detect-indent": "npm:detect-indent@3.0.1",
          "babel-messages": "npm:babel-messages@6.8.0"
        }
      },
      "npm:babel-traverse@6.10.4": {
        "map": {
          "babel-code-frame": "npm:babel-code-frame@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.2",
          "babylon": "npm:babylon@6.8.1",
          "debug": "npm:debug@2.2.0",
          "lodash": "npm:lodash@4.13.1",
          "invariant": "npm:invariant@2.2.1",
          "globals": "npm:globals@8.18.0",
          "babel-messages": "npm:babel-messages@6.8.0"
        }
      },
      "npm:babel-register@6.9.0": {
        "map": {
          "babel-core": "npm:babel-core@6.10.4",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "lodash": "npm:lodash@4.13.1",
          "mkdirp": "npm:mkdirp@0.5.1",
          "path-exists": "npm:path-exists@1.0.0",
          "source-map-support": "npm:source-map-support@0.2.10",
          "home-or-tmp": "npm:home-or-tmp@1.0.0",
          "core-js": "npm:core-js@2.4.0"
        }
      },
      "npm:inflight@1.0.5": {
        "map": {
          "once": "npm:once@1.3.3",
          "wrappy": "npm:wrappy@1.0.2"
        }
      },
      "npm:esniff@1.0.0": {
        "map": {
          "es5-ext": "npm:es5-ext@0.10.11",
          "d": "npm:d@0.1.1"
        }
      },
      "npm:babel-helper-hoist-variables@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "babel-types": "npm:babel-types@6.10.2"
        }
      },
      "npm:source-map-support@0.4.0": {
        "map": {
          "source-map": "npm:source-map@0.1.32"
        }
      },
      "npm:source-map-support@0.2.10": {
        "map": {
          "source-map": "npm:source-map@0.1.32"
        }
      },
      "npm:once@1.3.3": {
        "map": {
          "wrappy": "npm:wrappy@1.0.2"
        }
      },
      "npm:minimatch@3.0.2": {
        "map": {
          "brace-expansion": "npm:brace-expansion@1.1.5"
        }
      },
      "npm:es5-ext@0.10.11": {
        "map": {
          "es6-symbol": "npm:es6-symbol@3.0.2",
          "es6-iterator": "npm:es6-iterator@2.0.0"
        }
      },
      "npm:babel-code-frame@6.8.0": {
        "map": {
          "esutils": "npm:esutils@2.0.2",
          "babel-runtime": "npm:babel-runtime@6.9.2",
          "chalk": "npm:chalk@1.1.3",
          "js-tokens": "npm:js-tokens@1.0.3"
        }
      },
      "npm:yargs@3.10.0": {
        "map": {
          "decamelize": "npm:decamelize@1.2.0",
          "camelcase": "npm:camelcase@1.2.1",
          "cliui": "npm:cliui@2.1.0",
          "window-size": "npm:window-size@0.1.0"
        }
      },
      "npm:debug@2.2.0": {
        "map": {
          "ms": "npm:ms@0.7.1"
        }
      },
      "npm:babel-runtime@6.9.2": {
        "map": {
          "core-js": "npm:core-js@2.4.0",
          "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
        }
      },
      "npm:detect-indent@3.0.1": {
        "map": {
          "minimist": "npm:minimist@1.2.0",
          "repeating": "npm:repeating@1.1.3",
          "get-stdin": "npm:get-stdin@4.0.1"
        }
      },
      "npm:d@0.1.1": {
        "map": {
          "es5-ext": "npm:es5-ext@0.10.11"
        }
      },
      "npm:es6-iterator@2.0.0": {
        "map": {
          "d": "npm:d@0.1.1",
          "es5-ext": "npm:es5-ext@0.10.11",
          "es6-symbol": "npm:es6-symbol@3.1.0"
        }
      },
      "npm:es6-symbol@3.0.2": {
        "map": {
          "d": "npm:d@0.1.1",
          "es5-ext": "npm:es5-ext@0.10.11"
        }
      },
      "npm:source-map@0.1.32": {
        "map": {
          "amdefine": "npm:amdefine@1.0.0"
        }
      },
      "npm:babel-messages@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.2"
        }
      },
      "npm:invariant@2.2.1": {
        "map": {
          "loose-envify": "npm:loose-envify@1.2.0"
        }
      },
      "npm:brace-expansion@1.1.5": {
        "map": {
          "concat-map": "npm:concat-map@0.0.1",
          "balanced-match": "npm:balanced-match@0.4.1"
        }
      },
      "npm:home-or-tmp@1.0.0": {
        "map": {
          "os-tmpdir": "npm:os-tmpdir@1.0.1",
          "user-home": "npm:user-home@1.1.1"
        }
      },
      "npm:cliui@2.1.0": {
        "map": {
          "right-align": "npm:right-align@0.1.3",
          "center-align": "npm:center-align@0.1.3",
          "wordwrap": "npm:wordwrap@0.0.2"
        }
      },
      "npm:es6-symbol@3.1.0": {
        "map": {
          "d": "npm:d@0.1.1",
          "es5-ext": "npm:es5-ext@0.10.11"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "supports-color": "npm:supports-color@2.0.0",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "has-ansi": "npm:has-ansi@2.0.0",
          "strip-ansi": "npm:strip-ansi@3.0.1"
        }
      },
      "npm:loose-envify@1.2.0": {
        "map": {
          "js-tokens": "npm:js-tokens@1.0.3"
        }
      },
      "npm:repeating@1.1.3": {
        "map": {
          "is-finite": "npm:is-finite@1.0.1"
        }
      },
      "npm:right-align@0.1.3": {
        "map": {
          "align-text": "npm:align-text@0.1.4"
        }
      },
      "npm:center-align@0.1.3": {
        "map": {
          "align-text": "npm:align-text@0.1.4",
          "lazy-cache": "npm:lazy-cache@1.0.4"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:is-finite@1.0.1": {
        "map": {
          "number-is-nan": "npm:number-is-nan@1.0.0"
        }
      },
      "npm:align-text@0.1.4": {
        "map": {
          "longest": "npm:longest@1.0.1",
          "kind-of": "npm:kind-of@3.0.3",
          "repeat-string": "npm:repeat-string@1.5.4"
        }
      },
      "npm:commander@2.9.0": {
        "map": {
          "graceful-readlink": "npm:graceful-readlink@1.0.1"
        }
      },
      "npm:kind-of@3.0.3": {
        "map": {
          "is-buffer": "npm:is-buffer@1.1.3"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "plugin-worker": {
      "main": "plugin-worker.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "randombytes": "npm:randombytes@2.0.3",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "pbkdf2": "npm:pbkdf2@3.0.4"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.6",
        "base64-js": "npm:base64-js@1.1.2"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.0"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.1",
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.4",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.4",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.4",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "npm:stream-http@2.3.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.4"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "inherits": "npm:inherits@2.0.1",
        "hash.js": "npm:hash.js@1.0.3",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "asn1.js": "npm:asn1.js@4.6.2"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:asn1.js@4.6.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    }
  }
});
