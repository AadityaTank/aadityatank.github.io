// Global variables
panel_array = [];

$(function () {init();});

// Init function
function init() {
  // create panel array
  init_panel_array();

  // Show default panel : About me
  show_panel('about-me-info-pane');

  // add click event listner to the nav bar elements
  $("nav > ul > li").click(function () {
    var panel_id = $(this).attr("data-panel-id");
    show_panel(panel_id);
  });

  //
  $("li").hover(
    function(){
      $(this).children().addClass("hover");
    },
    function(){
      $(this).children().removeClass("hover");
    }
  );
}

// This function creates a panel array
function init_panel_array () {
  $("nav > ul > li").each(function () {
    panel_array.push($(this).attr('data-panel-id'));
  });
}

// This function shows the given panel and hides every remaining panel
function show_panel ( panel_id ) {
  panel_array.forEach(function( id ){
    if ( panel_id == id ) {
      $("#"+id).addClass("show-panel");
    }
    else {
      $("#"+id).removeClass("show-panel");
    }
  })
}