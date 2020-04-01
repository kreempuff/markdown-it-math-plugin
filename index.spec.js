let MarkdownIt = require("markdown-it");
let mylib = require("./index");

let md;
describe('main', function () {
  beforeEach(() => {
    md = new MarkdownIt();
    md.use(mylib)
  });
  test("test basic parsing", () => {
    let parsed = md.render("$hello$");
    expect(parsed).toMatchSnapshot()
  })

  test("test display math", () => {
    let parsed = md.render("$$hello$$");
    expect(parsed).toMatchSnapshot()
  })
});
