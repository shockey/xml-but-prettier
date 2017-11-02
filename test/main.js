const beautify = require('../src/index');


describe("xml-beautifier", () => {
  it("should indent tags", () => {
    const ori = "<div><span></span></div>"
    const expected =
`<div>
    <span>
    </span>
</div>`

    expect(beautify(ori)).toEqual(expected)
  })

  it("should indent self closing tags correctly", () => {
    const ori = `<div><span><img src="" /></span></div>`
    const expected =
`<div>
    <span>
        <img src="" />
    </span>
</div>`

    expect(beautify(ori)).toEqual(expected)
  })

  it("should put text nodes on a new line", () => {
    const ori = '<div><span>foo bar</span></div>'
    const expected =
`<div>
    <span>
        foo bar
    </span>
</div>`

    expect(beautify(ori)).toEqual(expected)
  })

  it('should handle nodes containing "/"', () => {
    const ori = '<div><a href="/">foo bar</a></div>'
    const expected =
`<div>
    <a href="/">
        foo bar
    </a>
</div>`

    expect(beautify(ori)).toEqual(expected)
  })

  describe("configuration options", () => {
    it("should use custom indentation characters specified in `indentor`", () => {
      const ori = "<div><span></span></div>"
      const expected = "<div>\n\t<span>\n\t</span>\n</div>"

      expect(beautify(ori, {
        indentor: "\t"
      })).toEqual(expected)
    })

    it("should compress text nodes onto the same line if `textNodesOnSameLine` is truthy", () => {
      const ori = '<div><span>foo bar</span></div>'
      const expected =
`<div>
    <span>foo bar</span>
</div>`

      expect(beautify(ori, {
        textNodesOnSameLine: true
      })).toEqual(expected)
    })

  })
})
