
	function changeStatus(ele, to_be_changed){
		checked = ele.checked;
		if (checked){
			$(to_be_changed).show();
			if(to_be_changed == '.submit-block'){
				$(to_be_changed).append('<h1 class="title is-4 final-response"></h1><button id="submit" type="submit">Submit</button>');
			}
		}
		else{
			$(to_be_changed).hide();
			if(to_be_changed == '.submit-block'){
				$(to_be_changed).empty();
			}
		}
	}

  function alterOtherTextBox(e){
    if(e.target.checked){
      $("#other-option").show();
    }else{
      $("#other-option").hide();
    }
  }
/*  const fileInput = document.querySelector('#file-js-example input[type=file]');
  fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
    	file = fileInput.files[0].name;
    	var allowedExtensions =  /(\.doc|\.docx|\.odt|\.txt)$/i; 
            if (!allowedExtensions.exec(file)) {
                alert('Invalid file type');
                return;
            }
      const fileName = document.querySelector('#file-js-example .file-name');
      fileName.textContent = fileInput.files[0].name;
      var reader = new FileReader();
      var file = fileInput.files[0];
      reader.onload = function() {
      	console.log(reader.result);
        document.getElementById('fileContent').value = reader.result;
        document.getElementById('fileName').value = file.name;
      }
      reader.readAsDataURL(file);
    }
  }
*/
  
   (function()
      {
      	var burger=document.querySelector('.burger');
      	var nav=document.querySelector('#'+burger.dataset.target);


      	burger.addEventListener('click', function()
      	{
      		burger.classList.toggle('is-active');
      		nav.classList.toggle('is-active' );
      		


      	});
      })();

  	function redirect(url){
  		window.location.href = url;
  	}

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyEfOn7hVdb1150VIDSJqesAhvKHtYeRWwtGNgJaOGpDHcwqpbzB2Z1lz3eo0u_wGDT_Q/exec'
    const form = document.forms['book_session_form']

    form.addEventListener('submit', e => {
            e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
      	console.log('Success!', response);
      	$("#submit").text("Thank You");
      	setTimeout(redirect, 2000, "index");
      })
      .catch(error => {
      	console.error('Error!', error.message);
      	$("#submit").text("Error");
      	setTimeout(redirect, 2000, "snapform");
      })
    })



    $(function()
      {
        $("form").submit(function()
            {
              $("#submit").text("Wait")
                .addClass("is-static");
              $("fieldset").attr("disabled","disabled");
            }
          )
      });

  
  
	var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  	function validateStep1(){
  		if (!$('#name').val()){
  			alert("Please enter your name");
  			return ["Error"];
  		}
  		if (!$('#email').val()){
  			alert("Please enter your email");
  			return ["Error"];
  		}
  		if(!mailformat.test($('#email').val()))
  		{
    			alert("Please enter a valid email");
    			return ["Error"];
  		}
  		if ((!$('#phone').val()) || (!($('#phone').val().length == 10))){
  			alert("Please enter a valid contact number");
  			return ["Error"];
  		}
      if (!$('input[name="qualification"]').val() || !$('input[name="field-study"]').val() || !$('input[name="institution"]').val() || !$('input[name="workex"]:checked').val() ){
        alert("Please fill all the fields");
        return ["Error"];
      }
  		return true;
  	}

  	function validateStep2(){
  		if (!$('.workExCheckboxes input[type="checkbox"]:checked').val()){
  			alert("Please choose a service");
  			return ["Error"];
  		}
      if($('input[id="other-checkbox"]:checked').val()){
        if(!$('#other-option').val()){
          alert("Please specify the other option");
          return ["Error"];
        }
      }
  		if (!$('input[name="slot"]:checked').val()){
  			alert("Choose a time slot of your preference");
  			return ["Error"];
  		}
  		if (!$('#description').val()){
  			alert("Please fill all the fields");
  			return ["Error"];
  		}
      if (!$('#other-detail').val()){
        alert("Please fill all the fields");
        return ["Error"];
      }

  		return true;
  	}

  	/*function validateStep3(){
  		if (!$('#careerInterests').val()){
  			alert("Please tell us some of your interests");
  			return ["Error"];
  		}
  		if (!$('#whySNAP').val()){
  			alert("Please tell us why do you want to enroll in SNAP");
  			return ["Error"];
  		}
  		/*if (!$('#fileContent').val()){
  			alert("Please upload any of your writing sample here");
  			return ["Error"];
  		}*
  		return true;
  	}

  	function validateStep4(){
      tick_boxes = [
      "english_language",
      "engaging_content",
      "linux",
      "coding",
      "office_tools",
      "digitalMarketing",
      "impressive_communication",
      "email_writing",
      "feedback",
      "cognitive_biases",
      "communicator",
      "pitching",
      "time_manage",
      "observation_skills",
      "creative_critical",
      "resumeBuilding",
      "groupDiscussion"
      ]

      for(i=0;i<tick_boxes.length;i++){
        if(!($('[name='+tick_boxes[i]+']:checked').length > 0)){
    			alert("Please tick all the boxes");
    			return ["Error"];
    		}
      }
  		return true;
  	}*/
 var steps = new bulmaSteps.attach("#stepsDemo", {
    beforeNext: function( step_id ) {
        switch( step_id ) {
          case 0:
          	return validateStep1();
            break;
          case 1:
          	return validateStep2();
          	break;
          }
      },
    onShow: (id) => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
//	  onFinish
//	  onError*/
    });