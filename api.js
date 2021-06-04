function execute(input_string){  
    console.log(input_string);  

    var url = "http://localhost:8020/sample1"

    fetch(url, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        'input': input_string,
    })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data.data);
        var con_str =''
        for (index = 0; index < data.data.length; index++){
            con_str += '<div class="p-2 bd-highlight" style="background-color: rgb(2, 4, 32); \
                    margin: 0 5px; margin-top: 5px; margin-bottom: 5px; color: white;\
                    font-size: 20px; border-color: orange; border-width: 1px; opacity: 0.7; border-radius: 10px;">' + data.data[index] + '</div>';
            
        }
        document.getElementById('output').innerHTML = con_str
      })
    .catch(err => {
        console.log(err)
    })
   }  