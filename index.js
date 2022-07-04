let coronaTracker = {
    url : "https://api.covid19api.com/summary",

    getUpdate : async function(){
        let response = await fetch(this.url);
        if(!(response.ok == true)){
            alert("Please enter correct contry name");
        }
        else{
            let data = await response.json();
            return data;
        }
    },
    updateData : function(){

        let data = this.getUpdate();
        data.then(data1 => {
            console.log(data1);
            document.querySelector('#death').innerText = data1.Global.TotalDeaths;
            document.querySelector('#confirmed').innerText = data1.Global.NewConfirmed;
            document.querySelector('#recoverd').innerText = data1.Global.TotalRecovered;
        })
        

    },
   
};
    // search : function(newUrl)


coronaTracker.updateData();

document.getElementById('refresh').addEventListener('click', () => {
    console.log("clicked");
})

