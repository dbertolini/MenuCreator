/*****************************************************************/
/* INFO:  This is a QlikView object extension that allows you to */
/*        add a left animated menu on the screen. You can manage */
/*        the menu items by a JSON.                              */
/*                                                               */
/* AUTHOR: Diego Bertolini                                       */
/*	  info@diegobertolini.com                                */
/*        http://www.diegobertolini.com                          */
/*                                                               */
/* DATE:  22/08/2016                                             */
/*****************************************************************/

function MenuCreator_Init() {
    Qva.AddExtension("MenuCreator", function () {
    	// Validate if the element exists to avoid duplication
    	var existsElement =  document.getElementById("existsElement");
    	if(typeof(existsElement) == 'undefined' || existsElement == null)
    	{
    		// Validate if the extension has a previous load
    		if(typeof(existsEvents) == 'undefined' || existsEvents == null)
    		{
			    // Style
			    var estilo = document.createElement('style');
			    estilo.innerHTML = ".glyphicon-chevron-left:before{content:'◄';cursor: pointer;}.glyphicon-chevron-right:before{content:'►';cursor: pointer;}.list-group{padding-left:0;margin-bottom:20px;box-sizing:border-box}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd;box-sizing:border-box}.list-group-item:first-child{border-top-left-radius:4px;border-top-right-radius:4px;box-sizing:border-box}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px;box-sizing:border-box}a.list-group-item{color:#555;text-decoration:none;font-family: 'Arial Narrow';}a.list-group-item .list-group-item-heading{font-family: 'Arial Narrow';color:#333;box-sizing:border-box}a.list-group-item:focus,a.list-group-item:hover{color:#555;text-decoration:none;background-color:#f5f5f5;box-sizing:border-box}.list-group-item.disabled,.list-group-item.disabled:focus,.list-group-item.disabled:hover{color:#777;cursor:not-allowed;background-color:#eee;box-sizing:border-box}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading{color:inherit;box-sizing:border-box}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text{color:#777;box-sizing:border-box}.list-group-item.active,.list-group-item.active:focus,.list-group-item.active:hover{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7;box-sizing:border-box}.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading>small{color:inherit;box-sizing:border-box}.list-group-item.active .list-group-item-text,.list-group-item.active:focus .list-group-item-text,.list-group-item.active:hover .list-group-item-text{color:#c7ddef;box-sizing:border-box}.list-group-item-success{color:#3c763d;background-color:#dff0d8;box-sizing:border-box}a.list-group-item-success{color:#3c763d;box-sizing:border-box}a.list-group-item-success .list-group-item-heading{color:inherit;box-sizing:border-box}a.list-group-item-success:focus,a.list-group-item-success:hover{color:#3c763d;background-color:#d0e9c6;box-sizing:border-box}a.list-group-item-success.active,a.list-group-item-success.active:focus,a.list-group-item-success.active:hover{color:#fff;background-color:#3c763d;border-color:#3c763d;box-sizing:border-box}.list-group-item-info{color:#31708f;background-color:#d9edf7;box-sizing:border-box}a.list-group-item-info{color:#31708f;box-sizing:border-box}a.list-group-item-info .list-group-item-heading{color:inherit;box-sizing:border-box}a.list-group-item-info:focus,a.list-group-item-info:hover{color:#31708f;background-color:#c4e3f3;box-sizing:border-box}a.list-group-item-info.active,a.list-group-item-info.active:focus,a.list-group-item-info.active:hover{color:#fff;background-color:#31708f;border-color:#31708f;box-sizing:border-box}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3;box-sizing:border-box}a.list-group-item-warning{color:#8a6d3b;box-sizing:border-box}a.list-group-item-warning .list-group-item-heading{color:inherit;box-sizing:border-box}a.list-group-item-warning:focus,a.list-group-item-warning:hover{color:#8a6d3b;background-color:#faf2cc;box-sizing:border-box}a.list-group-item-warning.active,a.list-group-item-warning.active:focus,a.list-group-item-warning.active:hover{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b;box-sizing:border-box}.list-group-item-danger{color:#a94442;background-color:#f2dede;box-sizing:border-box}a.list-group-item-danger{color:#a94442;box-sizing:border-box}a.list-group-item-danger .list-group-item-heading{color:inherit;box-sizing:border-box}a.list-group-item-danger:focus,a.list-group-item-danger:hover{color:#a94442;background-color:#ebcccc;box-sizing:border-box}a.list-group-item-danger.active,a.list-group-item-danger.active:focus,a.list-group-item-danger.active:hover{color:#fff;background-color:#a94442;border-color:#a94442;box-sizing:border-box}.list-group-item-heading{margin-top:0;margin-bottom:5px;box-sizing:border-box}.list-group-item-text{margin-bottom:0;line-height:1.3;box-sizing:border-box}.list-group-separator{margin-top:-1px;position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#CCC;font-weight:700;border:1px solid #ddd;box-sizing:border-box;font-family: 'Arial Narrow'}.sidebar{z-index:999999;position:absolute;top:25px;bottom:0px;padding:0;width:auto;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);-webkit-box-shadow:0 6px 12px rgba(0,0,0,.175);box-shadow:0 6px 12px rgba(0,0,0,.175);width:300px}.toggler{z-index: 999999;background-color: #fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);width:20px;height:48px;position:absolute;top:45%;cursor:pointer}.sidebar-left > .toggler{border-top-right-radius:8px;border-bottom-right-radius:8px;border-left:1px solid #fff;-webkit-box-shadow:1px 0 8px rgba(0,0,0,.175);box-shadow:1px 0 8px rgba(0,0,0,.175);right:-20px}.sidebar-left > .toggler > span{margin:15px 2px}.c-mask > .c-menu{position:fixed}.c-mask{z-index:999998;position: fixed;top:0;left:0;width:0;height:0;background-color:#000;opacity:0;-webkit-transition:opacity .3s,width 0 .3s,height 0 .3s;transition:opacity .3s,width 0 .3s,height 0 .3s}.is-active{position: fixed;z-index: 999998;width:100%;height:100%;opacity:.3;-webkit-transition:opacity .3s;transition:opacity .3s}";
			    document.body.appendChild(estilo);
			}
			// Menu functionality
		    (function ( $ ) {
		    	$.fn.BootSideMenu = function( options ) {
			        var newCode, side;
			        newCode = "";
			        var settings = $.extend({
			            side:"left",
			            autoClose:true
			        }, options );
			        autoClose = settings.autoClose;
			        this.addClass("sidebar");
			        this.addClass("sidebar-left");
			        newCode = "<div>";
			        newCode += "    <div data-side='left'>"+ this.html()+" </div>";
			        newCode += "</div>";
			        newCode += "<div class='toggler'>";
			        newCode += "    <span class='glyphicon-chevron-right'>&nbsp;</span>";
			        newCode += "    <span class='glyphicon-chevron-left'>&nbsp;</span>";
			        newCode += "</div>";
			        this.html(newCode);
			        if(autoClose){
			            $(this).find(".toggler").trigger("click");
			        }
			    };

			    // Validate if the extension has a previous load
			    if(typeof(existsEvents) == 'undefined' || existsEvents == null)
    			{
				    // Click on mask
				    $(document).on('click','.c-mask', function(){
				        var mask = $(this);
				        var container = mask.parent();
				        var status = container.attr('data-status');

				        if(!status){
				            status = "opened";
				        }
				        this.mask = document.querySelector('#c-mask');
				        if(status!="opened")
				            this.mask.classList.add('is-active');   
				        else
				            this.mask.classList.remove('is-active'); 
				        
				        //Close menu
				        var toggler = $('.toggler');
				        var containerToogler = toggler.parent();
				        var listaClassiToggler = $(containerToogler[0]).attr('class').split(/\s+/);
				        var sideToggler = getSide(listaClassiToggler);
				        var containerWidth = containerToogler.width();
				        var statusToggler = containerToogler.attr('data-status');
				        if(!statusToggler){
				            statusToggler = "opened";
				        }
				        this.mask = document.querySelector('#c-mask');
				        if(statusToggler!="opened")
				            this.mask.classList.add('is-active');   
				        else
				            this.mask.classList.remove('is-active'); 
				        doAnimation(containerToogler, containerWidth, sideToggler, statusToggler);

				    });

				    // Click on any item
				    $(document).on('click', '.list-group-item', function(){
				        $('.list-group-item').each(function(){
				            $(this).removeClass('active');
				        });
				        $(this).addClass('active');
				    });

				    // Click on toggler
				    $(document).on('click','.toggler', function(){
				        var toggler = $(this);
				        var container = toggler.parent();
				        var listaClassi = $(container[0]).attr('class').split(/\s+/);
				        var side = getSide(listaClassi);
				        var containerWidth = container.width();
				        var status = container.attr('data-status');

				        if(!status){
				            status = "opened";
				        }
				        this.mask = document.querySelector('#c-mask');
				        if(status!="opened")
				            this.mask.classList.add('is-active');   
				        else
				            this.mask.classList.remove('is-active'); 
				        doAnimation(container, containerWidth, side, status);
				    });
				    // Menu at left
					function getSide(listaClassi){
					    return "left";
					}

					// Animate
					function doAnimation(container, containerWidth, sidebarSide, sidebarStatus){
					    var toggler = container.children()[1];
					    if(sidebarStatus=="opened"){
					        if(sidebarSide=="left"){
					            container.animate({
					                left:-(containerWidth+2)
					            });
					            toggleArrow(toggler, "left");
					        }else if(sidebarSide=="right"){
					            container.animate({
					                right:- (containerWidth +2)
					            });
					            toggleArrow(toggler, "right");
					        }
					        container.attr('data-status', 'closed');
					    }else{
					        if(sidebarSide=="left"){
					            container.animate({
					                left:0
					            });
					            toggleArrow(toggler, "right");
					        }else if(sidebarSide=="right"){
					            container.animate({
					                right:0
					            });
					            toggleArrow(toggler, "left");
					        }
					        container.attr('data-status', 'opened');
					    }
					}

					// Change toggle arrow
					function toggleArrow(toggler, side){
					    if(side=="left"){
					        $(toggler).children(".glyphicon-chevron-right").css('display', 'block');
					        $(toggler).children(".glyphicon-chevron-left").css('display', 'none');
					    }else if(side=="right"){
					        $(toggler).children(".glyphicon-chevron-left").css('display', 'block');
					        $(toggler).children(".glyphicon-chevron-right").css('display', 'none');
					    }
					}

					function onWindowResize() {
					     $(".toggler").each( function(){
					        var container = $(this).parent();
					        var listaClassi = $(container[0]).attr('class').split(/\s+/); 
					        var side = getSide(listaClassi);
					        
					        var status = container.attr('data-status');
					        var containerWidth = container.width();
					        if (status==="closed") {
					            if(side=="left"){
					                container.css("left",-(containerWidth+2))
					            }else if(side=="right"){
					                container.css("right",-(containerWidth+2))
					            }
					        }
					    })
					}

					window.addEventListener('resize', onWindowResize, false);
				}
			}( jQuery ));

			// Generate list group
		    var divMenuLeft = document.createElement("div");
		    divMenuLeft.setAttribute("id", "menu-left");

		    var divListGroup = document.createElement("div");
		    divListGroup.setAttribute("class", "list-group");
		    
		    // Load JSON with Data
		    var obj = JSON.parse(this.Layout.Text0.text);
		    var cantMenu=Object.keys(obj.menu).length;
		    var cantSeparator;
			var cantContent;
			var iMenu=0;
			var iContent=0;

			// Generate list item from Data
			for (iMenu=0;iMenu<cantMenu;iMenu++) {
				cantContent=Object.keys(obj.menu[iMenu].content).length;

				// Separators
				if(obj.menu[iMenu].separator!="")
				{
					var a1 = document.createElement("p");
				    a1.setAttribute("class", "list-group-separator");
				    var txtA1 = document.createTextNode(obj.menu[iMenu].separator); 

				    a1.appendChild(txtA1);
			    	divListGroup.appendChild(a1);
				}

				// Item
				for (iContent=0;iContent<cantContent;iContent++) {
					var a1 = document.createElement("a");
				    a1.setAttribute("target", "_blank");
				    a1.setAttribute("class", "list-group-item");
				    a1.setAttribute("href", obj.menu[iMenu].content[iContent].url);
				    var txtA1 = document.createTextNode(obj.menu[iMenu].content[iContent].title); 
				    a1.appendChild(txtA1);
			    	divListGroup.appendChild(a1);
			    }
			}
		    
		    divMenuLeft.appendChild(divListGroup);
			document.body.appendChild(divMenuLeft);
		    var divCMask = document.createElement("div");
		    divCMask.setAttribute("id", "c-mask");
		    divCMask.setAttribute("class", "c-mask");
		    document.body.appendChild(divCMask);	         

		    $(document).ready(function(){
		      $('#menu-left').BootSideMenu();
		    });

		    // Hidden input to validate if exists for the next time
		    var hiddenInput = document.createElement("input");
		    hiddenInput.setAttribute("type", "hidden");
		    hiddenInput.setAttribute("id", "existsElement");
		    document.body.appendChild(hiddenInput);	   

		    $("li[rel*='DocumentSH']").click(function() {
				$("div[id='menu-left']").remove();
				$("div[id='c-mask']").remove();
				$("input[id='existsElement']").remove();

				// Hidden input to validate if exists for the next time
			    var hiddenInput = document.createElement("input");
			    hiddenInput.setAttribute("type", "hidden");
			    hiddenInput.setAttribute("id", "existsEvents");
			    document.body.appendChild(hiddenInput);	 
			});
		}
    });
}

// Execute object extension
MenuCreator_Init();