// function fetchData2() {
//     fetch(`https://data.go.th/api/3/action/package_search?q=&use_default_schema=true&rows=47`).then(response => {
//         if(!response.ok){
//             throw Error("error");
//         }
//         return response.json();
//     })
//     .then(data => {
//         let output2 = "";
//         //console.log(data.result.results);
//         data.result.results.forEach(function(group) {
//             group.resources.forEach(function(product) {
//                 var date = moment(product.last_modified).locale('th').format('LL'); //convert to date locale
                
//                 //var old = JSON.stringify(product.ckan_url).replace('https://', '""'); //convert to JSON string
//                 //var newArray = JSON.parse(old);
//                 //console.log(old);
                
//                 output2 += `
//                 <div class = "column"> 
//                 <div class="card" style="width: 100%;height: 100%;">
//                 <div class="card-body">
//                   <h5 class="card-title" style="max-width: 288px; line-height: 1.5em; height: 3em; overflow: hidden; text-overflow: ellipsis; width: 100%; font-size: 25px; font-family: 'Kanit', sans-serif;">${product.name}</h5>
//                   <p class="card-text" id="notes" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 400px; font-size: 16px; padding-bottom: 10px; font-family: 'Kanit', sans-serif;">${product.description}</p>
//                   <div><img src="assets/img/icons/calendar.png" height="15" alt="..." style="margin-left: 2px; margin-right: 10px;"/><label style="font-size: 14px;margin-top: 5px; font-family: 'Kanit', sans-serif;">${date}</div>
//                   <div><img src="assets/img/icons/building.png" height="15" alt="..." style="margin-left: 2px; margin-right: 10px; margin-bottom: 28px;"/><label style="font-size: 14px;margin-top: 5px; font-family: 'Kanit', sans-serif; white-space: nowrap;
//                   text-overflow: ellipsis; overflow: hidden; max-width: 240px;">${group.maintainer}</div>
//                   <div style="margin-top: 1%;">
//                   <a href='http://playground.opend.cloud/${product["ckan_url"]}/ckan/${product["id"]}' class="btn btn-primary" id ="urlgo">Playground</a>
//                   <a href='${product["ckan_url"]}/dataset/${product["package_id"]}' class="btn btn-primary" id =""  style="background-color: white;border: white;"><img src="assets/img/icons/url.png" height="24.5" alt="..."/></a>
//                   </div>
//                 </div>
//                 </div>
//                 </div>`;
//             }
//           );
//           dataOutput2.innerHTML = output2
//         })
//     })
//     .caches(error => {
//         console.log(error);
//     });
// }

// fetchData2();