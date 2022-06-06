function fetchData() {
  
  var domain = ["https://gdcatalog.go.th","https://data.go.th"]  
  let output1 = "";
  let searchText = document.getElementById('searchText').value;
  console.log(searchText)

  for (let i = 0; i < domain.length; i++) {
  console.log(domain[i])
  fetch(`${domain[i]}/api/3/action/package_search?q=${searchText}&use_default_schema=true&rows=20`).then(response => {
        if(!response.ok){
            throw Error("error");
        }
        return response.json();
    })
    .then(data => {
        console.log(data.result.results);
        data.result.results.forEach(function(group) {
            group.resources.forEach(function(product) {
              if(product.datastore_active && product.datastore_contains_all_records_of_source_file){
              var date = moment(product.metadata_modified).locale('th').add(543, 'year').format('LL');
              var url = domain[i].split("//")[1]
              console.log(domain[i])
              output1 +=`
              <div class = "col-md-4 col-sm-12 api-dispaly"> 
              <div class = "column" > 
              <div class="card" style="width: 100%;height: 100%; box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;">
              <div class="card-body">
                <h5 class="card-title" style="max-width: 288px; line-height: 1.5em; height: 3em; overflow: hidden; text-overflow: ellipsis; width: 100%; font-size: 25px; font-family: 'Kanit', sans-serif;">${product.name}</h5>
                <p class="card-text" id="notes" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 400px; font-size: 16px; padding-bottom: 10px; font-family: 'Kanit', sans-serif;">${product.description}</p>
                  <div>
                      <img src="assets/img/icons/calendar.png" height="15" alt="..." style="margin-left: 2px; margin-right: 5px;"/>
                      <label style="font-size: 14px;margin-top: 5px; font-family: 'Kanit', sans-serif;">${date}</div>
                  <div class="div-logo col-md-12 col-sm-12 col-lg-12">
                      <div class=""><img src="assets/img/icons/building.png" height="15" style="margin-top: 5px;"/></div>
                      <div class="col-md-12 col-img-ower"><label class="content-col">${group.organization.title}</div></div>
                  <div style="margin-top: 1%;">
                      <a href='http://playground.opend.cloud/${url}/ckan/${product["id"]}' class="btn btn-primary" target="_blank">Playground</a>
                      <a href='${product["ckan_url"]}/dataset/${product["package_id"]}/resource/${product.id}'   target="_blank" style="background-color: white;border: white;"  alt="${url}"><img src="assets/img/icons/gdcatalog.png" height="24.5" class="img_ori"/></a>
                  </div>
              </div>
              </div>
              </div>
              </div>`; 
              dataOutput1.innerHTML = output1;
              $(".col-md-4:hidden").slice(0, 12).slideDown();
            }
           });
        })
    })
  }
  }

fetchData();
