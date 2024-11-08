﻿(function() {
    'use strict';
    
    angular
        .module('ShoppingListCheckOff')
        .controller('ToBuyController', ToBuyController);
        
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
        
        toBuy.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }
})();
