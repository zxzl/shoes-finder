import axios from "axios";

const url =
  "https://abcmart.a-rt.com/display/search-word/result/list?searchPageType=category&ctgrNo=1000000246&brandNo=&gender=10000&page=1&brand=000003&brand=000050&brand=000048&shoesSize=250&chnnlNo=10001&ctgrNo=1000000246&gender=10000&ctgrLevel=2&leafCtgrYn=Y&pageColumn=4&sort=low&perPage=80&rdoProdGridModule=col4&_=1584776211235";

export const getAbcmartShoes = async (size = 250) => {
  const resp = (await axios.get(url)).data;
  const shoes = resp.result.SEARCH;
  const shoesForMe = shoes.filter(p => {
    const inventory = parseProductOptionInline(p.PRDT_OPTION_INLINE);
    return inventory.find(inventory => {
      return inventory.option.includes(String(size)) && inventory.count > 0;
    });
  });

  return shoesForMe;
};

interface IInventory {
  option: string;
  count: number;
}

export const parseProductOptionInline = (input: string): IInventory[] => {
  const results: IInventory[] = [];
  const vals = input.split(",");

  let counter = 0;
  while (counter + 1 < vals.length) {
    results.push({
      option: vals[counter],
      count: Number(vals[counter + 1])
    });
    counter = counter + 2;
  }
  return results;
};
