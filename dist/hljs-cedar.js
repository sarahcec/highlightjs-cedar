(() => {
  // src/cedar.js
  function cedar_default(hljs) {
    const GLOBALS = {
      match: /\b(?:ip|decimal)(?=\()/,
      scope: "built_in"
    };
    const VARIABLES = {
      match: /\b(?<!\.)(principal|action|resource|context)\b/,
      scope: "variable"
    };
    const TEMPLATES = {
      match: /(?:\?resource|\?principal)\b/,
      scope: "template-variable"
    };
    const POLICY = {
      match: /\b(?<!\.)(permit|forbid|when|unless)\b/,
      scope: "keyword"
    };
    const KEYWORDS = {
      keyword: ["if", "then", "else"],
      literal: ["true", "false"]
    };
    const PUNCTUATION = {
      match: /(?:,|;|\.|\[|\]|\(|\)|{|})/,
      scope: "punctuation"
    };
    const OPERATORS = {
      begin: /(?<!\w)/.source + "(" + [
        "&&",
        "\\|\\|",
        "==",
        "!=",
        ">=",
        "<=",
        ">",
        "<",
        "\\+",
        "-",
        "\\*",
        "in",
        "like",
        "has"
      ].join("|") + ")" + /(?!\w)/.source,
      scope: "operator",
      relevance: 0
    };
    const INTEGER = {
      scope: "number",
      begin: `0|-?[1-9](_?[0-9])*`,
      relevance: 0
    };
    const METHODS = {
      scope: "title.function.invoke",
      begin: `(?=.)(contains|containsAll|containsAny)(?=\\()`,
      relevance: 0
    };
    const DECIMAL_METHODS = {
      scope: "title.function.invoke",
      begin: `(?=.)(lessThan|lessThanOrEqual|greaterThan|greaterThanOrEqual)(?=\\()`,
      relevance: 0
    };
    const IP_METHODS = {
      scope: "title.function.invoke",
      begin: `(?=.)(isIpv4|isIpv6|isLoopback|isMulticast|isInRange)(?=\\()`,
      relevance: 0
    };
    return {
      name: "Cedar",
      aliases: ["cedar"],
      case_insensitive: false,
      keywords: KEYWORDS,
      contains: [
        hljs.QUOTE_STRING_MODE,
        hljs.C_LINE_COMMENT_MODE,
        GLOBALS,
        VARIABLES,
        POLICY,
        INTEGER,
        PUNCTUATION,
        OPERATORS,
        METHODS,
        DECIMAL_METHODS,
        IP_METHODS,
        TEMPLATES
      ]
    };
  }

  // src/webbundle.js
  window.hljsCedar = cedar_default;
})();
//! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
//! SPDX-License-Identifier: Apache-2.0
