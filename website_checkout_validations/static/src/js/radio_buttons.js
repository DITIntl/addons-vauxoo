(function(){
  'use strict';

  var website = openerp.website;
  website.snippet.animationRegistry.checkoutValidations = website.snippet.Animation.extend({
    selector : ".partner_type",
    start: function(){
      this.redrow();
    },
    stop: function(){
      this.clean();
    },

    redrow: function(debug){
      this.clean(debug);
      this.build(debug);
    },

    clean:function(debug){
      this.$target.empty();
    },

    build: function(debug){
      // THIS CODE HIDES OR SHOWS THE ZIP IF PANAMA SELECTED OR NOT
       $("select[name=country_id]").click(function(){
         console.log($("select[name=country_id]").find(":selected").attr("id"));
         if ($("select[name=country_id]").find(":selected").attr("id") == 'PA')
         {
          console.log("True");
          $("div[id=zip]").hide();
         }
         else
         {
          console.log("False");
          $("div[id=zip]").show();
         }
       });
       // THIS CODE HIDES THE COMPANY INPUT IF PARTNER IS PARTICULAR
       if ($("#partner_type_p").is(':checked'))
        {
          $("div[id=company]").hide();
        }
       $(".partner_type").click(function(){
         var selectedBox = this.id;
         if (this.value == 'particular')
         {
          $("div[id=company]").hide();
         }
         else
         {
          $("div[id=company]").show();
         }

       });

    },

  })

})();
