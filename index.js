var path = require('path');

function p(nb) { 
	return path.join(__dirname, 'notebooks', nb)
}

module.exports = {
  valid: [
    p("multiples.ipynb"),
    p("ANSITest.ipynb"),
    p("CSSReference.ipynb"),
    p("ConfinedOutput.ipynb"),
    p("Functional.ipynb"),
    p("TestOutputCallbacks.ipynb"),
  ],
  invalid: [
    p("invalid.ipynb"),
    p("test2.ipynb"),
    p("test3.ipynb"),
    p("test4.ipynb"),
    p("test4plus.ipynb"),
  ],
}
