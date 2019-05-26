let dataSet = [
    [ "T10021", "Course", "ITM", "Open", "04/04/2019", "" ],
    [ "T09045", "Course", "ITM", "Assigned", "06/08/2018", "" ],
    [ "T09045", "Course", "ITM", "In Progress", "06/08/2018", "" ],
    [ "T09045", "Login", "OTS", "Closed", "06/08/2018", "06/12/2018" ],
    [ "T09045", "Network", "OTS", "Closed", "06/08/2018", "06/12/2018" ],
    [ "T09045", "Password", "OTS", "Closed", "06/08/2018", "06/12/2018" ],
    [ "T09045", "Food Quality", "Food Court", "Closed", "06/08/2018", "06/12/2018" ],
    [ "T09045", "Repair", "Housekeeping", "Closed", "06/08/2018", "06/12/2018" ],
    [ "T02033", "Repair", "Housekeeping", "Closed", "11/23/2017", "11/25/2017" ]];

let dataSetTwo =[
	["A22222","Troubler","Troubler@hawk.iit","(000) 312-4121", "Low", "Problem", "ticket.pdf", "Course feedback"],
	["A22222","User1","User1@hawk.iit","(000) 312-4121", "Medium", "Request", "ticket.pdf", "Course schedule"],
	["A22222","User2","User2@hawk.iit","(000) 312-4121", "Medium", "Request", "ticket.pdf", "Registration issue"],
	["A22222","User3","User3@hawk.iit","(000) 312-4121", "Medium", "Request", "ticket.pdf", "Login Issue"],
	["A22222","User3","User3@hawk.iit","(000) 312-4121", "Medium", "Request", "ticket.pdf", "Network not available"],
	["A22222","User3","User3@hawk.iit","(000) 312-4121", "Medium", "Request", "ticket.pdf", "Password reset problem"],
	["A22222","User3","User3@hawk.iit","(000) 312-4121", "Medium", "Request", "ticket.pdf", "Expired bread usage"],
	["A22222","User4","User4@hawk.iit","(000) 312-4121", "Medium", "Request", "ticket.pdf", "Fix AC"],
	["A22222","User5","User5@hawk.iit","(000) 312-4121", "High", "Information", "ticket.pdf", "Snow removal from walk way"]
];


// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

function hidetabs(visibleTab){
	$( "#tickets" ).hide();
	$( "#newticket" ).hide();
	$( "#quickticket" ).hide();
	$( "#help" ).hide();
	$( "#contact" ).hide();
	$( "#ticketdetail" ).hide();
	$( "#reports" ).hide();
	$( "#config" ).hide();

	
	if(visibleTab == "tickets")
	{
		
		$( "#tickets" ).show();
		populateTable();
	}

	if(visibleTab == "newticket")
	{
		$( "#newticket" ).show();
		defineCategory();
		resetNewFields();
	}

	if(visibleTab == "quickticket")
	{
		$( "#quickticket" ).show();
		resetquickfields();
	}
	
	if(visibleTab == "help")
	{
		$( "#help" ).show();
	}		

	if(visibleTab == "contact")
	{
		$( "#contact" ).show();
	}
	if (visibleTab == "ticketdetail")
	{
		$( "#ticketdetail" ).show();
	}	

	if (visibleTab == "config")
	{
		$( "#config" ).show();
	}	

	if (visibleTab == "reports")
	{
		$( "#reports" ).show();
		chartDisplay();
		chartDisplaytwo();
		chartDisplaythree();
		chartDisplayfour();
	}	
}

function chartDisplay()
{

	var chart = new CanvasJS.Chart("chartContainer", {
	theme: "light1", // "light2", "dark1", "dark2"
	animationEnabled: false, // change to true		
	title:{
		text: "Department Ticket Assignment Report"
	},
	data: [
	{
		// Change type to "bar", "area", "spline", "pie",etc, column.
		type: "column",
		dataPoints: [
			{ label: "ITM",  y: 10  },
			{ label: "OTS", y: 8  },
			{ label: "Housekeeping", y: 7  },
			{ label: "Food Court",  y: 15  },
			{ label: "Total",  y: 40  }
		]
	}
	]
});
chart.render();
}

function chartDisplaytwo()
{

	var chart = new CanvasJS.Chart("chartContainertwo", {
	theme: "light1", // "light2", "dark1", "dark2"
	animationEnabled: false, // change to true		
	title:{
		text: "Ticket Status Report"
	},
	data: [
	{
		// Change type to "bar", "area", "spline", "pie",etc, column.
		type: "pie",
		dataPoints: [
			{ label: "Open",  y: 20  },
			{ label: "Closed", y: 18  },
			{ label: "Assigned", y: 25  },
			{ label: "In Progress",  y: 15  }
		]
	}
	]
});
chart.render();
}


function chartDisplaythree()
{

	var chart = new CanvasJS.Chart("chartContainerthree", {
	theme: "light1", // "light2", "dark1", "dark2"
	animationEnabled: false, // change to true		
	title:{
		text: "Monthly Ticket Report"
	},
	data: [
	{
		// Change type to "bar", "area", "spline", "pie",etc, column.
		type: "spline",
		dataPoints: [
			{ label: "Date1",  y: 20  },
			{ label: "Date2", y: 25  },
			{ label: "Date3", y: 30  },
			{ label: "Date4",  y: 18  },
			{ label: "Date5",  y: 15  },
			{ label: "Date6",  y: 28  },
			{ label: "Date7",  y: 22  },
			{ label: "Date8",  y: 12  },
			{ label: "Date9",  y: 19  }
		]
	}
	]
});
chart.render();
}


function chartDisplayfour()
{

	var chart = new CanvasJS.Chart("chartContainerfour", {
	theme: "light1", // "light2", "dark1", "dark2"
	animationEnabled: false, // change to true		
	title:{
		text: "Priority Open Tickets"
	},
	data: [
	{
		// Change type to "bar", "area", "spline", "pie",etc, column.
		type: "bar",
		dataPoints: [
			{ label: "Critical",  y: 3  },
			{ label: "High", y: 8  },
			{ label: "Medium", y: 15  },
			{ label: "Low",  y: 30  }
		]
	}
	]
});
chart.render();
}


function populateTable()
{
	$('#tablebody').empty();
	let table = $('#tablebody');
	
	for(let i=0; i<dataSet.length; i++)
	{
		let objVal = dataSet[i];
		let row = $('<tr>');

		let objTwo = dataSetTwo[i];

		row.append('<td>'+'<a href="#" class="btn btn-info btn-sm" role="button" onClick="displayTicketDetails('+i+')">'+objVal[0]+'</a></td>');
		row.append('<td>'+objVal[1]+'</td>');
		row.append('<td>'+objVal[2]+'</td>');
		row.append('<td>'+objTwo[4]+'</td>');
		row.append('<td>'+objVal[3]+'</td>');
		row.append('<td>'+objVal[4]+'</td>');
		row.append('<td>'+objVal[5]+'</td>');
		table.append(row);
	}

}


function displayTicketDetails(index){

	//alert("Tickets :"+index);
	hidetabs("ticketdetail");

	let dataobj = dataSet[index];
	let dataobjTwo = dataSetTwo[index];

	$('#ticketnodet').val(dataobj[0]);
	$('#statusdet').val(dataobj[3]);
	$('#categorydet').val(dataobj[1]);
	$('#departmentdet').val(dataobj[2]);
	$('#classificationdet').val(dataobjTwo[5]);
	$('#prioritydet').val(dataobjTwo[4]);
	$('#comment').val(dataobjTwo[7]);
	$('#namedet').val(dataobjTwo[1]);
	$('#studentiddet').val(dataobjTwo[0]);
	$('#emaildet').val(dataobjTwo[2]);
	$('#phonedet').val(dataobjTwo[3]);
	
	$('#activitytablebodyid').empty();
	let table = $('#activitytablebodyid');
	
	let row = $('<tr>');

	row.append('<td>Ticket Created</td>');
	row.append('<td>'+dataobj[4]+'</td>');

	let row1 = $('<tr>');

	row1.append('<td>Assigned</td>');
	row1.append('<td>'+dataobj[4]+'</td>');

	let row2 = $('<tr>');

	row2.append('<td>Closed</td>');
	row2.append('<td>'+dataobj[5]+'</td>');

	table.append(row);
	table.append(row1);
	table.append(row2);


}

function mySearchFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("ticketdata");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


function sortTable() {


	let drpDown =  document.getElementById("dropdownid").value;

	let drpindex=0;

	if(drpDown == "")
	{
		return;		
	}
	else if(drpDown == "Priority")
	{
		drpindex = 3;
	}
	else if(drpDown == "status")
	{
		drpindex = 4;
	}

  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("ticketdata");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[drpindex];
      y = rows[i + 1].getElementsByTagName("TD")[drpindex];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function defineCategory()
{
	let department = $('#sel1').val();

	if(department == "")
	{
		$("#primarydiv").css("display", "");
		$("#otsid").css("display", "none");
		$("#itmid").css("display", "none");
		$("#foodid").css("display", "none");
		$("#houseid").css("display", "none");
	}
	else if(department == "OTS")
	{
		$("#primarydiv").css("display", "none");
		$("#otsid").css("display", "");
		$("#itmid").css("display", "none");
		$("#foodid").css("display", "none");
		$("#houseid").css("display", "none");		
	}

	else if(department == "Housekeeping")
	{
		$("#primarydiv").css("display", "none");
		$("#otsid").css("display", "none");
		$("#itmid").css("display", "none");
		$("#foodid").css("display", "none");
		$("#houseid").css("display", "");
	}

	else if(department == "ITM")
	{
		$("#primarydiv").css("display", "none");
		$("#otsid").css("display", "none");
		$("#itmid").css("display", "");
		$("#foodid").css("display", "none");
		$("#houseid").css("display", "none");
	}

	else if(department == "Food Court")
	{
		$("#primarydiv").css("display", "none");
		$("#otsid").css("display", "none");
		$("#itmid").css("display", "none");
		$("#foodid").css("display", "");
		$("#houseid").css("display", "none");
	}
}

$(document).ready(function() {

$('#dataFormMain').validate({ // initialize the plugin
                rules: {
                    sel1: {
                        required: true
                    },
                    sel3: {
                        required: true                        
                    },
                    classification: {
                        required: true
                    },
                    comment: {
                        required: true
                    }
                },
                messages: {
                    sel1: {
                        required: "Department is mandatory"                        
                    },
                    sel3: {
                        required: "Category is mandatory"
                    },
                    classification: {
                        required: "Classification is mandatory"
                    },
                    comment: {
                        required: "Description is mandatory"
                    }
                }
            });

			$('#prevBtn').bind("click", function() {

					$( "#tickets" ).show();
					$( "#newticket" ).hide();
					$( "#quickticket" ).hide();
					$( "#help" ).hide();
					$( "#contact" ).hide();
					$( "#ticketdetail" ).hide();


			}); //prev btn

            $('#saveBtn').bind("click", function() {

               
                if($('#dataFormMain').valid()){

                	$("#progressbtn").css("visibility","visible");
          			$("#progressbtn").css("display","");
          			$("#saveBtn").css("visibility","hidden");
          			$("#saveBtn").css("display","none");
          			$("#alertid").css("visibility","hidden");
          			$("#alertid").css("display","none");

          			setTimeout(function(){

          				let category = $('#sel3').val();
          				let dept 	= $('#sel1').val();
          				let ticketno = "T18192";
          				let status = "Open";
          				let creation = "04/28/2019";
          				let closeddate = "";
          				let classification = $('#classification').val();
          				let Priority = $('#Priority').val();
          				let Description = $('#comment').val();

          				dataSet.unshift([ticketno, category, dept, status, creation, "" ]);
          				dataSetTwo.unshift(["A22222","Troubler","Troubler@hawk.iit","(000) 312-4121", Priority, classification, "ticket.pdf", Description]);

          				$("#progressbtn").css("visibility","hidden");
          				$("#progressbtn").css("display","none");
          				$("#saveBtn").css("visibility","hidden");
          				$("#saveBtn").css("display","none");
          				$("#alertid").css("visibility","visible");
          				$("#alertid").css("display","");
          				$("#alertid").text("Ticket T18192 raised successfully.");

          			  }, 3000);

                }
                else
                {
                	
                	$("#saveBtn").css("visibility","visible");
          			$("#saveBtn").css("display","");
          			$("#progressbtn").css("visibility","hidden");
          			$("#progressbtn").css("display","none");          			
          			$("#alertid").css("visibility","hidden");
          			$("#alertid").css("display","none");
                }
               

            }); //save btn

});


function resetNewFields()
{
	$('#sel1').val("");
	$('#sel2').val("");
	$('#sel3').val("");
	$('#sel4').val("");
	$('#sel5').val("");
	$('#sel6').val("");
	$('#classification').val("");
	$('#Priority').val("Low");
	$('#comment').val("");
	$('#file').val("");
	$("#saveBtn").css("visibility","visible");
	$("#saveBtn").css("display","");
	$("#progressbtn").css("visibility","hidden");
	$("#progressbtn").css("display","none");          			
	$("#alertid").css("visibility","hidden");
	$("#alertid").css("display","none");
}


function resetquickfields()
{
	$('#selquick').val("");
	$("#saveBtnquick").css("visibility","visible");
	$("#saveBtnquick").css("display","");
	$("#progressbtnquick").css("visibility","hidden");
	$("#progressbtnquick").css("display","none");          			
	$("#alertidquick").css("visibility","hidden");
	$("#alertidquick").css("display","none");
}


$('#dataFormquick').validate({ // initialize the plugin
                rules: {
                    selquick: {
                        required: true
                    }
                },
                messages: {
                    selquick: {
                        required: "Ticket type is mandatory"                        
                    }
                }
            });


$('#saveBtnquick').bind("click", function() {

               
    if($('#dataFormquick').valid()){

    	    $("#progressbtnquick").css("visibility","visible");
			$("#progressbtnquick").css("display","");
			$("#saveBtnquick").css("visibility","hidden");
			$("#saveBtnquick").css("display","none");
			$("#alertidquick").css("visibility","hidden");
			$("#alertidquick").css("display","none");

			setTimeout(function(){

				let category = "Login";
				let dept 	= "OTS";
				let ticketno = "T18201";
				let status = "Open";
				let creation = "04/28/2019";
				let closeddate = "";
				let classification = "Problem";
				let Priority = "High";
				let Description = "Unlock user id";

				dataSet.unshift([ticketno, category, dept, status, creation, "" ]);
		
				$("#progressbtnquick").css("visibility","hidden");
				$("#progressbtnquick").css("display","none");
				$("#saveBtnquick").css("visibility","hidden");
				$("#saveBtnquick").css("display","none");
				$("#alertidquick").css("visibility","visible");
				$("#alertidquick").css("display","");
				$("#alertidquick").text("Ticket T18201 raised successfully.");

			  }, 3000);

    }
    else
    {
    	
    	$("#saveBtn").css("visibility","visible");
			$("#saveBtn").css("display","");
			$("#progressbtn").css("visibility","hidden");
			$("#progressbtn").css("display","none");          			
			$("#alertid").css("visibility","hidden");
			$("#alertid").css("display","none");
    }
   

}); //save btn

