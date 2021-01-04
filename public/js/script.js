$("#btn-submit").on("click", function(){
    let name = $("#name").val()
    let age = $("#age").val()
    let hometown = $("#hometown").val()
    let favoriteHobby = $("#favorite-hobby").val()

    let body = {
        name, age, hometown, favoriteHobby
    }

    $.ajax({
        url:"/api/info" , 
        method: "POST", 
        data: body
    }).then(function(results){
        loadData()
    })


})



// Get Request
function loadData(){
    $.get("/api/info", function(results){
        console.log("results", results)
        $("#output").empty()
        for (let i = 0; i < results.length; i++) {
            $("#output").append(results[i].name + " " + results[i].age + " " + results[i].hometown + " " + results[i].favoriteHobby + "<br>")
            
        }
    })
}

loadData()