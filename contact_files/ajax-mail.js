var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function ($) {
  "use strict";

  var form = '.contact-form';
  var invalidCls = 'is-invalid';
  var $email = '[name="email"]';
  var $validation = '[name="name"],[name="email"],[name="message"]';// Must be use (,) without any space
  var formMessages = $('.form-messages');
  
  function sendContact() {
    var formData = $(form).serialize();
    var valid;
    valid = validateContact();
    if (valid) {
      jQuery.ajax({
        url: $(form).attr('action'),
        data: formData,
        type: "POST"
      })
      .done(function (response){
        // Make sure that the formMessages div has the 'success' class.
        formMessages.removeClass('error');
        formMessages.addClass('success');
        // Set the message text.
        formMessages.text(response);
        // Clear the form.
        $(form + ' input:not([type="submit"]),'+ form+' textarea').val('');
      })
      .fail(function(data){
        // Make sure that the formMessages div has the 'error' class.
        formMessages.removeClass('success');
        formMessages.addClass('error');
        // Set the message text.
        if (data.responseText !== '') {
          formMessages.text(data.responseText);
        } else {
          formMessages.text('Oops! An error occured and your message could not be sent.');
        }
      });
    };
  };

  function validateContact() {
    var valid = true;
    var formInput;

    function unvalid($validation) {
      $validation = $validation.split(',')
      for (var i = 0; i < $validation.length; i++) {
        formInput = form + ' ' + $validation[i];
        if (!$(formInput).val()) {
          $(formInput).addClass(invalidCls)
          valid = false;
        } else {
          $(formInput).removeClass(invalidCls)
          valid = true;
        };
      };
    };
    unvalid($validation);
    
    if (!$($email).val() || !$($email).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
      $($email).addClass(invalidCls)
      valid = false;
    } else {
      $($email).removeClass(invalidCls)
      valid = true;
    };

    
    return valid;
  };



  $(form).on('submit', function (element) {
    element.preventDefault();
    sendContact();
  });

})(jQuery);

}
/*
     FILE ARCHIVED ON 22:11:04 Jun 03, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:36:09 Oct 04, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.513
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.009
  esindex: 0.01
  cdx.remote: 5.33
  LoadShardBlock: 135.317 (3)
  PetaboxLoader3.datanode: 61.454 (4)
  PetaboxLoader3.resolve: 89.716 (2)
  load_resource: 83.623
*/