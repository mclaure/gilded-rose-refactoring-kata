var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
  describe("When 'Aged Brie' item gets older", function(){  
    it("Should increase Quality in 2", function() {
      var gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);      
      var items = gildedRose.updateQuality();
      console.log(items);
      console.log(items[0].quality);
      expect(items[0].name).toEqual("Aged Brie");
      expect(items[0].quality).toEqual(2);
    });
  });
});
