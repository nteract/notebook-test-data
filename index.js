var path = require('path');

function p(nb) { 
  return path.join(__dirname, 'notebooks', nb)
}

module.exports = {
  valid: {
    v4: {
      multiples: p("multiples.ipynb"),
      ansi: p("ANSITest.ipynb"),
      css: p("CSSReference.ipynb"),
      confinedOutput: p("ConfinedOutput.ipynb"),
      functional: p("Functional.ipynb"),
      outputCallbacks: p("TestOutputCallbacks.ipynb"),
      v4notebook: p("test4.ipynb"),
      v4notebookplus: p("test4plus.ipynb")
    },
    v3: {
      v3notebook: p("test3.ipynb")
    },
    v2: {
      v2notebook: p("test2.ipynb")
    }
  },
  invalid: {
    v4: {
      p("invalid.ipynb"),
    }
  },
}
