let MarkdownIt = require("markdown-it");
let mylib = require("./index");

let md;
describe('main', function () {
  beforeEach(() => {
    md = new MarkdownIt();
    md.use(mylib)
  });
  test("hi", () => {
    let parsed = md.render("$hello$");
    expect(parsed).toBe(1)
  })
});
