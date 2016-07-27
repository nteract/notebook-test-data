var path = require('path');

function p(nb) {
  return path.join(__dirname, 'notebooks', nb)
}

module.exports = {
  valid: {
    v4.0: {
      multiples: p("4.0/multiples.ipynb"),
      ansi: p("4.0/ANSITest.ipynb"),
      css: p("4.0/CSSReference.ipynb"),
      confinedOutput: p("4.0/ConfinedOutput.ipynb"),
      functional: p("4.0/Functional.ipynb"),
      outputCallbacks: p("4.0/TestOutputCallbacks.ipynb"),
      v4notebook: p("4.0/test4.ipynb"),
      v4notebookplus: p("4.0/test4plus.ipynb")
    },
    v4.1: {
      multiples: p("4.1/multiples.ipynb"),
      ansi: p("4.1/ANSITest.ipynb"),
      css: p("4.1/CSSReference.ipynb"),
      confinedOutput: p("4.1/ConfinedOutput.ipynb"),
      functional: p("4.1/Functional.ipynb"),
      outputCallbacks: p("4.1/TestOutputCallbacks.ipynb"),
      v4notebook: p("4.1/test4.ipynb"),
    },
    v3: {
      v3notebook: p("test3.ipynb")
    },
    v2: {
      v2notebook: p("test2.ipynb")
    }
  },
  invalid: {
    v4: p("4.0/invalid.ipynb"),
  },
}
