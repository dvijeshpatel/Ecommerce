let modelCategories = (function(){

  let modelCategories = {
    electronis: {
      catId: 0,
      label: "Electronics",
      subCategories: {
        mobiles: {
          subCatId: 0,
          label: "Mobiles"
        },
        laptops: {
          subCatId: 1,
          label: "Laptops"
        },
        cameras: {
          subCatId: 2,
          label: "Cameras"
        }
      }
    },
    Appliances: {
      catId: 1,
      label: "Appliances",
      subCategories: {
        televisions: {
          subCatId: 0,
          label: "Televisions"
        },
        washingMachines: {
          subCatId: 1,
          label: "Washing Machines"
        },
        refrigarators: {
          subCatId: 2,
          label: "Refrigarators"
        },
      }
    },


    Furniture: {
      catId: 2,
      label: "Furnitures",
      subCategories: {
        beds: {
          subCatId: 0,
          label: "Beds"
        },
        sofas: {
          subCatId: 1,
          label: "Sofas"
        },
        chairs: {
          subCatId: 2,
          label: "Chairs"
        },
      }
    },




  };
  let modelNavigation = {
            /*data is category */
    init: function() {
      if (!localStorage.categories) {
        localStorage.categories = JSON.stringify(modelCategories);
      }
    },
    add: function(categoryName, categoryObject) {
      let data = JSON.parse(localStorage.categories);
      data[categoryName] = categoryObject;
      localStorage.categories = JSON.stringify(data);
    },
    getAllCategories: function() {
      return JSON.parse(localStorage.categories);
    }
  };


return modelCategories;
})();