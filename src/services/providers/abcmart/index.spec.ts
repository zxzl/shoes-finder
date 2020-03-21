import { getAbcmartShoes, parseProductOptionInline } from "./index";

describe("ABC mart", () => {
  it("should fetch shoes", async () => {
    const result = await getAbcmartShoes(250);
    expect(Array.isArray(result)).toBeTruthy();
    expect(result[0]).toHaveProperty("PRDT_NAME");
    expect(result[0]).toHaveProperty("PRDT_DC_PRICE");
  });

  describe("parseProductOptionInline", () => {
    it("should parse inventory string", () => {
      const input =
        "245,0,10001/250,0,10001/255,0,10001/265,0,10001/270,0,10001/275,0,10001/280,0,10001/285,0,10001/290,0,10001/";
      const results = parseProductOptionInline(input);
      expect(results).toHaveLength(9);
    });
  });
});
