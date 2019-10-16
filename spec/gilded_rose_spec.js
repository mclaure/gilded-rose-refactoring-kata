var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  describe("When 'Aged Brie' item gets older", function(){  
    it("Should increase Quality in 2", function() {
      var gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);      
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(2);
    });
  });

  describe("When 'Aged Brie' and Quality 50 item", function(){  
    it("Should not increase Quality", function() {
      var gildedRose = new Shop([ new Item("Aged Brie", 0, 50) ]);      
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    });
  });  

  describe("When 'Backstage passes to a TAFKAL80ETC concert' and SellIn less than 6 and 11", function(){  
    it("Should increase Quality three times", function() {
      var gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 1, 0) ]);      
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(3);
    });
  });  

  describe("When 'Backstage passes to a TAFKAL80ETC concert' and SellIn less than 6 and 11 and quality 50", function(){  
    it("Should not change Quality", function() {
      var gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50) ]);      
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    });
  });    

  describe("When 'Backstage passes to a TAFKAL80ETC concert' and SellIn greater than 6 and less than 11 and quality 50", function(){  
    it("Should not change Quality", function() {
      var gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 7, 50) ]);      
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    });
  });

  describe("When 'Backstage passes to a TAFKAL80ETC concert' and SellIn greater than 6 and less than 11", function(){  
    it("Should increase Quality two times", function() {
      var gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 7, 0) ]);      
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(2);
    });
  });

  describe("When new product with quality grater than 0", function(){  
    it("Should increase Quality in 1", function() {
      var gildedRose = new Shop([ new Item("Non special Item", 1, 1) ]);      
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  }); 
  
  describe("When 'Sulfuras, Hand of Ragnaros' produc", function(){  
    it("Should not increase/decrease Quality", function() {
      var gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 1, 1) ]);      
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(1);
    });
  }); 

  describe("When 'Sulfuras, Hand of Ragnaros' produc", function(){  
    it("Should not change SellIn", function() {
      var gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 1, 1) ]);      
      var items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(1);
    });
  }); 

  describe("When 'non-special' produc with negative sellIn and positive quality", function(){  
    it("Should not change SellIn", function() {
      var gildedRose = new Shop([ new Item("non-special", -1, 1) ]);      
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  });

  describe("When 'non-special' produc with negative sellIn and quality 50", function(){  
    it("Should decrease quality", function() {
      var gildedRose = new Shop([ new Item("non-special", -1, 50) ]);      
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(48);
    });
  });  

  describe("When 'Aged Brie' produc with negative sellIn and positive quality", function(){  
    it("Should increase quality twice", function() {
      var gildedRose = new Shop([ new Item("Aged Brie", -1, 1) ]);      
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(3);
    });
  });     

  /***********************  AFTER REFACTOR  ***********************/

  describe("When 'Conjured' produc and quality > 1", function(){  
    it("Should increase quality twice", function() {
      var gildedRose = new Shop([ new Item("Conjured", 1, 2) ]);      
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  });   

  describe("When 'Conjured' produc and quality > 0", function(){  
    it("Should increase quality twice", function() {
      var gildedRose = new Shop([ new Item("Conjured", 1, 1) ]);      
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  }); 

  describe("When 'Conjured' produc and sellIn < 0 quality > 1", function(){  
    it("Should increase quality twice", function() {
      var gildedRose = new Shop([ new Item("Conjured", -1, 2) ]);      
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  });

  describe("When 'Conjured' produc and sellIn < 0 quality > 0", function(){  
    it("Should increase quality twice", function() {
      var gildedRose = new Shop([ new Item("Conjured", -1, 1) ]);      
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  });   

});
